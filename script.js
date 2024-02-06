const $ = document.querySelector.bind(document);
const main = document.getElementById("main")

let mode = localStorage.getItem("mode")

if (mode === "light") {
    main.classList.remove("main-dark")
    main.classList.add("main-light")
} else {
    main.classList.remove("main-light")
    main.classList.add("main-dark")
}

function toggleDark() {
    if (mode === "light") {
        mode = "dark"
    } else {
        mode = "light"
    }
    
    if (mode === "light") {
        main.classList.remove("main-dark")
        main.classList.add("main-light")
    } else {
        main.classList.remove("main-light")
        main.classList.add("main-dark")
    }

    console.log(mode)

    localStorage.setItem("mode", mode)
}

$('#darkBtn').addEventListener('click', toggleDark)