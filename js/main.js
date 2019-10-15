$( document ).ready(function() {
    $('.slider').slick({
    
  // normal options...
  infinite: true,
  autoplay:true,
  dots:true,
arrows:true,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
      });
          
});



// ==================================
$('.show-case').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,


  // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: {
        slidesToShow:2,
    } // destroys slick

  }]
    
  });