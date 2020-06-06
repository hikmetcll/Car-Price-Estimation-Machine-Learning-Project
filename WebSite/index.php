<?php include"json_model/connection.php";?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<title>Pfinder | Anasayfa </title>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.css" rel="stylesheet">
		<link href="dist/css/NonEditstyle.min.css" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>	
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>				
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
		
	</head>
	<body class="horizontal-nav  skin-megna fixed-layout">

		<div id="main-wrapper">
			<header class="topbar">
				<nav class="navbar top-navbar navbar-expand-md navbar-dark">
					<div class="navbar-header" style="background:white; border: 2px solid white;">
						<center>
							<a class="navbar-brand text-center" href="homepage.php">
								<h3 style="color:#000;">Pfinder</h3>
							</a>
						</center>
					</div>
					<div class="navbar-collapse">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a>
							</li>
							<li class="nav-item"> 
								<a class="nav-link sidebartoggler d-none waves-effect waves-dark" href="javascript:void(0)"><i class="icon-menu"></i></a> 
							</li>
						</ul>
						<ul class="navbar-nav my-lg-0">
							<li class="nav-item dropdown u-pro">
								<a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<img src="assets/images/users/1.jpg" alt="user" class=""> <span class="hidden-md-down"> &nbsp;<i class="fa fa-angle-down"></i></span> 
								</a>
								<div class="dropdown-menu dropdown-menu-right animated flipInY">
									<a class="dropdown-item" href="profileSettings.php"><i class="ti-user"></i> Profil Ayarları</a>
									<a href="Ajax/Exit/Exit.php" class="dropdown-item"><i class="fa fa-power-off"></i>Çıkış</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<aside class="left-sidebar">
				<div class="scroll-sidebar">
					<nav class="sidebar-nav">
						<ul id="sidebarnav">
							<li class="user-pro"> 
								<a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
									<img src="assets/images/users/1.jpg" alt="user-img" class="img-circle">
									<span class="hide-menu">&nbsp;</span>
								</a>
								<ul aria-expanded="false" class="collapse">
									<li><a href="profileSettings.php"><i class="ti-user"></i> Profil Ayarları</a></li>
									<li><a href="Ajax/Exit/Exit.php"><i class="fa fa-power-off"></i> Çıkış</a></li>
								</ul>
							</li>
							<li><a href=""><i class="fa fa-laptop "></i>Tarama</a></li>
						</ul>
					</nav>
				</div>
			</aside>

			<div class="page-wrapper">
				<div class="container-fluid">
					<div class="row page-titles">
						<div class="col-md-5 align-self-center">
							<h4 class="text-themecolor">Taramalar</h4>
						</div>
						<div class="col-md-7 align-self-center text-right">
							<div class="d-flex justify-content-end align-items-center">
							<label  class="">Araç Tarama</label>                                                    
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row" id="scancontainer">
				<div class="col-9" style="padding-left:300px">
					<div class="card">
						<div class="card-body">
						<div class="container">
							<h1>Araba Fiyat Analizi</h1>
							<label for="cumle">Alttaki Forma Gerekli Bilgileri Giriniz</label><br>
							<label class="col-md-3">Marka :</label>
									<select class="col-md-6" id="marka" name="marka">
											<?php 
												$query=mysql_query("SELECT DISTINCT marka FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['marka']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['marka']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Seri :</label>
									<select class="col-md-6" id="seri" name="seri">
											<?php 
												$query=mysql_query("SELECT DISTINCT seri FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['seri']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['seri']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Model :</label>
									<select class="col-md-6" id="model" name="model">
											<?php 
												$query=mysql_query("SELECT DISTINCT model FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['model']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['model']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Yıl :</label>
									<select class="col-md-6" id="yil" name="yil">
											<?php 
												$query=mysql_query("SELECT DISTINCT yil FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
															echo"<option value='".$content['yil']."'>".($content['yil']*10000)."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Yakıt :</label>
									<select class="col-md-6" id="yakit" name="yakit">
											<?php 
												$query=mysql_query("SELECT DISTINCT yakit FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['yakit']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['yakit']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Vites :</label>
									<select class="col-md-6" id="vites" name="vites">
											<?php 
												$query=mysql_query("SELECT DISTINCT vites FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['vites']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['vites']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Hacim :</label>
									<select class="col-md-6" id="hacim" name="hacim">
											<?php 
												$query=mysql_query("SELECT DISTINCT hacim FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['hacim']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['hacim']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Güç :</label>
									<select class="col-md-6" id="guc" name="guc">
											<?php 
												$query=mysql_query("SELECT DISTINCT guc FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['guc']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['guc']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Kilometre :</label><input type="number" class="col-md-6" name="kilometre" id="kilometre" /><br>
							<label class="col-md-3">Takas :</label>
									<select class="col-md-6" id="takas" name="takas">
											<?php 
												$query=mysql_query("SELECT DISTINCT takas FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['takas']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['takas']."</option>"; 
															}
											?>
									</select><br>
							<label class="col-md-3">Kimden :</label>
									<select class="col-md-6" id="kimden" name="kimden">
											<?php 
												$query=mysql_query("SELECT DISTINCT kimden FROM tblcardetail");
												while($content=mysql_fetch_array($query))
															{
																$search=mysql_query("SELECT * FROM mlvalues WHERE data='".$content['kimden']."'");
																$result=mysql_fetch_array($search);
															echo"<option value='".$result['mldata']."'>".$content['kimden']."</option>"; 
															}
											?>
									</select><br>
							<br/>
							<button class="btn btn-success" onclick="olc()">Sonucu Getir</button>
							<h3 id="sonuc"></h3>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="resultcontainer" class="span5 center well hide" style="margin:0 auto; float:none; padding-bottom: 25px; background: white;">
			<span class="text-center"><h1><small>Çıktı</small></h1></span>
			<div id="result" class="text-center"></div>
			<div class="text-center"><button class="btn btn-primary btn-large" id="back">Geri</button></div>
		</div>
		<script>
				let model;
				let tens = [];
				async function modeliYukle() {
				model = await tf.loadLayersModel('json_model/model.json');
				}
				modeliYukle().then(function () {
					console.log('model yüklendi ');
				});
				function olc() {
					const verbose = true;
				tens[0]=parseFloat(document.getElementById("marka").value);
				tens[1]=parseFloat(document.getElementById("seri").value);
				tens[2]=parseFloat(document.getElementById("model").value);
				tens[3]=parseFloat(document.getElementById("yil").value);
				tens[4]=parseFloat(document.getElementById("yakit").value);
				tens[5]=parseFloat(document.getElementById("vites").value);
				tens[6]=parseFloat(document.getElementById("hacim").value);
				tens[7]=parseFloat(document.getElementById("guc").value);
				tens[8]=parseFloat(document.getElementById("kilometre").value/1000000);
				tens[9]=parseFloat(document.getElementById("takas").value);
				tens[10]=parseFloat(document.getElementById("kimden").value);
				console.dir(tens);
					const tokens = tf.tensor([tens]);
				model.predict(tokens).data().then(predictions => {
						console.log('Tahmin edilen Sonuc ::: '+predictions*1000000);
						$('#sonuc').html('Tahmin Edilen Fiyat ::: '+(Math.round(predictions*1000000))+' TL' );
					});
				}
		</script>
	</body>
</html>
