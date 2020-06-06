<?php
	include('../connection.php');
	set_time_limit(0);
	
	$control=mysql_query("SELECT COUNT(*) FROM tbluser where UserName='".$_POST["UserName"]."' AND UserId!=".$_POST["UserId"]." ");
	$result=mysql_fetch_array($control);
	if($result[0]>=1)
	{
		echo"2";
	}
	else
	{
		$Insert=mysql_query("UPDATE tbluser SET CompanyId=".$_POST["CompanyId"].",SectionId=".$_POST["SectionId"].",UnitId=".$_POST["UnitId"].",AuthorityType='".$_POST["AuthorizedType"]."',NameSurname='".$_POST["NameSurname"]."',UserName='".$_POST["UserName"]."',Email='".$_POST["Email"]."',Password='".$_POST["Password"]."',Gsm='".$_POST["Gsm"]."',Status='".$_POST["Validity"]."' WHERE UserId=".$_POST["UserId"]."");
		if($Insert){
			echo "1";
			mysql_query("INSERT INTO tbllog (UserId,UserName,UserIp,UserAct,UserActPage,UserActName,UserActId,Time) VALUES('".$_POST['ActUserId']."','".$_POST['ActUserName']."','".$_SERVER['REMOTE_ADDR']."','Güncelleme','Kullanıcı','".$_POST["UserName"]."','".$_POST['UserId']."','".date('Y-m-d H:i:s')."')");
		}
		else{
			echo "0";
		}
	}
?>