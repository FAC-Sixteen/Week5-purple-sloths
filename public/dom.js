const input = document.getElementById('input');
const submit = document.getElementById('btn');
const articleContainer = document.getElementById('article-container');
submit.addEventListener('click', (e) => {
    // e.preventDefault();
    console.log(input.value);
    domRequest(input.value);
});

const responseToFrontend = (input, json) => {
  console.log('this is the input', input);
  console.log('this is the json', json);
  for (let i=0; i<1; i++) {
    const article = document.createElement('ARTICLE');
    const header = document.createElement('H1');
    header.textContent = 'booooooooooooooooo';
    article.appendChild(header);
    const image = document.createElement('IMG');
    article.appendChild(image);
    const paragraph = document.createElement('P');
    paragraph.textContent = 'nooooooooooooooooo';
    article.appendChild(paragraph);
    articleContainer.appendChild(article);
  }
};

// Get Request //
const domRequest = (value) => {
    const url = `/guardian?=${value}`
    console.log(url);
fetch(url)
.then(response => response.json())
.then(json => responseToFrontend(input, json));
}
