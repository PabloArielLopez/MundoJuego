var globalZoom=500;

function zoomUp(){
  var Upzoom = document.getElementById('game');
  if (globalZoom<800) {
    globalZoom=globalZoom+50;
  Upzoom.style.height = globalZoom+"px";
  }

}

function zoomDown(){
  var Downzoom = document.getElementById('game');
  if (globalZoom>200) {
    globalZoom=globalZoom-50;
    Downzoom.style.height = globalZoom+"px";
  }
}
