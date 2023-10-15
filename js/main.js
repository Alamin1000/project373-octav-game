const urlParams = new URLSearchParams(window.location.search);
const serviceTabIndex = urlParams.get("tab");
if (serviceTabIndex) {
  if (document.querySelector(".service-section")) {
    let serviceNav = document.querySelectorAll(".service-nav .nav li a");
    let servicePanal = document.querySelectorAll(".service-tab-pane");
    serviceNav[0].classList.remove("active");
    servicePanal[0].classList.remove("show", "active");
    servicePanal[serviceTabIndex - 1].classList.add("show", "active");
    serviceNav[serviceTabIndex - 1].classList.add("active");
  }
  if (document.querySelector(".tb-top-nav_slider")) {
    let industriesNav = document.querySelectorAll(".tb-top-nav-item");
    let industriesTab = document.querySelectorAll(".industries-tab-pane");
    industriesNav[0].classList.remove("active");
    industriesTab[0].classList.remove("show", "active");
    industriesTab[serviceTabIndex - 1].classList.add("show", "active");
    industriesNav[serviceTabIndex - 1].classList.add("active");
  }
}

(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  //sticky2
  var wind = $(window);
  var sticky = $(".header-section");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });

  // owl-carousel
  $(".tools-list-slider-active").owlCarousel({
    loop: true,
    margin: 48,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: false,
    dots: false,
    dotsEach: 5,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2300,
    autoplaySpeed: 2300,
    autoplayHoverPause: false,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        margin: 20,
      },
      600: {
        margin: 32,
      },
      1000: {
        margin: 48,
      },
    },
  });

  var $realSlider = $(".real-slider-active");
  $realSlider.children().each(function (index) {
    $(this).attr("data-position", index);
  });

  $realSlider.owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoWidth: false,
    items: 2,
    dotsEach: 1,
    // autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    // items: 3,
    // dotsEach: 5,
    // autoplay: true,
    // slideTransition: "linear",
    // autoplayTimeout: 2300,
    // autoplaySpeed: 2300,
    // autoplayHoverPause: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {},
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(document).on("click", ".real-slider-active .owl-item>*", function () {
    var $speed = 800;
    $realSlider.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });

  // NS SLIDER
  var $nsSlider = $(".ns-slider-active");
  $nsSlider.children().each(function (index) {
    $(this).attr("data-position", index);
  });

  $nsSlider.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: false,

    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(document).on("click", ".ns-slider-active .owl-item>*", function () {
    var $speed = 300;
    $nsSlider.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });

  // tb_tp_nav_slider
  let tb_tp_nav_slider = $(".tb-top-nav_slider-active");

  tb_tp_nav_slider.children().each(function (index) {
    $(this).attr("data-position", index);
  });

  $(document).on("click", ".tb-top-nav_slider-active .owl-item>*", function () {
    var $speed = 300;
    tb_tp_nav_slider.trigger("to.owl.carousel", [
      $(this).data("position"),
      $speed,
    ]);
  });

  // console.log(tb_tp_nav_slider);
  tb_tp_nav_slider.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: true,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  if (serviceTabIndex && tb_tp_nav_slider) {
    tb_tp_nav_slider.trigger("to.owl.carousel", serviceTabIndex - 1);
  }

  tb_tp_nav_slider.on("changed.owl.carousel", function (e) {
    setTimeout(function () {
      let all = tb_tp_nav_slider.find(".owl-item.center .tb-top-nav-item");
      all.removeClass("active");
      let center = tb_tp_nav_slider.find(".owl-item.center .tb-top-nav-item");
      center.tab("show");
    }, 1);
  });
  // let yu = $("#sdfs");
  // console.log(yu);
  // setTimeout(function () {
  //   yu.tab("show");
  // }, 1);

  // $(".pro-slider-active").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   responsiveClass: true,
  //   center: true,
  //   nav: true,
  //   items: 1,
  //   animateIn: "fadeIn",
  //   // animateOut: "fadeOut",
  //   touchDrag: false,
  //   mouseDrag: false,
  //   navText: [
  //     '<i class="far fa-chevron-left"></i>',
  //     '<i class="far fa-chevron-right"></i>',
  //   ],
  // });

  // accordion-switching after-5000
  const joinSection = document.querySelectorAll(".join-section");
  joinSection.forEach((wrap) => {
    let indicator = true;
    let accordionButtons = wrap.querySelectorAll(".accordion-button");
    let currentIndex = 0;
    let swithInterval;

    window.addEventListener("scroll", () => {
      let t = wrap.getBoundingClientRect().top - window.innerHeight / 2;
      let h = wrap.clientHeight;

      if (t <= 0 && Math.abs(t) <= h) {
        if (indicator) {
          activeSwitchAccordion();
        }
        indicator = false;
      } else {
        indicator = true;
        clearInterval(swithInterval);
      }
    });

    function switchAccordionSection() {
      // Close the current section
      accordionButtons[currentIndex].click();
      // Calculate the index of the next section to open
      currentIndex = (currentIndex + 1) % accordionButtons.length;
      // Open the next section
      accordionButtons[currentIndex].click();
    }

    function activeSwitchAccordion() {
      if (accordionButtons[0].classList.contains("collapsed")) {
        currentIndex = 0;
        switchAccordionSection();
      }
      // Start auto-switching after the page loads
      swithInterval = setInterval(switchAccordionSection, 5000);
    }
  });

  var swiper = new Swiper(".pro-slider-active", {
    effect: "cards",
    grabCursor: true,

    cardsEffect: {
      perSlideOffset: 10,
      perSlideRotate: 0,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        $(".service-uses-all-active").owlCarousel({
          loop: true,
          margin: 10,
          responsiveClass: true,
          center: true,
          nav: true,
          items: 1,
          // autoHeight: true,
          navText: [
            '<i class="far fa-chevron-left"></i>',
            '<i class="far fa-chevron-right"></i>',
          ],
        });
      } else {
        //
      }
    }
    var x = window.matchMedia("(max-width: 767px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  }

  $(".nice-select").niceSelect();

  // fullPage
  $("[data-aos]").each(function () {
    $(this).addClass("aos-init");
  });
  new fullpage("#fullpage", {
    // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
    anchors: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
    ],
    // navigationTooltips: ["fullPage", "Open", "Easy", "Touch"],
    css3: true,
    scrollingSpeed: 1000,
    navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    responsiveWidth: 992,
    dragAndMove: true,
    dragAndMoveKey:
      "YkdZV3gyWVhKdmRISnBaMjh1WTI5dEE3X09keFpISmhaMEZ1WkUxdmRtVT0xbmw=",
    controlArrows: false,
    // Get your license at https://alvarotrigo.com/fullPage/pricing/
    // licenseKey: "YOUR LICENSE KEY HERE ",
    onLeave: function () {
      $(".section [data-aos]").each(function () {
        $(this).removeClass("aos-animate");
      });
    },
    onSlideLeave: function () {
      $(".slide [data-aos]").each(function () {
        $(this).removeClass("aos-animate");
      });
    },
    afterSlideLoad: function () {
      $(".slide.active [data-aos]").each(function () {
        $(this).addClass("aos-animate");
      });
    },
    afterLoad: function () {
      $(".section.active [data-aos]").each(function () {
        $(this).addClass("aos-animate");
      });
    },
  });
  fullpage_api.destroy("all");

  // tbr_nav_ul
  {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
      } else {
        let allNav = document.querySelectorAll(".tbr_nav .nav");
        allNav.forEach((tbr_nav_ul) => {
          // let tbr_nav_ul = document.getElementById("tbr_nav_ul");
          let nav_options = tbr_nav_ul.querySelectorAll("li a");
          let nav_options_count = nav_options.length;
          let i = 1;
          setInterval(function () {
            // nav_options[i].click();
            if (i + 1 == nav_options_count) {
              i = 0;
            } else {
              i++;
            }
          }, 5000);
        });
      }
    }
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  }
  // tbr_nav_ul_mobile
  {
    let all_select = document.querySelectorAll(".tbr_nav-select");
    all_select.forEach((select) => {
      $(document).on("change", select, function () {
        let a = $('[data-bs-target="' + select.value + '"]');
        a.tab("show");
      });
    });
  }
})(jQuery);

$(document).ready(function () {
  {
    // let nav_item = document.querySelectorAll(".tb-top-nav-item");
    // nav_item.forEach((i) => {
    //   let x = i;
    //   x.addEventListener("click", function (event) {
    //     let p = event.target;
    //     setTimeout(function () {
    //       console.log(p);
    //       p.tab("show");
    //     }, 1);
    //   });
    // });
  }
});
