<?php
	include('../../connection.php');
	set_time_limit(0);
	$id=$_POST['SectionId'];
	$data="";
		$CompanyQuery=mysql_query("select * from tblunit where SectionId=".$id."");
		while(@$Companycontent=mysql_fetch_array($CompanyQuery))
		{
			$data.=$Companycontent['UnitId'].'/'.$Companycontent['UnitName'].'#';
		}
		echo $data;
?>