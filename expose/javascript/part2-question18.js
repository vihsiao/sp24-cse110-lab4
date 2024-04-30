function displayTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

let check = setInterval(displayTime, 1000);