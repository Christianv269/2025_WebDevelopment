function get(id){
  return document.getElementById(id);
}


function showMap(lat, lon){

  let location = [lat, lon];

  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}


function card( info ){ 

  let location = [info.latitude || 0, info.longitude || 0];
  let build = `<div class="card fitted">
              <h3>${info.created_date}</h3>
              <h5>${info.borough}</h5>
              <p>${info.descriptor}</p>
              <p>${info.incident_address}</p><hr>
              <p>${info.agency_name}</p>
              <input type="button" onclick="showMap( ${location} )" value="Map">
        </div>`;
  return build;
}