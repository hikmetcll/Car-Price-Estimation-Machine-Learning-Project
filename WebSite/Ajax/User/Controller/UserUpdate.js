$("#btnSaveEditUserModal").click(function () {
			if(document.getElementById("txtAuthorityTypeUpdate").value=="Kurum Yetkilisi" && (!document.getElementById("txtUserCompanyIdUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value) )
				{
				Swal.fire({
					type: 'error',
					title: 'Lütfen Kurum Alanını Veya Diğer Alanları Doldurunuz',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
					})
				setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Kurum Yetkilisi" && (!document.getElementById("txtUserSectionIdUpdate").value || !document.getElementById("txtUserUnitIdUpdate").value || !document.getElementById("txtAuthorityTypeUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value))
				{
					$('#txtUserSectionIdUpdate').empty();
					$('#txtUserUnitIdUpdate').empty();
					$('#txtUserSectionIdUpdate').append($('<option>', {value: 0,text: 0}));
					 $('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
					guncelle();
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Bölüm Yetkilisi" && (!document.getElementById("txtUserSectionIdUpdate").value || !document.getElementById("txtUserCompanyIdUpdate").value || !document.getElementById("txtAuthorityTypeUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value) )
				{
					Swal.fire({
					type: 'error',
					title: 'Lütfen Kurum, Bölüm Veya Diğer Alanları Doldurunuz',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
					})
				setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Bölüm Yetkilisi" && (!document.getElementById("txtUserUnitIdUpdate").value || !document.getElementById("txtAuthorityTypeUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value))
				{
					 $('#txtUserUnitIdUpdate').empty();
					 $('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
					guncelle();
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Ünite Yetkilisi" && (!document.getElementById("txtUserUnitIdUpdate").value || !document.getElementById("txtUserSectionIdUpdate").value || !document.getElementById("txtUserCompanyIdUpdate").value || !document.getElementById("txtAuthorityTypeUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value))
				{
					Swal.fire({
					type: 'error',
					title: 'Lütfen Kurum, Bölüm, Ünite Veya Diğer Alanları Doldurunuz',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
					})
				setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Admin" && (!document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value))
				{
					Swal.fire({
					type: 'error',
					title: 'Lütfen Tüm Alanları Doldurunuz1',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
					})
				setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
				}
				else if(document.getElementById("txtAuthorityTypeUpdate").value=="Admin" && (!document.getElementById("txtUserCompanyIdUpdate").value || !document.getElementById("txtUserSectionIdUpdate").value || !document.getElementById("txtUserUnitIdUpdate").value || !document.getElementById("txtUserNameSurnameUpdate").value || !document.getElementById("txtUserNameUpdate").value|| !document.getElementById("txtUserEmailUpdate").value || !document.getElementById("txtUserPasswordUpdate").value || !document.getElementById("txtGsmUpdate").value || !document.getElementById("txtUserStatusUpdate").value))
				{
					 $('#txtUserCompanyIdUpdate').empty();
					 $('#txtUserSectionIdUpdate').empty();
					 $('#txtUserUnitIdUpdate').empty();
					 $('#txtUserCompanyIdUpdate').append($('<option>', {value: 0,text: 0}));
					 $('#txtUserSectionIdUpdate').append($('<option>', {value: 0,text: 0}));
					 $('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
					guncelle();
					
				}
				else
				{
				if(document.getElementById("txtAuthorityTypeUpdate").value=="Ünite Yetkilisi")
					{
						guncelle();
					}
					else if(document.getElementById("txtAuthorityTypeUpdate").value=="Bölüm Yetkilisi")
					{
						$('#txtUserUnitIdUpdate').empty();
						$('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
						guncelle();
					}
					else if(document.getElementById("txtAuthorityTypeUpdate").value=="Kurum Yetkilisi")
					{
						$('#txtUserSectionIdUpdate').empty();
						$('#txtUserUnitIdUpdate').empty();
						$('#txtUserSectionIdUpdate').append($('<option>', {value: 0,text: 0}));
						$('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
						guncelle();
					}
					else if(document.getElementById("txtAuthorityTypeUpdate").value=="Admin")
					{
						$('#txtUserCompanyIdUpdate').empty();
					 $('#txtUserSectionIdUpdate').empty();
					 $('#txtUserUnitIdUpdate').empty();
					 $('#txtUserCompanyIdUpdate').append($('<option>', {value: 0,text: 0}));
					 $('#txtUserSectionIdUpdate').append($('<option>', {value: 0,text: 0}));
					 $('#txtUserUnitIdUpdate').append($('<option>', {value: 0,text: 0}));
					guncelle();
					}
				}   
			function guncelle()
			{
			  var UserFormData = new FormData();

				 UserFormData.append("CompanyId",document.getElementById("txtUserCompanyIdUpdate").value);
				 UserFormData.append("SectionId",document.getElementById("txtUserSectionIdUpdate").value);
				 UserFormData.append("UnitId",document.getElementById("txtUserUnitIdUpdate").value);
				 UserFormData.append("AuthorizedType",document.getElementById("txtAuthorityTypeUpdate").value);
				 UserFormData.append("NameSurname",document.getElementById("txtUserNameSurnameUpdate").value);
				 UserFormData.append("UserName",document.getElementById("txtUserNameUpdate").value);
				 UserFormData.append("Email",document.getElementById("txtUserEmailUpdate").value);
				 UserFormData.append("Password",document.getElementById("txtUserPasswordUpdate").value);
				 UserFormData.append("Gsm",document.getElementById("txtGsmUpdate").value);
				 UserFormData.append("Validity",document.getElementById("txtUserStatusUpdate").value);
				 UserFormData.append("UserId",document.getElementById("btnSaveEditUserModal").value);
				 UserFormData.append("ActUserId",document.getElementById("ActUserId").value);
				 UserFormData.append("ActUserName",document.getElementById("ActUserName").value);
				 $.ajax({
				   url: 'Ajax/User/UserUpdate.php',
				   dataType: 'text',
				   cache: false,
				   contentType: false,
				   processData: false,
				   data: UserFormData,
				   type: 'post',
				   success: function (ResponseUserUpdate) {
					   if(ResponseUserUpdate=="1"){
						 
								setTimeout(function(){window.location.href = '';}, 1100);
						Swal.fire({
							type: 'success',
							title: 'Güncelleme Başarılı',
							showConfirmButton: false,
							timer: 1100
						})

					 }
					 else if(ResponseUserUpdate=="0"){
					   Swal.fire({
							type: 'error',
							title: 'Güncelleme Başarısız Oldu',
							showConfirmButton: true,
							confirmButtonText:'Tamam'
						})
						setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
					 }
					  else if(ResponseUserUpdate=="2"){
					   Swal.fire({
							type: 'info',
							title: 'Aynı Kullanıcı Adında Başka Kayıt Var',
							showConfirmButton: true,
							confirmButtonText:'Tamam'
						})
						setTimeout(function(){$("#UpdateUserModal").modal("show");}, 1100);
					 }
				   }

				 });
			}
            });