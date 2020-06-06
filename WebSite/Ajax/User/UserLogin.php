<?php
	include('connection.php');
	session_start();
	$UserName = $_Post['UserName'];
	$Password = $_Post['Password'];
	$sql_check = mysql_query("select * from tbluser where UserName='".$UserName."' and Password='".$passWord."' ") or die(mysql_error());
	if(mysql_num_rows($sql_check))  {
	    $_SESSION["login"] = "true";
	    $_SESSION["user"] = $UserName;
	    $_SESSION["pass"] = $Password;
	}
	else {
	    if($userName=="" or $passWord=="") {
	        echo "<center>Lutfen kullanici adi ya da sifreyi bos birakmayiniz..! <a href=javascript:history.back(-1)>Geri Don</a></center>";
	    }
	    else {
	        echo "<center>Kullanici Adi/Sifre Yanlis.<br><a href=javascript:history.back(-1)>Geri Don</a></center>";
	    }
	}
	?>
