function addDream() {
    let newDream = document.createElement("li");
    let inputValue = document.getElementById("dreamBox").value;
    let t = document.createTextNode(inputValue);
    newDream.appendChild(t);
    document.getElementById("bucketList").appendChild(newDream);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 

  // document.getElementById("demo").addEventListener("click", clickAway);

  // function clickAway() {
  //   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

function remove(el) {
    var element = el;
    element.remove();
  }