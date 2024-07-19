const input = document.querySelector('input');
const sendBtn = document.getElementById('searchBtn');
const items_area = document.querySelector('ol');
const clearBtn = document.getElementById('clearBtn');
window.addEventListener("keydown", event => {
    if (input === document.activeElement && event.key === "Enter") {
        const itemName = document.createElement('li');
        itemName.innerHTML = `${input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()}`;
        const icon = document.createElement('i');
        icon.classList.add("fas", "fa-trash");
        icon.addEventListener('click', () => {
            items_area.removeChild(itemName);
        });
        itemName.appendChild(icon);
        items_area.appendChild(itemName);
        input.value = "";
    }
});
clearBtn.addEventListener('click', () => {
    let child = items_area.firstChild;
    while (child) {
        items_area.removeChild(child);
        child = items_area.firstChild;
    }
});
function windowOpen(){
    window.open("message.html");
}