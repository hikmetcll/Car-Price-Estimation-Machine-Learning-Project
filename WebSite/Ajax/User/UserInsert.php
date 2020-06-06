<?php
	include('../connection.php');
	set_time_limit(0);
	
	$Insert=mysql_query("INSERT INTO tbluser(NameSurname,UserName,Email,Password,Status) VALUES ('".$_POST["NameSurname"]."','".$_POST["UserName"]."','".$_POST["Email"]."','".$_POST["Password"]."','".$_POST["Status"]."')");
	if($Insert){
		echo "1";
		}
	else{
		echo "0";
	}
	
?>