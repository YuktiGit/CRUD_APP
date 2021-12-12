function searchWeather() {
  var inputbox = document.querySelector("#keyword");
  var keyword = inputbox.value;
  //console.log(keyword);
  //var url = `cityname = $keyword`
  var promise = fetch(url);
  promise.then();
}
