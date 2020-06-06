<?php
	include('../connection.php');
	set_time_limit(0);
	
	$control=mysql_query("SELECT COUNT(*) FROM tblcompany where (CompanyName='".$_POST["CompanyName"]."' OR CompanyCode='".$_POST["CompanyCode"]."') AND CompanyId!=".$_POST["CompanyId"]." ");
	$result=mysql_fetch_array($control);
	if($result[0]>=1)
	{
		echo"2";
	}
	else
	{
		$Insert=mysql_query("UPDATE tblcompany SET CompanyName='".$_POST["CompanyName"]."',CompanyCode='".$_POST["CompanyCode"]."',CompanyAddress='".$_POST["CompanyAddress"]."',AuthorizedName='".$_POST["AuthorizedName"]."',CompanyPhone='".$_POST["CompanyPhone"]."',State='".$_POST["State"]."',Validity='".$_POST["Validity"]."',PhoneCredit='".$_POST["PhoneCredit"]."' WHERE CompanyId=".$_POST["CompanyId"]."");
		if($Insert){
			echo "1";
			mysql_query("INSERT INTO tbllog (UserId,UserName,UserIp,UserAct,UserActPage,UserActName,UserActId,Time) VALUES('".$_POST['UserId']."','".$_POST['UserName']."','".$_SERVER['REMOTE_ADDR']."','Güncelleme','Kurum','".$_POST["CompanyName"]."','".$_POST["CompanyId"]."','".date('Y-m-d H:i:s')."')");
		}
		else{
			echo "0";
		}
	}
?>