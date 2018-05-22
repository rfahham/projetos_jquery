
		$(function(){

			//Função erro para imagens (link quebrado, erro no nome ...)

			$('img').error(function(){
				$('img').attr('src', 'images/imagem-error.jpg');
				
			});

			// Função de scroll

			$('body').css('height', '5000px');

			$(window).scroll(function(){
				var topo = $(window).scrollTop();
				if(topo>30){
					$('img').fadeOut('1000');
				}else{
					$('img').fadeIn('1000');
				}
				

			});
		});
