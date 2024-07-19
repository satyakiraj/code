let icon = document.getElementById("icon");
const invisible = document.getElementById("invisible");
let value = 0;
icon.addEventListener("click", () => {
  if(value == 0){
    document.getElementById("")
    document.querySelector('.d').style.display = "none";
    invisible.style.display = "block";
    document.querySelector('.ul2').style.visibility = "visible";
    value = 1;
  }
    else if(value == 1){
        document.querySelector('.d').style.display = "block";
        invisible.style.display = "none";
        document.querySelector('.ul2').style.visibility = "hidden";
        value = 0;
    }
});
