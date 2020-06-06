<?php
	include('connection.php');
	set_time_limit(0);
	
	$Update=mysql_query("UPDATE tblUser SET NameSurname='".$_POST["NameSurname"]."',UserName='".$_POST["UserName"]."',Password='".$_POST["Password"]."' WHERE UserId=".$_POST["UserId"]."");
	if($Update){
		echo "1";
	}
	else{
		echo "0";
	}
?>