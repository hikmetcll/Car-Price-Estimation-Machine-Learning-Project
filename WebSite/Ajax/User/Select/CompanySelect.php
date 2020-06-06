<?php
	include('../../connection.php');
	set_time_limit(0);
	$id=$_POST['CompanyId'];
	$data="";
	$query=mysql_query("select * from tblsection where CompanyId=".$id." order by SectionName");
		while(@$content=mysql_fetch_array($query))
		{
			$data.=$content['SectionId'].'/'.$content['SectionName'].'#';
		}
		echo $data;
?>