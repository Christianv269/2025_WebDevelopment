//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, output, result;
async function init(){
  let link = "data.json"
  info = await fetch(link);
  data= await info.json();
 

  output = get("output");
  let build = "";
  //Challenge 2: Test the card( ) developed in Challenge 1 by displaying the first violation to the webpage.
  for(let i = 0; i < data.length; i += 1){
    let violation = data[i];
    build += 
  }


  //Challenge 4: Display all the Open Parking and Camera Violations to the web page using the cards( ) from Challenge 3.
  
  
}


