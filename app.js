window.addEventListener("load", function() {
  navigator.geolocation.getCurrentPosition(success, error);
});

function success(position) {
      alert(position.coords.longitude);
}

function error(){
  alert("someting doesnt work");
}
