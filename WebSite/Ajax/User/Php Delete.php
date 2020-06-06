<?php
	include('connection.php');
	set_time_limit(0);
	$UserId=$_POST['UserId'];
	
	$DELETE=mysql_query("DELETE FROM tblUser WHERE UserId=$UserId");
	if($DELETE){
		echo "1";
	}
	else{
		echo "0";
	}
?>