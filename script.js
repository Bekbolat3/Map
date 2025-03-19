var map = L.map('map').setView([34, 100], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
var targetCountries = ["China", "India", "Japan"];
var currentCountryIndex = 0;
var asiaGeojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "China"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[73,18],[135,18],[135,53],[73,53],[73,18]]]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "India"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[68,6],[97,6],[97,36],[68,36],[68,6]]]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "Japan"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[129,31],[146,31],[146,46],[129,46],[129,31]]]
      }
    }
  ]
};
function style(feature) {
  return {
    fillColor: '#ddd',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}
function onEachFeature(feature, layer) {
  layer.on('click', function() {
    if (currentCountryIndex >= targetCountries.length) return;
    var clickedCountry = feature.properties.name;
    var targetCountry = targetCountries[currentCountryIndex];
    if (clickedCountry === targetCountry) {
      layer.setStyle({fillColor: 'green'});
    } else {
      layer.setStyle({fillColor: 'red'});
    }
    currentCountryIndex++;
    updateCountryList();
  });
  layer.bindPopup(feature.properties.name);
}
function updateCountryList() {
  var html = "";
  for (var i = 0; i < targetCountries.length; i++) {
    if (i === currentCountryIndex) {
      html += '<span class="selected">' + targetCountries[i] + '</span>';
    } else {
      html += '<span>' + targetCountries[i] + '</span>';
    }
  }
  document.getElementById('country-list').innerHTML = html;
}
updateCountryList();
L.geoJSON(asiaGeojson, {style: style, onEachFeature: onEachFeature}).addTo(map);
