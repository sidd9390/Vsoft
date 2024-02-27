function handleButtonClick(){
    document.getElementById("button1").click();
}
function handleButtonClick1(){
    document.getElementById("button2").click();
}
function handleButtonClick2(){
    document.getElementById("button3").click();
}
function handleButtonClick3(){
    document.getElementById("button4").click();
}
function handleButtonClick4(){
    document.getElementById("button5").click();
}
function handleButtonClick5(){
    document.getElementById("button6").click();
}
function handleButtonClick6(){
    document.getElementById("button7").click();
}
function handleButtonClick7(){
    document.getElementById("button8").click();
}
function handleButtonClick8(){
    document.getElementById("button9").click();
}
function handleButtonClick9(){
    document.getElementById("button10").click();
}

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
        interval: false // Set interval to false to prevent auto-sliding
    });
});



const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


document.getElementById("scrollSection").addEventListener(
  "touchmove",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);



  