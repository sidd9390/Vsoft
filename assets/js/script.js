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

let scrollContainer = document.querySelector(".img-indi");
let btnLeft = document.getElementById("btnleft");
let btnRight = document.getElementById("btnright");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})
btnRight.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 280
})
btnLeft.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 280
})




$(document).ready(function () {
  // Function to update the number of cards based on the window width
  function updateCardsPerSlide() {
    return $(window).width() < 769 ? 1 : 3;
  }

  // Handle window resize event
  $(window).resize(function () {
    var cardsPerSlide = updateCardsPerSlide();
    // Destroy the current carousel and re-initialize it with updated settings
    $("#carouselExampleIndicators2").carousel("dispose");
    $("#carouselExampleIndicators2").carousel({
      interval: false, // Disable automatic sliding
    });
    // Adjust the number of cards per slide on window resize
    $("#carouselExampleIndicators2").carousel("prev"); // Trigger slide event to update the layout
  });

  // Handle navigation button click
  $('[data-slide="prev"]').click(function (e) {
    e.preventDefault();
    $("#carouselExampleIndicators2").carousel("prev");
  });

  $('[data-slide="next"]').click(function (e) {
    e.preventDefault();
    $("#carouselExampleIndicators2").carousel("next");
  });

  // Initialize the carousel
  $("#carouselExampleIndicators2").carousel({
    interval: false, // Disable automatic sliding
  });
});

