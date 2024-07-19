document.getElementById("button").onclick = function(){
    a = document.getElementById("input").value;
    a = Number(a);
    if(a >= 18){
        console.log("you're an adult");
        document.getElementById("p1").innerHTML = "you're an adult";
    }
    else if(a < 5){
        console.log("you're a child");
        document.getElementById("p1").innerHTML = "you're a child";
    }
    else {
        console.log("you are still not a mature person");
        document.getElementById("p1").innerHTML = "you are still not a mature person";
    }
}