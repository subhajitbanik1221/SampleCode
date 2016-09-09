







				
				var pos=0;
					$(window).scroll(function(){
					var wScroll=$(this).scrollTop();
					
					//>>>>>>>>>>> START OF PARALLAX EFFECT FOR FIXED BACKGROUND MOVING ELEMENT <<<<<<<<<<<<
					
					//Rotate logo
						$('#logo h1').css({
							'transform':'translate(0px, '+(wScroll*0.9)+'%)' 
						});
						
						$('#logo h3').css({
							'transform':'translate(0px, '+(wScroll*0.9)+'%)' 
						});;
						
						
					//Move earth	
						$('#moving-earth').css({
							'transform':'translate('+wScroll/3+'px, '+(wScroll/1.5)+'%)'
						});
					//Move moon
						$('#moving-moon').css({
							'transform':'translate(0px, '+(wScroll*2)+'%)'
						});
					//Move mars
						$('#moving-mars').css({
							'transform':'translate('+wScroll/0.9+'px, '+wScroll/0.9+'%)'
						});
					//Move Background tranpaent stars
						$('#moving-star').css({
							'transform':'translate('+(-wScroll/0.8)+'px,0px)'
						});
						$('#header-elements').css({
							'transform':'translate(0px, -'+(wScroll/40)+'%)'
						});
						
						
						
						if(wScroll>$('#mouse-icon').offset().top -($(window).height()/2.5)){
						
							$("#mouse-icon").css({visibility: 'hidden'});
							
							
						}
						else{
						
							$("#mouse-icon").css({visibility: 'visible'});
							
						}
						
						if(wScroll>$('#introduction-design').offset().top -($(window).height()/2.5)){
						
							$('#introduction-design div').each(function(i){
								
								setTimeout(function(){
								$('#introduction-design div').eq(i).css({'opacity':'1', 'transform':'translateX(0px)'});
								},150*(i+1));
							});
						}
						else{
						
							$('#about-me').css({'opacity':'0'});
							$('#laptop-pic').css({'opacity':'0'});
						}
						
						
					
						
					//>>>>>>>>>>> END OF PARALLAX EFFECT FOR FIXED BACKGROUND MOVING ELEMENT <<<<<<<<<<<<
						
						
					//>>>>>>>>>>> LIST OF ICON LANDING PARALAX EFFECT <<<<<<<<<<<<<<<	
						if(wScroll>$('#side-menu').offset().top -($(window).height()/7)){
						
							$("#side-menu").css({transform: 'translateX(0px)'});
							$('#wrapper').css({transform: 'translateX(-'+pos+'px)'});
							
						}
						else{
						
							$("#side-menu").css({transform: 'translateX(-250px)'});
							$('#wrapper').css({transform: 'translateX(0px)'});
						}
					//>>>>>>>>>>> LIST OF ICON LANDING PARALAX EFFECT <<<<<<<<<<<<<<<
						
					});
					
					//>>>>>>>>>>> Popup effect <<<<<<<<<<<<<<<
					$(document).ready(function(){
						$('#intro').click(function(){
							$('#wrapper').css({transform: 'translateX(0px)'});
							$('.big-div').css({opacity: '1'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=0;
							
						});
						
						$('#wk').click(function(){
							$('#wrapper').css({transform: 'translateX(-1350px)'});
							$('.big-div1').css({opacity: '1'});
							$('.big-div').css({opacity: '0'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=1348;
							
						});
						

						$('#ed').click(function(){
							$('#wrapper').css({transform: 'translateX(-2698px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div2').css({opacity: '1'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=2698;
						});

						
						/* $('#ac').click(function(){
							$('#wrapper').css({transform: 'translateX(-4048px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div3').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=4047;
						});
						
						
						$('#cr').click(function(){
							$('#wrapper').css({transform: 'translateX(-5397px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div4').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=5397;
						});
						
						
						$('#pr').click(function(){
							$('#wrapper').css({transform: 'translateX(-6747px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div5').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=6747;
						});
						
						
						$('#sk').click(function(){
							$('#wrapper').css({transform: 'translateX(-8097px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div6').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=8097;
						});
						
						
						$('#or').click(function(){
							$('#wrapper').css({transform: 'translateX(-9445px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div7').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=9445;
						});
						
						
						$('#in').click(function(){
							$('#wrapper').css({transform: 'translateX(-10794px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div8').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							$('.big-div9').css({opacity: '0'});
							pos=10794;
						});
						
						
						$('#ad').click(function(){
							$('#wrapper').css({transform: 'translateX(-12144px)'});
							$('.big-div').css({opacity: '0'});
							$('.big-div9').css({opacity: '0.7'});
							$('.big-div2').css({opacity: '0'});
							$('.big-div3').css({opacity: '0'});
							$('.big-div4').css({opacity: '0'});
							$('.big-div5').css({opacity: '0'});
							$('.big-div6').css({opacity: '0'});
							$('.big-div7').css({opacity: '0'});
							$('.big-div8').css({opacity: '0'});
							$('.big-div1').css({opacity: '0'});
							pos=12144;
						}); */
						
						
					
					});
					
