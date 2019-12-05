let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
let aDuration = 4000;
let refreshDuration = 8000;
let acc = document.getElementsByClassName("accordion");
let i;
/*
function Ping() {
  console.log("getting ping");

$.get("./api/ping", function(
  data
) {
  if(data == "HTTP Error 502: Bad Gateway" || data == "HTTP Error 503: Service Not Available") {
    location.href="down.html";

  }
  console.log(data);
});
}
*/
function getTrees() {

  const http = new XMLHttpRequest();

  http.open("GET", "./api/");
  http.send();

  http.onload = () => {
    let diff = 20000000 - parseInt(http.responseText);
    $("#num").animateNumber({
      number: http.responseText,
      numberStep: comma_separator_number_step
    }, {
      duration: aDuration
    });
    $("#diff").animateNumber({
      number: diff,
      numberStep: comma_separator_number_step
    }, {
      duration: aDuration
    });
    return http.responseText;
  };

}

getTrees();
//Ping();
setInterval(function() {
  getTrees();
}, refreshDuration);


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";

    }
  });
}