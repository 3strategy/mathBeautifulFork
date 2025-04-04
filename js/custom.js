// JavaScript Document
<!--------clickBtn sidebar- and toggle--------->
$(document).ready(function() {
		$(".navbarToggle").click(function() {
			$(".navbarCollapse").animate({width:'toggle'},350); 			
        });			
	});
	$(document).ready(function() {
		$(".crossClose").click(function() {
			$(".navbarCollapse").hide('300');   
			
        });			
	});
	$(document).ready(function() {
		$(".subBtn").click(function() {
			$(".subUl").toggle();
			$(".subBtn").toggleClass('changImg');	         
			   
        });			
	});
	$(document).ready(function() {
	 $(".clickSidebtn").click(function(){
		 $(".contactSidebar").slideDown(400); 
	 });
	
	});
	$(document).ready(function(){
		$('.close01').click(function(){
			$('.contactSidebar').hide();
		});
	});

<!--------slideDown- and toggle--------->
	$(document).ready(function() {
		$("#click01").click(function() {
			$("#list01").slideDown(200);
			$("#list02").slideUp(200);	 
			$(this).addClass('active');    
			$("#click02").removeClass('active');       
        });		
		$("#click02").click(function() {
			$("#list02").slideDown(200);
			$("#list01").slideUp(200);	 
			$(this).addClass('active');    
			$("#click01").removeClass('active');       
        });		
	});

<!--------imghide- Click-------->
	$(document).ready(function() {
		$("#clikImg01").click(function() {
			$("#secImg01").show();
			$("#secImg02").hide();	
			$("#secImg03").hide();	
			$("#secImg04").hide();	
			$(this).addClass('active');    
			$("#clikImg02").removeClass('active');
			$("#clikImg03").removeClass('active');
			$("#clikImg04").removeClass('active'); 				   
        });	
		$("#clikImg02").click(function() {
			$("#secImg01").hide();
			$("#secImg02").show();	
			$("#secImg03").hide();	
			$("#secImg04").hide();
			$(this).addClass('active');    
			$("#click01").removeClass('active');
			$("#clikImg03").removeClass('active');
			$("#clikImg04").removeClass('active'); 	 	   
        });	
		$("#clikImg03").click(function() {
			$("#secImg01").hide();
			$("#secImg02").hide();	
			$("#secImg03").show();	
			$("#secImg04").hide();
			$(this).addClass('active');    
			$("#click01").removeClass('active');
			$("#clikImg02").removeClass('active');
			$("#clikImg04").removeClass('active'); 		   
        });	
		$("#clikImg04").click(function() {
			$("#secImg01").hide();
			$("#secImg02").hide();	
			$("#secImg03").hide();	
			$("#secImg04").show();	
			$(this).addClass('active');    
			$("#click01").removeClass('active');
			$("#clikImg02").removeClass('active');
			$("#clikImg03").removeClass('active'); 		   
        });	
		
		
		
		
		jQuery('.officerdiv').each(function(){
var ourofficerImgheight = jQuery(this).find('.ourofficerImg').height();
var rightsectionheight = jQuery(this).find('.officersection').height();
var margintop = (ourofficerImgheight-rightsectionheight)/2;
jQuery(this).find('.officersection').css('top',margintop);
});
			
	});
	
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header").removeClass("active");
    }
});


// slider bx-slier start---	
	
	
	
			// slider bx-slier start---
	$(function(){
		$('.slideTop01 .bxslider').bxSlider({  
			auto:true,   //mode: 'vertical',  auto:true speed: 500, slideMargin:0, infiniteLoop: true, pager: false, controls: true, slideWidth: 276, minSlides: 3, maxSlides: 3, moveSlides: 1, adaptiveHeight: false
			autoControls: false,// arow lena to true nhi to false kar dege
			pager:false,
			stopAutoOnClick: true,
			
		});
	});	
		$(function(){
		$('.slideTop02 .bxslider').bxSlider({  
			mode:'horizontal',   //mode: 'horizontal','vertical',  auto:true speed: 500, slideMargin:0, infiniteLoop: true, pager: false, controls: true, slideWidth: 276, minSlides: 3, maxSlides: 3, moveSlides: 1, adaptiveHeight: false
			autoControls: true,// arow lena to true nhi to false kar dege
			pager:true,
			stopAutoOnClick: false,
			speed:500,
			slideMargin:10,
			controls: true,
			slideWidth:1000,
			minSlides: 1,
			 maxSlides: 1,
			 moveSlides: 1,
			 infiniteLoop: true,
			 startSlide:0,
			 responsive:true,
			 oneToOneTouch:true,
		});
	})
			$(function(){
            var width = $(window).width();
		$('.slideTop03 .bxslider').bxSlider({  
			autoControls: true,// arow lena to true nhi to false kar dege
			pager:false,
			auto:true,
            useCSS: true,
            autostart:true,
			stopAutoOnClick: false,
			speed:500,
			slideMargin:10,
			controls: true,
			slideWidth:286,
			minSlides: (width < 700) ? 4 : 6,
			 maxSlides: (width < 700) ? 4 : 6,
			 moveSlides: 1,
			 infiniteLoop: true,
			 startSlide:0,
			 responsive:true,
			 oneToOneTouch:false,
		});
	})
	
			// scrolltop set up and use js background color change 
	$(window).on("scroll", function() {
    if($(window).scrollTop() >50) {
        $("#header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header").removeClass("active");
    }
});
	 // scrolltop set up and use js background menu-color change 
	$(window).on("scroll", function() {
    if($(window).scrollTop() >50) {
        $("#gNavi li a").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#gNavi li a").removeClass("active");
    }
});
	    // boxin read more height equal set karta hai  .......
$(document).ready(function() {
$(".boxIn").matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});
//   $(".boxIn").matchHeight(); ye use kar skate hai jarurat ho to 
//
   });
   
   
    $(document).ready(function() {
      $('#table').basictable();

      $('#table-breakpoint').basictable({
        breakpoint: 768
      });

      $('#table-container-breakpoint').basictable({
        containerBreakpoint: 485
      });

      $('#table-swap-axis').basictable({
        swapAxis: true
      });

      $('#table-force-off').basictable({
        forceResponsive: false
      });

      $('#table-no-resize').basictable({
        noResize: true
      });

      $('#table-two-axis').basictable();

      $('#table-max-height').basictable({
        tableWrapper: true
      });
    });