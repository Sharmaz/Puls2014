var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$primerPost = $('.item').first(),
	$video = $('video'),
	$lista = $('#contenido');

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}
	
var id = setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario() {
	$form.slideToggle();
	$lista.slideToggle();
	$video.slideToggle();
	return false;
}

function agregarPost() {
	var titulo = $titulo.val(),
		url = $url.val(),
		$clone = $primerPost.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();
	$lista.prepend($clone);
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.slideDown();	
	return false;

}

function storageUrl(){
		$('#url').val(sessionStorage.getItem('url'));
	}
//Eventos
$('#mostrar-form').click( mostrarOcultarFormulario);
$('#formulario')
	.on('submit', agregarPost)
	.find('#url')
	.on('focus', function(){

		if ($('#url').val('')) {
			$('#url').val('http://');
		} else {	
			$('#url').storageUrl();
		}
	})
	.on('blur', storageUrl());
	