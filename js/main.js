// jQuery(document).ready(function(){
//     jQuery(window).load(function(){  //load函数
//         jQuery("#loading").hide();
//     });
// });

$(document).ready(function(){

	console.log($('.navlist li'));

/************************ to highlight on which section you are ****************/

	$(".navlist li").click(function(){
		$(this).addClass("iamselected");
		$(".navlist li").not(this).removeClass("iamselected");  
	});

/********************* highlight active link when scrolled **************************/

	// $(window).scroll(function(){
	// 	console.log( $(this).scrollTop());
	// 	$('.page').each(function(){
	// 		var sectionoffset = $(this.hash).offset().top;   // saves dist of that hash trom top
	// 		if(sectionoffset <= $(this).scrollTop()){
	// 			$(this).addClass('iamselected');
	// 		}			

	// 	});
	// });


/**************** to change from trans to black when scrolled *************/

	console.log( $(document).scrollTop() );

	$(document).scroll(function(){
		if( $(document).scrollTop() > 95 )
		{
			$('.navwrapper').addClass("notonhomepage");
			$('.logo').addClass("hideme");
			
		}
		else{
			$('.navwrapper').removeClass("notonhomepage");
			$('.logo').removeClass("hideme");
		}

	});
/******************** hide n show nav *************************/

	$('.toggleMenu').click(function(){
		$('.sidemenu').addClass("showmenu");
		$('.toggleMenu').addClass("changeopacity");
	});

	$('.cross').click(function(){
		$('.sidemenu').removeClass("showmenu");
		$('.toggleMenu').removeClass("changeopacity");
	});

/************************* menu scales when scrolled ****************************/
	$(document).scroll(function(){
		if( $(document).scrollTop() > 250 )
		{
			$('.mobilelogo').addClass("hideme");
			$('.page1Text').addClass("hideText");
			$('.toggleMenu').css('padding','9px 12px 9px 9px');
		}
		else{
			$('.mobilelogo').removeClass("hideme");
			$('.page1Text').removeClass("hideText");
			$('.toggleMenu').css('padding','15px 20px 15px 15px');
		}

	});
});






// 了解更多
$(document).ready(function(){
	$('.see-more').click(function ( event ) {
		event.preventDefault();
		var element = document.getElementById('element');
		$('.wrapper').toggleClass('full-height');
		if (element.innerHTML === 'Read More...') element.innerHTML = 'Close';
		else {
			element.innerHTML = 'Read More...';
		}
	});
});






// 輪播
$('#blogCarousel').carousel({
	interval: 4000
});




// 音樂播放

var clicked = true;


$(document).ready(function(){
	$(".bar").addClass("noAnim");
$(".bar-c").click( function() {
  if (clicked) {
	$(".bar").removeClass("noAnim");
	$(".zd-music-btn").addClass("music-hidden");
	document.getElementById('audio').play();
    clicked = false;
  } else {
	$(".bar").addClass("noAnim");
	$(".zd-music-btn").removeClass("music-hidden");
	clicked = true;
	document.getElementById('audio').pause();
  }
});

});




// window.onload = function ShowToday() {

setTimeout(() => {
	// var video = document.getElementById('audio')
	var r=confirm("需要來點音樂嗎？或者點擊畫面右下角'♫'音符圖標做開關喔！");
	if (r==true){
		$(".bar").removeClass("noAnim");
		$(".zd-music-btn").addClass("music-hidden");
		document.getElementById('audio').play();
	}
	else{
		$(".bar").addClass("noAnim");
		$(".zd-music-btn").removeClass("music-hidden");
		document.getElementById('audio').pause();
	}

}, 15000);







$(".zd-footer").mouseover( function() {
	  $(".zd-gifman-basic").addClass("zd-gifman-hidden");
	  $(".zd-gifman-move").addClass("zd-gifman-block");

  });

  $(".zd-footer").mouseout( function() {
	$(".zd-gifman-basic").removeClass("zd-gifman-hidden");
	$(".zd-gifman-move").removeClass("zd-gifman-block");

});


