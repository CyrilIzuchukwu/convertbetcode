;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
if ($("#header").length > 0) {
$(window).on("scroll", function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 1) {
  $(".header-area").removeClass("sticky");
  } else {
  $(".header-area").addClass("sticky");
  }
  });
}
//========== HEADER ACTIVE ENDS ============= //

//========== PROGRESS ACTIVE ENDS ============= //
progress_bar();
function progress_bar() {
	var speed = 30;
	var items = $('.progress_bar').find('.progress_bar_item');
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
  }
  

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

});


$('.foter-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay:true,
  nav:true,
  prevArrow: $('.testimonial-next-arrow'),
  nextArrow: $('.testimonial-prev-arrow'),
  fade: true,
  loop:true,
  asNavFor: '.slider-nav1',
});


//========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $(".preloader").fadeToggle();
  }, 400);
});
//========== PRELOADER AREA ============= //


gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
function pbmit_title_animation() {
  ScrollTrigger.matchMedia({
      "(max-width: 375px)": function() {
          var pbmit_var = $('.pbmit-heading, .pbmit-heading-subheading');
          if (!pbmit_var.length) {
              return;
          }
          const quotes = document.querySelectorAll(".pbmit-heading .pbmit-title , .pbmit-heading-subheading .pbmit-title");
          quotes.forEach(quote => {
              var getclass = quote.closest('.pbmit-heading ,.pbmit-heading-subheading').className;
              var animation = getclass.split('animation-');
              if (animation[1] == "style4") return

              quote.split = new SplitText(quote, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });
              gsap.set(quote, { perspective: 400 });
              if (animation[1] == "style1") {
                  gsap.set(quote.split.chars, {
                      opacity: 0,
                      y: "90%",
                      rotateX: "-40deg"
                  });
              }
              if (animation[1] == "style2") {
                  gsap.set(quote.split.chars, {
                      opacity: 0,
                      x: "50"
                  });
              }
              if (animation[1] == "style3") {
                  gsap.set(quote.split.chars, {
                      opacity: 0,
                  });
              }
              gsap.to(quote.split.chars, {
                  scrollTrigger: {
                      trigger: quote,
                      start: "top 90%",
                  },
                  x: "0",
                  y: "0",
                  rotateX: "0",
                  opacity: 1,
                  duration: 1,
                  ease: Back.easeOut,
                  stagger: .02
              });
          });
      },
  });
}

if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}

})(jQuery);


