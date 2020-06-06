//** USER INSERT
$('#UserInsertButton').on('click', function () {
	var UserFormData = new FormData();
	
	UserFormData.append("NameSurname",document.getElementById("NameSurnameInsert").value);
	UserFormData.append("UserName",document.getElementById("UserNameInsert").value);
	UserFormData.append("Password",document.getElementById("PasswordInsert").checked);
	$.ajax({
		url: 'Ajax/User/AjaxUserInsert.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data: UserFormData,
		type: 'post',
		success: function (ResponseUserInsert) {
			if(ResponseUserInsert=="1"){
				alert("Kullanıcı Başarılı Olarak Eklendi.");
				window.location.href = '';
			}
			else if(ResponseUserInsert=="0"){
				alert("Hata Kullanıcı Eklenemedi Hata Oluştu. Lütfen Tekrar Deneyin.");
			}
		}
		
	});
});