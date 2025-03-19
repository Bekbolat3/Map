var targetCountries = ["Russia", "China", "India", "Japan", "Kazakhstan"];

var currentIndex = 0;

function highlightNextCountry() {
  var container = document.getElementById("country-list");
  var html = "";
  for (var i = 0; i < targetCountries.length; i++) {
    if (i === currentIndex) {
      html += '<span class="selected">' + targetCountries[i] + '</span>';
    } else {
      html += '<span>' + targetCountries[i] + '</span>';
    }
  }
  container.innerHTML = html;
}

function handleCountryClick(e) {
  if (currentIndex >= targetCountries.length) return;
  var clickedId = e.target.id;
  var correctId = targetCountries[currentIndex];
  if (clickedId === correctId) {
    e.target.style.fill = "green";
  } else {
    e.target.style.fill = "red";
  }
  currentIndex++;
  highlightNextCountry();
}

function init() {
  highlightNextCountry();
  var countries = document.querySelectorAll(".country");
  countries.forEach(function(path) {
    path.addEventListener("click", handleCountryClick);
  });
}

document.addEventListener("DOMContentLoaded", init);
