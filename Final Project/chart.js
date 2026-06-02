let data, output, result;
async function init(){
  let link = "permit.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
function ByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.last_insp_stat == "APPROVAL"){
      q++;
    }else if(complaint.last_insp_stat == "NOT APPROVAL(W/REASON)"){
      m++;
    }else if(complaint.last_insp_stat == "NOV(HOLD)"){
      bk++;
    }
  }
  let chartData = [
    ["APPROVAL",q],
    ["NOT APPROVAL(W/REASON)",m],
    ["NOV(HOLD)", bk],
  
  ]
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}

function get(id){
  return document.getElementById(id);
}


function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}