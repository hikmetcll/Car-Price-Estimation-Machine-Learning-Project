function companyDelete(ID) {
	   const swalWithBootstrapButtons = Swal.mixin({
		   customClass: {
			   confirmButton: 'btn btn-success',
			   cancelButton: 'mr-2 btn btn-danger'
		   },
		   buttonsStyling: false,
	   })

	   swalWithBootstrapButtons.fire({
		   title: 'Silmek istediğinize emin misiniz?',
		   text: "Yaptığınız değişiklikler geri alınamayacak!",
		   type: 'warning',
		   showCancelButton: true,
		   confirmButtonText: 'Evet, sil!',
		   cancelButtonText: 'İptal!',
		   reverseButtons: true
	   }).then((result) => {
			if (result.value) {
				var CompanyFormData = new FormData();
				CompanyFormData.append("CompanyId",ID);
				CompanyFormData.append("UserId",document.getElementById("UserId").value);
				CompanyFormData.append("UserName",document.getElementById("UserName").value);
				$.ajax({
					url: 'Ajax/Company/CompanyDelete.php',
					dataType: 'text',
					cache: false,
					contentType: false,
					processData: false,
					data: CompanyFormData,
					type: 'post',
					success: function (ResponseCompanyDelete) 
					{
						if(ResponseCompanyDelete=="1"){

								setTimeout(function(){
								window.location.href = '';
								}, 1100);
						Swal.fire({
							type: 'success',
							title: 'Veri Başarılı Bir Şekilde Silindi',
							showConfirmButton: false,
							timer: 1100
								})

						}
						else if(ResponseCompanyDelete=="0"){
						Swal.fire({
							type: 'error',
							title: 'Veri Silinemedi',
							showConfirmButton: true,
							confirmButtonText:'Tamam'
								})
						}
							
					}
				})
			} 
			else if (result.dismiss === Swal.DismissReason.cancel) {

				   swalWithBootstrapButtons.fire(

					   'İptal Edildi',
					   '',
					   'error'
				   )
			}
	   })
   }