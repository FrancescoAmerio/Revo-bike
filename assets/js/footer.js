
// Inizializza la mappa centrata sull’Italia
var map = L.map('map').setView([43.5, 11.5], 4.5); // Centro Italia, zoom adatto

// Aggiunge le tile di OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Torino - Sede 1
L.marker([45.0703, 7.6869]).addTo(map)
  .bindPopup('Revo-bike Torino Centro');

// Torino - Sede 2
L.marker([45.0792, 7.6680]).addTo(map)
  .bindPopup('Revo-bike Torino Nord');

// Milano
L.marker([45.4642, 9.1900]).addTo(map)
  .bindPopup('Revo-bike Milano');

// Roma
L.marker([41.9028, 12.4964]).addTo(map)
  .bindPopup('Revo-bike Roma');

// Cagliari
L.marker([39.2238, 9.1217]).addTo(map)
  .bindPopup('Revo-bike Cagliari');

// Firenze
L.marker([43.7696, 11.2558]).addTo(map)
  .bindPopup('Revo-bike Firenze');

// Perugia
L.marker([43.1107, 12.3908]).addTo(map)
  .bindPopup('Revo-bike Perugia');