<?php
	include('../connection.php');
	set_time_limit(0);
	$UserId=$_POST['UserId'];
	$namequery=mysql_query("SELECT * FROM tbluser WHERE UserId=".$UserId);
	$nameresult=mysql_fetch_array($namequery);
	$DELETE=mysql_query("DELETE FROM tbluser WHERE UserId=".$UserId);
	if($DELETE){
		echo "1";
		mysql_query("INSERT INTO tbllog (UserId,UserName,UserIp,UserAct,UserActPage,UserActName,UserActId,Time) VALUES('".$_POST['ActUserId']."','".$_POST['ActUserName']."','".$_SERVER['REMOTE_ADDR']."','Silme','Kullanıcı','".$nameresult["UserName"]."','".$_POST['UserId']."','".date('Y-m-d H:i:s')."')");
	}
	else{
		echo "0";
	}
?>
