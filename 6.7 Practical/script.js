async function init(){
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
 
 for(let i = 0; i < data.length; i += 1){
  let collision = data[i];
  build += `
              <div> class = "fitted card">
              <h2>${collision.crash_date}</h2>
              <h2>${collision.crash_time}</h2>
              <h2>${collision.borough}</h2>
              <h2>${collision.zip_code}</h2>
              </div>
            
              `
 }


  output.innerHTML = build;

}

