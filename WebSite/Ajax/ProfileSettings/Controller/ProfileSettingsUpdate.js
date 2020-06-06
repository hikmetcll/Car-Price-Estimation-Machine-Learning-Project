function UserUpdate()  {
			if(!document.getElementById("txtUserName").value || !document.getElementById("txtNameSurname").value || !document.getElementById("txtPassword").value || !document.getElementById("txtPasswordControl").value || !document.getElementById("tagsEmail").value)
			{
				Swal.fire({
					type: 'error',
					title: 'Lütfen Tüm Alanları Doldurunuz',
					showConfirmButton: false,
					timer: 1100
				})	
			}
			else
			{
			  var UserFormData = new FormData();

				 UserFormData.append("UserName",document.getElementById("txtUserName").value);
				 UserFormData.append("NameSurname",document.getElementById("txtNameSurname").value);
				 UserFormData.append("Password",document.getElementById("txtPassword").value);				 
				 UserFormData.append("Email",document.getElementById("tagsEmail").value);
				 UserFormData.append("UserId",document.getElementById("settingsSave").value);
				 $.ajax({
				   url: 'Ajax/ProfileSettings/ProfileSettingsUpdate.php',
				   dataType: 'text',
				   cache: false,
				   contentType: false,
				   processData: false,
				   data: UserFormData,
				   type: 'post',
				   
				   success: function (ResponseUserEdit) {  
					 if(ResponseUserEdit=="1"){
						Swal.fire({
							type: 'success',
							title: 'Güncelleme Başarılı',
							showConfirmButton: false,
							timer: 1100
						})
					 }
					 else if(ResponseUserEdit=="0"){
					   Swal.fire({
							type: 'error',
							title: 'Güncelleme Başarısız Oldu',
							showConfirmButton: false,
							timer: 1100
						})
					 }
					 else if(ResponseUserEdit=="2"){
					   Swal.fire({
							type: 'error',
							title: 'Aynı Kullanıcı Adında Başka Kayıt Var',
							showConfirmButton: false,
							timer: 1100
						})
					 }
				   }

				 });
			}
               
            }