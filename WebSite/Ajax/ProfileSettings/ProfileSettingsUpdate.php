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
		$Insert=mysql_query("UPDATE tbluser SET UserName='".$_POST["UserName"]."',NameSurname='".$_POST["NameSurname"]."',Password='".$_POST["Password"]."',Email='".$_POST["Email"]."' WHERE UserId=".$_POST["UserId"]."");
		if($Insert){
			echo "1";			
		}
		else{
			echo "0";
		}
	}
?>