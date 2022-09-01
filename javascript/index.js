const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  $.ajax({
    url: "https://api.apispreadsheets.com/data/SBz4WYKUyzMo5P6J/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Data registrert og lagret");
      document.getElementById("myForm").reset();
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("OBS! ingen registrering. Forsøk igjen...");
      document.getElementById("myForm").reset();
    },
  });
});
