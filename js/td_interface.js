function pluralCarrinho() { //Retorna 'item' ou 'itens'
	var palavra = null;
	var valor = Number($('#header #cart .amount-items-em').html());
	valor == 1 ? palavra = 'item' : palavra = 'itens';
	console.log('pluralCarrinho() executado com sucesso!');
	return palavra;
}

$(document).ready(function () {
	
	$('.search-single-navigator li a').each(function(){
		var texto = $(this).html();
		var sliced = texto.split('(');
		$(this).html(sliced[0]);
	});

	$('#submenu div:not(".menu-departamento")').remove();
    if ($('body').is('.home')) {
    	
    	$('#banner .box-banner').each(function(){$(this).find('a').unwrap()});
        $('#banner').nivoSlider();

        $('#destaques > a').each(function () {
            $(this).addClass('lnkDestaque');
            $(this).prev('.box-banner').append($(this));
        });

        $('#destaques .lnkDestaque').each(function () {
            var content = $(this).html();
            $(this).html('<span>' + content + '</span>');
        });

        $('#destaques .box-banner:last').addClass('last');

        $('#destaques .box-banner').each(function () {
            $(this).children('a:first').mouseenter(function () {
                $(this).parent().find('.lnkDestaque').show();
            });
            $(this).children('a:first').mouseleave(function () {
                $(this).parent().find('.lnkDestaque').hide();
            });
        });

        $('.lnkDestaque').mouseenter(function () {
            $(this).show();
        });
        $('.lnkDestaque').mouseleave(function () {
            $(this).hide();
        })


    }
    
    $('.sub:last').remove();
    
    $('.amount-items').append('<span>Ítens</span>');
    
    $('body.resultado-busca .busca-vazio').append
	(
	'<p class="dicas"><strong>Dicas:</strong><br />. Tente palavras menos específicas.<br />. Tente palavras-chave diferentes.<br />. Mínimo 4 caracteres.<br />. Navegue pelo menu lateral.</p>'
	);
	
	
	
	if($('body').is('.lookbook')){
		
		$('#lookbook .box-banner').each(function(){
			$(this).wrap("<li />");
		})
		$('#lookbook').jcarousel({scroll:1,wrap:"circular"});
	}
	
	if($('body').is('.campanha')){
		$('#campanha .box-banner:first').attr('style','display:block');
		$("#campanha .box-banner").each(function(index){
			$(this).addClass('index'+index);
			var objeto = $(this).clone().wrap('<li class="index'+index+'" />');
			$('#campanha-thumbs').append(objeto);
		});
		
		$("#campanha-thumbs .box-banner").each(function(index){
			$(this).wrap('<li class="index'+index+'" />');
		});
		
		$("#campanha-thumbs li").click(function(){
			var classe = $(this).attr('class');
			var newClasse = classe.split(' ');
			var classeFinal = newClasse[0];
			$('#campanha .box-banner').attr('style','display:none');
			$('#campanha .'+classeFinal+'').attr('style','display:block');
		});
		
		$('#campanha-thumbs').jcarousel({scroll:1});
	}
	
	if($('body').is('.press')){
		$('#press .box-banner:first').attr('style','display:block');
		$("#press .box-banner").each(function(index){
			$(this).addClass('index'+index);
			var objeto = $(this).clone().wrap('<li class="index'+index+'" />');
			$('#press-thumbs').append(objeto);
		});
		
		$("#press-thumbs .box-banner").each(function(index){
			$(this).wrap('<li class="index'+index+'" />');
		});
		
		$("#press-thumbs li").click(function(){
			var classe = $(this).attr('class');
			var newClasse = classe.split(' ');
			var classeFinal = newClasse[0];
			$('#press .box-banner').attr('style','display:none');
			$('#press .'+classeFinal+'').attr('style','display:block');
		});
		
		$('#press-thumbs').jcarousel({scroll:1});
	}


});

$(window).load(function(){if($('body').is('.produto')){$('#show .thumbs:not(.jcarousel-list)').show().jcarousel({vertical:true,scroll:1});}});
$(document).ajaxStop(function(){
	if($('body').is('.produto')){
		var show=$('#show'),thumb=show.find('.thumbs'),newUl;
		if(!thumb.hasClass("jcarousel-list"))
		{
			thumb.show().jcarousel({vertical:true,scroll:1});
			return;
		}
		
		newUl=$('<ul class="thumbs"></ul>');
		thumb.find(">li:not(.jcarousel-item)").appendTo(newUl);
		show.find('.jcarousel-container').remove();
		show.append(newUl);
		newUl.show().jcarousel({vertical:true,scroll:1});
	}
});

$(document).ajaxStop(function(){
	// #header
	$('#header #cart li.amount-items').append($('#header #cart > .carrinho-compl')); // Posiciona "itens" no carrinho
	$('#header #cart .carrinho-compl').html(pluralCarrinho()); // Coloca singular ou plural da palavra no carrinho
});