let navbar = document.querySelector("#my_navbar");

window.addEventListener("scroll", function () {
  let scroll_vlaue = window.scrollY;
  if (scroll_vlaue > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// counter up plugin
$(function () {
  "use strict";

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //masonary filter gallery plugin start
  $(".portfolio_gallery").mixItUp({
    selectors: {
      target: ".tile",
      filter: ".filter",
      sort: ".sort-btn",
    },

    animation: {
      animateResizeContainer: false,
      effects: "fade scale",
    },
  });
  //masonary filter gallery plugin end

  // VenoBox start
  new VenoBox({
    selector: ".my-image-links",
    numeration: true,
    infinigall: true,
    share: true,
    spinner: "rotating-plane",
  });

  new VenoBox({
    selector: ".youtube_play",
  });

  new VenoBox({
    selector: ".vimeo_play",
  });

  new VenoBox({
    selector: ".cloud_play",
  });
  // VenoBox end

  // tilt start
  $(".service_item").tilt({
    maxTilt: 5,
  });
  // tilt end

  // slick slider start
  $(".testimonial_item").slick({
    arrows: false,
    dots: true,
  });
  // slick slider end

  //mouse start
  let custom_mouse = document.querySelector(".custom_mouse");
  let point = document.querySelector(".point");
  let service_item = document.querySelectorAll(".service_item");
  let service_itemArr = Array.from(service_item);

  window.addEventListener("mousemove", function (e) {
    custom_mouse.setAttribute("style", `left:${e.pageX}px; top:${e.pageY}px;`);
    point.setAttribute("style", `left:${e.pageX}px; top:${e.pageY}px;`);
  });

  service_itemArr.map((item) => {
    item.addEventListener("mouseenter", () => {
      custom_mouse.classList.add("big_mouse");
      console.log(custom_mouse);
    });
  });

  service_itemArr.map((item) => {
    item.addEventListener("mouseleave", () => {
      custom_mouse.classList.remove("big_mouse");
      console.log(custom_mouse);
    });
  });

  // for(var i=0;i<service_itemArr.length;i++){
  //   console.log(service_itemArr[0]);
  // }

  // service_itemArr.map((item) => {
  //   item.addEventListener("mouseenter", () => {
  //     point.setAttribute("style", `display:none;`);
  //     custom_mouse.setAttribute(
  //       "style",
  //       `
  //       left:${e.pageX}px;
  //       top:${e.pageY}px;
  //       width:60px;
  //       height:60px;
  //       border:none;
  //       `
  //     );
  //   });
  // });

  //mouse end
});

// progress bar Plugin
$(document).ready(function () {
  $("#bar1").barfiller({
    barColor: "#f75023",
  });
  $("#bar2").barfiller({
    barColor: "#1cbe59",
  });
  $("#bar3").barfiller({
    barColor: "#8067ed",
  });
});

//aos plugin
AOS.init();


