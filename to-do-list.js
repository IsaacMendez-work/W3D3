// First try
/* function addToList() {
    let btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
  } */

//   Second try
function addToList() {
    var para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    document.body.appendChild(para);
  }