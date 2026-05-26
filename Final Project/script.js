async function init(){
  let link = "https://data.cityofnewyork.us/resource/ssq6-fkht.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
 
 for(let i = 0; i < data.length; i += 1){
  let permit = data[i];
  build += `
              <div class = "fitted card">
              <h2>${permit.acct_id}</h2>
              <h2>${permit.owner_name}</h2>
              <h2>${permit.last_visit_dt}</h2>
              <h2>${permit.last_full_insp_dt}</h2>
              <h2>${permit.last_insp_stat}</h2>
              <h2>${permit.prem_addr}</h2>
              <h2>${permit.number}</h2>
              <h2>${permit.street}</h2>
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
                  <p>${complaint.acct_id}</p>
                  <p>${complaint.owner_name}</p>
                  <p>${complaint.last_visit_dt}</p>
                  <hr>
                  <p>${complaint.last_full_insp_dt}</p>
                  <hr>
                  <p>${complaint.last_insp_stat}</p>
                  <p>${complaint.prem_addr}</p>
                  <hr>
                  <p>${complaint.number}</p>
                  <p>${complaint.street}</p>
                  <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

