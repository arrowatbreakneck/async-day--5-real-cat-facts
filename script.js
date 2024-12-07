

document.querySelector("button").addEventListener("click", result);


var factsInfo; 

async function result() {
    var userVal = document.getElementById("character").value;
  var res = await fetch(`https://meowfacts.herokuapp.com/?count=${userVal}`);
  var data = await res.json();
  console.log(data.data);
  var factsInfo = data.data; 
  cards(factsInfo);
}

function cards(inf) {
    // parentdiv.innerHTML = "";
    var parentdiv = document.getElementById("factsdiv");
var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

console.log(inf.length);
    
  for (var i = 0; i < inf.length; i++) { 
    console.log(inf[i]);
    var col = document.createElement("div");
    col.classList.add("col-lg-12");
    col.innerHTML = `<div class="card">
  <div class="card-header">
    Cat Facts:
  </div>
  <div class="card-body" >
    <blockquote class="blockquote mb-0">
      <p>${inf[i]}</p>
     
    </blockquote>
  </div>
</div>`;
row.append(col);
container.append(row);
parentdiv.append(container);

  }
  
};
