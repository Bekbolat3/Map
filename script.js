const countries = ["China", "India", "Japan"];
let currentCountryIndex = 0;

function highlightNextCountry() {
  countries.forEach(country => {
    document.getElementById("list-" + country).classList.remove("selected");
  });
  if (currentCountryIndex < countries.length) {
    const targetCountry = countries[currentCountryIndex];
    document.getElementById("list-" + targetCountry).classList.add("selected");
  }
}

highlightNextCountry();

document.querySelectorAll('.country').forEach(elem => {
  elem.addEventListener('click', function() {
    if (currentCountryIndex >= countries.length) return;
    const clickedCountry = this.id;
    const targetCountry = countries[currentCountryIndex];
    if (clickedCountry === targetCountry) {
      this.setAttribute('fill', 'green');
    } else {
      this.setAttribute('fill', 'red');
    }
    currentCountryIndex++;
    highlightNextCountry();
  });
});
