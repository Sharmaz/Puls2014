var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$primerPost = $('.item').first(),
	$video = $('video'),
	$lista = $('#contenido');
	

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
	$clone.slideDown();	
	return false;

}
//Eventos
$('#mostrar-form').click( mostrarOcultarFormulario);
$('#formulario').on('submit', agregarPost);