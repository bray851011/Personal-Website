var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var gpaNumber = document.getElementById("gpa-number");
var count = 0;

setInterval(()=>{
  if(count == 36){
    clearInterval();
  }else{
    count += 1;
    gpaNumber.innerHTML = count / 10; 
  }
}, 25)

var progessNumber = document.getElementById("progress-number");
var count2 = 0;

setInterval(()=>{
  if(count2 == 50){
    clearInterval();
  }else{
    count2 += 1;
    progessNumber.innerHTML = count2 + "%"; 
  }
}, 20)

