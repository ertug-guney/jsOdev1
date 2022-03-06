let isim = prompt("isminiz nedir")
let myName = document.querySelector("#myName")
myName.innerText = isim

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let myClock = document.querySelector("#myClock")

function showTime() {
    let today = new Date();
    let time = ("0" + today.getHours()).substr(-2) + ":" + ("0" + today.getMinutes()).substr(-2) + ":" + ("0" + today.getSeconds()).substr(-2);
    let dayy = today.getDay();
    let day = weekday[dayy];
    let dayTime = time + " " + day;
    myClock.innerHTML = dayTime;
    
    // setTimeout(showTime,1000);
}

// setTimeout(showTime,1000);

setInterval(showTime,1000); 
