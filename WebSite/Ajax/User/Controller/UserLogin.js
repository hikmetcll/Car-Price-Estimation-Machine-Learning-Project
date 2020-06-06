$("#btnLogin").click(function () {
	if(!document.getElementById("txtUserName").value || !document.getElementById("txtAddUnitCode").value || !document.getElementById("txtCompanyCode").value)
	{
		document.getElementById("txtUserName").style=
		Swal.fire({
            type: 'error',
            title: 'Lütfen Tüm Alanları Doldurunuz',
            showConfirmButton: false,
            timer: 1100
        })
	}
	else {

		var UserFormData = new FormData();
		UserFormData.append("UserName",document.getElementById("txtUserName").value);
		UserFormData.append("Password",document.getElementById("txtAddUnitCode").value);
		UserFormData.append("CompanyId",document.getElementById("txtCompanyCode").value);
		$.ajax({
		 url: 'Ajax/User/UserLogin.php',
		 dataType: 'text',
		 cache: false,
		 contentType: false,
		 processData: false,
		 data: UserFormData,
		 type: 'post',
		 success: function (ResponseUserInsert) {
			 if(ResponseUserInsert=="1"){

					setTimeout(function(){window.location.href = '';}, 1100);
			Swal.fire({
				type: 'success',
				title: 'Giriş Başarılı',
				showConfirmButton: false,
				timer: 1100
			})

		 }
		 else if(ResponseUserInsert=="0"){
			 Swal.fire({
				type: 'error',
				title: 'Giriş Başarısız Oldu',
				showConfirmButton: false,
				timer: 1100
			})
		 }
		 }

		});

	}
