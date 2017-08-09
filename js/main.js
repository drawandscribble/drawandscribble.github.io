function digitalClock(){
  var dt = new Date();
  var time = (dt.getHours() % 12 || 12) + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  $("body").find('#time').text(time);
}
setInterval(digitalClock, 1000);
function processGeolocationResult(position) {
      html5Lat = position.coords.latitude;
      html5Lon = position.coords.longitude;
      html5TimeStamp = position.timestamp;
      html5Accuracy = position.coords.accuracy;
      return (html5Lat).toFixed(8) + ", " + (html5Lon).toFixed(8);
}
