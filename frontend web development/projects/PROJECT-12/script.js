const value = document.querySelector('input').value;
const numValue = parseInt(value, 10);
const fromCur = document.getElementById("fromCur");
const toCur = document.getElementById("toCur");
[fromCur, toCur].forEach((select, i) => {
  for (let curCode in Country_List) {
    const selected = (i === 0 && curCode === "USD") || (i === 1 && curCode === "INR") ? "selected" : "";
    select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
  }
  select.addEventListener("change", () => {
    const value = select.value;
    const imgTag = select.parentElement.querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${Country_List[value].toLowerCase()}.png`;
  });
});
window.onload = conversion(value);
function convert() {
  const current_value = document.querySelector('input').value;
  if (!(current_value === "" || isNaN(current_value))) {
    document.querySelector(".result").textContent = "Getting Exchange Rates...";
    conversion(current_value);
  } else {
    alert('Enter A Value')
  }
}
async function conversion(value) {
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCur.value}`);
    if (!response.ok) {
      document.querySelector('.result').innerHTML = "Currency Couldn't Be Found";
      throw new Error("Currency Couldn't Be Found");
    }
    const rJSON = await response.json();
    const data = rJSON.rates[toCur.value];
    const num = parseInt(value, 10);
    const actual_data = (data * num).toFixed(2);
    setTimeout(() => {
      document.querySelector(".result").innerHTML = `${value} ${fromCur.value} = ${actual_data} ${toCur.value}`;
    }, 320);
  } catch (error) {
    console.error("Error: " + error);
  }
}
document.querySelector('i').addEventListener("click", () => {
  [fromCur.value, toCur.value] = [toCur.value, fromCur.value];
  [fromCur, toCur].forEach((select) => {
    const code = select.value;
    const imgTag = select.parentElement.querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
  });
  const current_value = document.querySelector('input').value;
  conversion(current_value);
});