let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function httpRequest() {
    let url = "https://apis.ccbp.in/jokes/random"
    let options = {
        method: "GET"
    }
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let jokeText = jsonData.value;
            jokeTextEl.textContent = jokeText;
        });
}

jokeBtnEl.addEventListener("click", httpRequest);