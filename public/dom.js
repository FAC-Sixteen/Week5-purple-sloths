const input = document.getElementById('input');
const submit = document.getElementById('btn');
submit.addEventListener('click', (e) => {
    // e.preventDefault();
    console.log(input.value);
    domRequest(input.value);
})

// Get Request //
const domRequest = (value) => {
fetch(`/guardian?=${value}` )
.then(response => response.json())
.then(json => responseToFrontend(input, json));
}