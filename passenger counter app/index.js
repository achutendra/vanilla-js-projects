// document.getElementById("count-el").innerText = 5

let count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count       // document.getElementById help us to
                                                                // access and change by element by id  
}

function save() {
    let countStr = count + " - ";
    document.getElementById("save-el").textContent += countStr        // textContent works better than innertext
    count = 0;
    document.getElementById("count-el").innerText = count
}

function decrement() {
    count = count - 1;
    document.getElementById("count-el").innerText = count
}

