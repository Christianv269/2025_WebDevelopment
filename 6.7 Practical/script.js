async function init(){
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
 
 for(let i = 0: i < data.length i+= 1){
  let collision = data[i];
  build += `
              <div> class = "card">
              <h2>${collision.title}</h2>
              <img class = "fit" src = ${data[i].image}><br>
              <a target ="_blank" href https://mozilla.github.io/pdf.js/web/viewer.html?file=${criminal.pdf}> Poster </a>`
 }


  output.innerHTML = build;

}

