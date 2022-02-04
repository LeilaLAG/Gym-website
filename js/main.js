 // Initialize and add the map
function initMap() {
  // The location of Uluru
  const Marrakesh
  = { lat:31.718790 , lng:-8.096950 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Marrakesh,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Marrakesh,
    map: map,
});
}
// Smooth scrolling
$("#navbar a, .btn").on("click", function(event) {

    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  // navbar Opacity

  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });
  
   