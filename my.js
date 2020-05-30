
function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbws2O8oT_JqohrIgzi0BYTIi0hvGkBB64_BYMYpgn9kJFGVMiWq/exec";


    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",testGS);




