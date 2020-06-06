<?php
	include('../connection.php');
	set_time_limit(0);
	$CompanyId=$_POST['CompanyId'];
	$namequery=mysql_query("SELECT * FROM tblcompany WHERE CompanyId=".$CompanyId);
	$nameresult=mysql_fetch_array($namequery);
	$DELETE=mysql_query("DELETE FROM tblcompany WHERE CompanyId=".$CompanyId);
	if($DELETE)
	{
		$UnitDelete=true;
		if(mysql_query("SELECT * FROM tbluser WHERE CompanyId=".$CompanyId))
		{
			$UserDelete=mysql_query("DELETE FROM tbluser WHERE CompanyId=".$CompanyId);
		}
		else
		{
			$UserDelete=true;
		}
		
		if(mysql_query("SELECT * FROM tbldevicesetting WHERE CompanyId=".$CompanyId))
		{
			$DeviceDelete=mysql_query("DELETE FROM tbldevicesetting WHERE CompanyId=".$CompanyId);
		}
		else
		{
			$DeviceDelete=true;
		}
		
		if(mysql_query("SELECT * FROM tblsection WHERE CompanyId=".$CompanyId))
		{
			$sectionquery=mysql_query("SELECT COUNT(*) FROM tblsection WHERE CompanyId=".$CompanyId);
			$control=mysql_fetch_array($sectionquery);
			if($control[0]>0)
			{
				$query=mysql_query("SELECT * FROM tblsection WHERE CompanyId=".$CompanyId);
					while($result=mysql_fetch_array($query))
					{
						if(mysql_query("SELECT * FROM tblunit WHERE SectionId=".$result['SectionId']))
						{
							$UnitDelete=mysql_query("DELETE FROM tblunit WHERE SectionId=".$result['SectionId']);
						}
						else
						{
							$UnitDelete=true;
						}
					}
			}
			else
			{
				$UnitDelete=true;
			}
			$SectionDelete=mysql_query("DELETE FROM tblsection WHERE CompanyId=".$CompanyId);
		}
		else
		{
			$SectionDelete=true;
			$UnitDelete=true;
		}
		
		if($UserDelete && $DeviceDelete && $UnitDelete && $SectionDelete)
		{
			echo"1";
			mysql_query("INSERT INTO tbllog (UserId,UserName,UserIp,UserAct,UserActPage,UserActName,UserActId,Time) VALUES('".$_POST['UserId']."','".$_POST['UserName']."','".$_SERVER['REMOTE_ADDR']."','Silme','Kurum','".$nameresult['CompanyName']."','".$_POST["CompanyId"]."','".date('Y-m-d H:i:s')."')");
		}
		else
		{
			echo"0";
		}
	}
	else
	{
		echo "0";
	}
?>
