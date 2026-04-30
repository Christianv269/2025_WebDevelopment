async function init(){
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
 
 for(let i = 0; i < data.length; i += 1){
  let collision = data[i];
  build += `
              <div class = "fitted card">
              <h2>${collision.crash_date}</h2>
              <h2>${collision.crash_time}</h2>
              <h2>${collision.borough}</h2>
              <h2>${collision.zip_code}</h2>
              <h2>${collision.collision_id}</h2>
              <h2>${collision.cross_street_name}</h2>
              <h2>${collision.on_street_name}</h2>
              <h2>${collision.vehicle_type_code1}</h2>
              <h2>${collision.vehicle_type_code2}</h2>
              <h2>${collision.number_of_persons_killed}</h2>
              </div>
            
              `
 }


  output.innerHTML = build;

}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.crash_date}</p>
                  <p>${complaint.crash_time}</p>
                  <p>${complaint.borough}</p>
                  <hr>
                  <p>${complaint.zip_code}</p>
                  <hr>
                  <p>${complaint.collision_id}</p>
                  <p>${complaint.cross_street_name}</p>
                  <hr>
                  <p>${complaint.on_street_name}</p>
                  <p>${complaint.vehicle_type_code1}</p>
                  <hr>
                  <p>${complaint.vehicle_type_code2}</p>
                  <p>${complaint.number_of_persons_killed}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

