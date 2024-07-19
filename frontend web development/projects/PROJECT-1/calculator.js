let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else {
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch (error) {
            document.getElementById("result").value = "error"
        }
    })
})
document.getElementById("clear").addEventListener("click", function () {
    let a = "";
    document.getElementById("result").value = a;
    string = "";
}
)
