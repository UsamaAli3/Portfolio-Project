$(document).ready(function () {
  $("#magic").click(function () {
    $("#inmagic").slideToggle("fast");

    $("#inmagic1").slideUp("fast");
    $("#inmagic2").slideUp("fast");
    $("#inmagic3").slideUp("fast");
    $("#inmagic4").slideUp("fast");
  });

  $("#inmagic").hide();
  1;
  $("#magic1").click(function () {
    $("#inmagic1").slideToggle("fast");
    $("#inmagic").slideUp("fast");
    $("#inmagic").slideUp("fast");
    $("#inmagic2").slideUp("fast");
    $("#inmagic3").slideUp("fast");
    $("#inmagic4").slideUp("fast");
  });
  $("#inmagic1").hide();

  $("#magic2").click(function () {
    $("#inmagic2").slideToggle("fast");
    $("#inmagic1").slideUp("fast");
    $("#inmagic").slideUp("fast");
    $("#inmagic3").slideUp("fast");
    $("#inmagic4").slideUp("fast");
  });
  $("#inmagic2").hide();

  $("#magic3").click(function () {
    $("#inmagic3").slideToggle("fast");
    $("#inmagic1").slideUp("fast");
    $("#inmagic2").slideUp("fast");
    $("#inmagic").slideUp("fast");
    $("#inmagic4").slideUp("fast");
  });
  $("#inmagic3").hide();

  $("#magic4").click(function () {
    $("#inmagic4").slideToggle("fast");
    $("#inmagic1").slideUp("fast");
    $("#inmagic2").slideUp("fast");
    $("#inmagic3").slideUp("fast");
    $("#inmagic").slideUp("fast");
  });
  $("#inmagic4").hide();
});

$(document).ready(function () {
  $(".but-first").click(function () {
    $("this").html("a ");
  });
});

function handlerManu() {
  const manuTwo = document.querySelector(".navbar-two");
  if (manuTwo.style.display === "block") {
    manuTwo.style.display = "none";
  } else {
    manuTwo.style.display = "block";
  }
  return;
}
