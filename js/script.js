let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
let aDuration = 4000;
let refreshDuration = 4000;
let acc = document.getElementsByClassName("accordion");
let i;


function getTrees() {

  const http = new XMLHttpRequest();

  http.open("GET", "./api/");
  http.send();

  http.onload = () => {
    let diff = 20000000 - parseInt(http.responseText);

    if(parseInt(http.responseText) >= 20000000) {
        $("#num").text(`🎉${http.responseText}🎉`);
        $("#toBeRemovedInCompletion").hide();
        $(".toBeShown").show();
    } else {
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
    }

    return http.responseText;
  };

}

getTrees();
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