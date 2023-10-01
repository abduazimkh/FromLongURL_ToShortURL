const btn = document.querySelector("#long_to_shortURL");
const copy = document.querySelector("#copy");
const send = document.querySelector("#send");
const longURL = document.querySelector("#longURL");

btn.addEventListener("click", (e) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${longURL.value}`)
    .then(response => response.json())
    .then(data => {
        send.value = data.result.short_link
        
    });
})
copy.addEventListener("click", (e) => {
    navigator.clipboard.writeText(send.value)
})
