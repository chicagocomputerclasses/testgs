
function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbws2O8oT_JqohrIgzi0BYTIi0hvGkBB64_BYMYpgn9kJFGVMiWq/exec";


    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}


function addGS(){

    const url = "https://script.google.com/macros/s/AKfycbws2O8oT_JqohrIgzi0BYTIi0hvGkBB64_BYMYpgn9kJFGVMiWq/exec";


    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({first:"Jake",phone:"312-000-1212", last:"Newperson"}) // body data type must match "Content-Type" header
      });

}

document.getElementById("btn2").addEventListener("click",addGS);

document.getElementById("btn").addEventListener("click",testGS);




