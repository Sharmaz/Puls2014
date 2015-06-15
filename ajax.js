$(function(){
	$.get('logos_footer.html', function(logos){
		$('footer').append(logos);
	});

	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;
		
		$('#avatar').append(avatar);

	});

});



