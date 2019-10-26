function getTrees() {
  const http = new XMLHttpRequest();

  http.open("GET", "/api/trees");
  http.send();

  http.onload = () => {
    $("#num").text(parseInt(http.responseText).toLocaleString());
    $("#diff").text((20000000-parseInt(http.responseText)).toLocaleString());
    return http.responseText;

  };
}
var start = getTrees();
console.log(start);

setInterval(function() {
    getTrees();

}, 2000);
