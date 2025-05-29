document.addEventListener('DOMContentLoaded', () => {

  let elements = document.querySelectorAll(".nav");

  const step1 = document.getElementById("step-1")
  const step2 = document.getElementById("step-2")
  const step3 = document.getElementById("step-3")
  const step4 = document.getElementById("step-4")
  const step5 = document.getElementById("step-5")

  elements.forEach(element => {
    element.onmouseover = function () {
      this.style.color = "red";
    };
    element.onmouseout = function () {
      this.style.color = "aliceblue";
    };
  });

  function changeVisibility(hide, show) {
    hide.style.display = 'none'
    show.style.display = 'flex'
  }

  document.getElementById('btn-start').addEventListener('click', function () {
    changeVisibility(step1, step2)
  });

  document.getElementById('btn-offroad').addEventListener('click', function () {
    changeVisibility(step2, step3)
  });

  document.getElementById('btn-muscolare').addEventListener('click', function () {
    changeVisibility(step3, step4)
  });

  document.getElementById('btn-strada').addEventListener('click', function () {
    changeVisibility(step2, step5)
  });

  document.getElementById('btn-citta').addEventListener('click', function () {
    window.location.href = 'city.html';
  });

  document.getElementById('btn-viaggio').addEventListener('click', function () {
    window.location.href = 'city.html#trekking';
  });

  document.getElementById('btn-elettrica').addEventListener('click', function () {
    window.location.href = 'ebikes.html';
  });

  document.getElementById('btn-discesa').addEventListener('click', function () {
    window.location.href = 'mountain.html';
  });

  document.getElementById('btn-pedalare').addEventListener('click', function () {
    window.location.href = 'mountain.html#trail';
  });


});
