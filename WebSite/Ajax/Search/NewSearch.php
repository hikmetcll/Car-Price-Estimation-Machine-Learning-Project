<?php
	include('../connection.php');
	set_time_limit(0);
	
	$control=mysql_query("SELECT COUNT(*) FROM tblsearch where SearchName='".$_POST["SearchName"]."' ");
	$result=mysql_fetch_array($control);
	if($result[0]>=1)
	{
		echo"2";
	}
	else
	{
		$Insert=mysql_query("INSERT INTO tblsearch(SearchName,IpAddress,PortNo,UserId) VALUES ('".$_POST["SearchName"]."','".$_POST["IpAddress"]."','".$_POST["PortNo"]."','".$_POST["UserId"]."')");
			if($Insert){
				echo "1";
				
			}
			else{
				echo "0";
			}
	}
	
?>