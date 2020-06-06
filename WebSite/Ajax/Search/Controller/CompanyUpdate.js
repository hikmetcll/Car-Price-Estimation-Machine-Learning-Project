$("#btnEditCompanyModal").click(function ()  {
			if(!document.getElementById("txtEditCompanyName").value || !document.getElementById("txtEditCompanyCode").value || !document.getElementById("txtEditAddress").value || !document.getElementById("txtEditAuthorizedName").value || !document.getElementById("txtEditCompanyPhone").value || !document.getElementById("txtEditCompanyValidity").value || !document.getElementById("txtEditPhoneCredit").value )
			{
				Swal.fire({
					type: 'error',
					title: 'Lütfen Tüm Alanları Doldurunuz',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
				})
				setTimeout(function(){$("#EditCompanyModal").modal("show");}, 1100);
				
			}
			else
			{
			  var CompanyFormData = new FormData();

				 CompanyFormData.append("CompanyName",document.getElementById("txtEditCompanyName").value);
				 CompanyFormData.append("CompanyCode",document.getElementById("txtEditCompanyCode").value);
				 CompanyFormData.append("CompanyAddress",document.getElementById("txtEditAddress").value);
				 CompanyFormData.append("AuthorizedName",document.getElementById("txtEditAuthorizedName").value);
				 CompanyFormData.append("CompanyPhone",document.getElementById("txtEditCompanyPhone").value);
				 CompanyFormData.append("State",document.getElementById("EditCompanyState").value);
				 CompanyFormData.append("Validity",document.getElementById("txtEditCompanyValidity").value);
				 CompanyFormData.append("PhoneCredit",document.getElementById("txtEditPhoneCredit").value);
				 CompanyFormData.append("CompanyId",document.getElementById("btnEditCompanyModal").value);
				 CompanyFormData.append("UserId",document.getElementById("UserId").value);
				 CompanyFormData.append("UserName",document.getElementById("UserName").value);
				 $.ajax({
				   url: 'Ajax/Company/CompanyUpdate.php',
				   dataType: 'text',
				   cache: false,
				   contentType: false,
				   processData: false,
				   data: CompanyFormData,
				   type: 'post',
				   success: function (ResponseCompanyEdit) {  
					 if(ResponseCompanyEdit=="1"){
						 
								setTimeout(function(){window.location.href = '';}, 1100);
						Swal.fire({
							type: 'success',
							title: 'Güncelleme Başarılı',
							showConfirmButton: false,
							timer: 1100
						})

					 }
					 else if(ResponseCompanyEdit=="0"){
					   Swal.fire({
							type: 'error',
							title: 'Güncelleme Başarısız Oldu',
							showConfirmButton: true,
						 confirmButtonText:'Tamam'
						})
						setTimeout(function(){$("#EditCompanyModal").modal("show");}, 1100);
					 }
					 else if(ResponseCompanyEdit=="2"){
					   Swal.fire({
							type: 'info',
							title: 'Aynı İsimde Veya Kod"da Başka Kayıt Var',
							showConfirmButton: true,
						 confirmButtonText:'Tamam'
						})
						setTimeout(function(){$("#EditCompanyModal").modal("show");}, 1100);
					 }
				   }

				 });
			}
               
            });