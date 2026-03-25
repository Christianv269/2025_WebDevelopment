function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
       <div class = "card">
       <h2> ${ school.name } </h2>
       <img src ="${school.image}">
       <p>${school.address}</p>
       </div>
  `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"ozzy osbourne",
    "image":"https://upload.wikimedia.org/wikipedia/commons/3/3b/Ozzy_Osbourne_in_1970_%28medium-sized_crop%29.jpg",
    "album":"https://i.scdn.co/image/ab67616d00001e02509342e69eb341df70e5c2e3",
    "url":"https://en.wikipedia.org/wiki/Ozzy_Osbourne"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
  let build = `
       <div class = "card">
       <h2> ${ ozzyosbourne.name } </h2>
       <img src ="${ozzyosbourne.image}">
       <p>${ozzyosbourne.address}</p>
       </div>
  `
  output.innerHTML = build;
}


