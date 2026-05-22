//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
let data, output, result;
async function init(){
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "collision.json"
  info = await fetch(link);
  data = await info.json();
}

function accidentsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }
  
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ]
  
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}


function accidentsByVehicle(){
  //Create the same functionality as for accidentsByBorough except you will be 
  // aggregating for the following vehicles, 'Sedan', 'Station Wagon/Sport Utility Vehicle', 
  // 'Taxi', 'Bus', 'Motorcycle' and other.  "Other" isn't a vehicle type but simply meant to capture all other vehicles. 

  
}
