$("#btnAddNewUserModal").click(function () {
	if( !document.getElementById("txtUserNameSurnameInsert").value || !document.getElementById("txtUserNameInsert").value|| !document.getElementById("txtUserEmailInsert").value || !document.getElementById("txtUserPasswordInsert").value )
	{
		Swal.fire({
			type: 'error',
			title: 'Lütfen Tüm Alanları Doldurunuz',
			showConfirmButton: true,
			confirmButtonText:'Tamam'
		})
		setTimeout(function(){$("#InsertUserModal").modal("show");}, 1100);
		
	}
	else
	{
	  var UserFormData = new FormData();
		 UserFormData.append("NameSurname",document.getElementById("txtUserNameSurnameInsert").value);
		 UserFormData.append("UserName",document.getElementById("txtUserNameInsert").value);
		 UserFormData.append("Email",document.getElementById("txtUserEmailInsert").value);
		 UserFormData.append("Password",document.getElementById("txtUserPasswordInsert").value);
		 UserFormData.append("Status","Aktif");
		 $.ajax({
		   url: 'Ajax/User/UserInsert.php',
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
					title: 'Yeni Kayıt Başarılı',
					showConfirmButton: false,
					timer: 1100
				})

			 }
			 else if(ResponseUserInsert=="0"){
			   Swal.fire({
					type: 'error',
					title: 'Kayıt Başarısız Oldu',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
				})
				setTimeout(function(){$("#InsertUserModal").modal("show");}, 1100);
			 }
			  else if(ResponseUserInsert=="2"){
			   Swal.fire({
					type: 'error',
					title: 'Aynı Kullanıcı Adında Başka Kayıt Var',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
				})
				setTimeout(function(){$("#InsertUserModal").modal("show");}, 1100);
			 }
		   }

		 });
	}
	   
	});

