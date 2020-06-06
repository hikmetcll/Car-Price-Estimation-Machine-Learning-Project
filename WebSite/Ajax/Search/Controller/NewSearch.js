$("#btnAddNewSearchModal").click(function () {
			if(!document.getElementById("txtNewSearchName").value || !document.getElementById("txtNewIPAdress").value || !document.getElementById("txtNewPortNo").value )
			{
				Swal.fire({
					type: 'error',
					title: 'Lütfen Tüm Alanları Doldurunuz',
					showConfirmButton: true,
					confirmButtonText:'Tamam'
				})
				setTimeout(function(){$("#AddNewSearchModal").modal("show");}, 1100);
				
			}
			else
			{
			  var UserFormData = new FormData();

				 UserFormData.append("SearchName",document.getElementById("txtNewSearchName").value);
				 UserFormData.append("IpAddress",document.getElementById("txtNewIPAdress").value);
				 UserFormData.append("PortNo",document.getElementById("txtFirstPortNo").value);
				 UserFormData.append("PortNo",document.getElementById("txtLastPortNo").value);				
				 UserFormData.append("UserId",document.getElementById("UserId").value);				
				 $.ajax({
				   url: 'Ajax/Search/NewSearch.php',
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
							title: 'Yeni Arama Kaydı Başarılı',
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
						setTimeout(function(){$("#AddNewSearchModal").modal("show");}, 1100);
					 }
					  else if(ResponseUserInsert=="2"){
					   Swal.fire({
							type: 'info',
							title: 'Aynı İsimde Veya Kod"da Başka Kayıt Var',
							showConfirmButton: true,
							confirmButtonText:'Tamam'
						})
						setTimeout(function(){$("#AddNewSearchModal").modal("show");}, 1100);
					 }
				   }

				 });
			}
               
            });