// First try
/* function addToList() {
    let btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
  } */

// Second try
/* function addToList() {
    var para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    document.body.appendChild(para);
  } */

  // Third try is just a copy/paste
function addDream() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("dreamBox").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("bucketList").appendChild(li);
    }
    document.getElementById("dreamBox").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 