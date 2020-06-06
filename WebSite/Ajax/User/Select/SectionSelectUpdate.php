<?php
	include('../../connection.php');
	set_time_limit(0);
	$id=$_POST['SectionId'];
	$data="";
	$query=mysql_query("select * from tblsection where SectionId=".$id."");
		while(@$content=mysql_fetch_array($query))
		{
			$CompanyQuery=mysql_query("select * from tblsection where CompanyId=".$content['CompanyId']."");
			while($Companycontent=mysql_fetch_array($CompanyQuery))
		{
			$data.=$Companycontent['SectionId'].'/'.$Companycontent['SectionName'].'#';
		}
		}
		echo $data;
?>