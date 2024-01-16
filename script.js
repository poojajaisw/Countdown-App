
const data = addEventListener("click", () => {
    const theme = prompt("Enter the Theme like 'Pooja Birthday")
    const endDate = prompt("Enter the date & Time , like '17 Jan 2024 12:00:00 PM'");
   
    document.getElementById("theme").innerText = theme;
    document.getElementById("end-date").innerText = endDate;
    


    const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 % 24);
    inputs[2].value = Math.floor(diff / 60 % 60);
    inputs[3].value = Math.floor(diff % 60);
}


clock();


setInterval(() => {
    clock();
}, 1000);

})




















































































