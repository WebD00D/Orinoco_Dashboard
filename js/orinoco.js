(function($){
  $(function(){
    $('.button-collapse').sideNav({
      menuWidth: 300
    });
    $('.parallax').parallax();
    $('select').material_select();

  $('.OrinocoSlider').slick({
     autoplay:true,
     autoplaySpeed:3000,
     arrows:false,
     infinite: true,
     mobileFirst:true,
   });

   $("#inquiryForm").hide();
   $("#shopDetailsForm").hide();


    $('#allCigarSlider').slick({
  dots: false,
  infinite: true,
  arrows:false,



  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  }); // end of document ready
})(jQuery); // end of jQuery name space




$("#previousSlide").click(function(e){
  e.preventDefault();
  $("#allCigarSlider").slick('slickPrev');
})
$("#nextSlide").click(function(e){
  e.preventDefault();
  $("#allCigarSlider").slick('slickNext');
})
$("#previousSlideHome").click(function(e){
  e.preventDefault();
  $(".OrinocoSlider").slick('slickPrev');
})
$("#nextSlideHome").click(function(e){
  e.preventDefault();
  $(".OrinocoSlider").slick('slickNext');
})

$(".anOrinocoCigar").mouseover(function(){
  $(this).css("cursor","pointer");
  $(this).css("background-color","rgba(255,255,255,0.3)");
})
$(".anOrinocoCigar").mouseout(function(){
  $(this).css("cursor","pointer");
  $(this).css("background-color","rgba(255,255,255,0.0)");
})
$(".anOrinocoCigar").click(function(e){
  e.preventDefault();
  var goTo = $(this).attr('data-page');
  window.location.href = goTo;

})

$(".stateImg").mouseover(function(){
  $(this).css("cursor","pointer");
})
$(".stateImg").click(function(){
  var theState = $(this).attr('data-state');
  var hasShop = $(this).attr('data-hasShop');

  if ( hasShop === 'No'){
    $("#inquiryForm").show();
    $("#shopDetailsForm").hide();
    $(".basicPageContent2").hide();
    $("#familyText").text(theState);
    $("#familySubText").text("Live in " + theState + " and own a cigar shop? Apply to partner with us!");
  }




})


function animate() {
      $('.mainicon').animate({marginTop:'25px'}, 500, function(){
          $('.mainicon').animate({marginTop:'35px'}, 700, function(){
            animate();
          });
      });
  }
 animate();

  $("#scrollDownIcon").click(function(){
    $('html, body').animate({
        scrollTop: $("#allTheContent").offset().top
    }, 700);
  })

  $(".tiles").mouseover(function(){
    $(".tiles").css({"cursor":"pointer"});
  })

  $(".tiles").click(function(){
    window.location.href = $(this).attr('data-page');
  })

  $('#menupoper').on('click', function(e) {

    e.preventDefault();
    var isShowing = $(this).attr('data-showingmain');
    if ( isShowing === 'true'){
        $(this).attr('data-showingmain','false');
        $("#maincontent").hide();
        $("#contentcolumn").css("background-color","black");
        $("#menuitem").removeClass("fa fa-bars");
        $("#menuitem").addClass("fa fa-times");
        $("#menucontent").show();
    } else {
        $(this).attr('data-showingmain','true');
        $("#maincontent").show();
        $("#contentcolumn").css("background-color","white");
        $("#menuitem").removeClass("fa fa-times");
        $("#menuitem").addClass("fa fa-bars");
        $("#menucontent").hide();
    }



});
