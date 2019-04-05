//Assigns DOM variables to existing html content
const input = document.getElementById('input');
const submit = document.getElementById('btn');
const articleContainer = document.getElementById('article-container');
const purpleSlothDOM = document.getElementById('purpleSloth');

//Fires domRequest() when button is clicked
submit.addEventListener('click', (e) => {
    domRequest(input.value);
});

//Fires domRequest() when enter key is pressed
document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    domRequest(input.value);
  }
})

//Requests the Guardian API in the back-end
const domRequest = (value) => {
  const url = `/guardian?=${value}`

fetch(url)
.then(response => response.json())
.then(json => responseToFrontend(input, json));
}


//fall back for null resluts from API
const fallbackMesg = () => {
  //Creates preview content on submit press
  const article = document.createElement('ARTICLE');
  const header = document.createElement('H2');
  const linkWrapHeader = document.createElement('A');
  const image = document.createElement('IMG');
  const paragraph = document.createElement('P');

  //object properties
  const headerURL = '#';
  const headerTitle = `No results found for ${input.value}`;
  const imageContent = '/public/assets/No-results-found.jpg';
  const articleContent = 'Sorry we have checked The Guardian API and found no results';

  //Sets preview content to above properties
  header.textContent = headerTitle;
  linkWrapHeader.href = headerURL;
  paragraph.textContent = articleContent;
  image.setAttribute('src', imageContent);
  article.setAttribute('class', 'article')

  //Gives HTML structure to DOM elements
  linkWrapHeader.appendChild(header);
  article.appendChild(linkWrapHeader);
  article.appendChild(image);
  article.appendChild(paragraph);
  articleContainer.appendChild(article);
}




const responseToFrontend = (input, json) => {

  //Removes any purple sloths on the page
  if(articleContainer.purpleSlothDOM) {
    articleContainer.removeChild(purpleSlothDOM);
  }
  
  //Removes any previous articles on the page

  while(articleContainer.firstChild) {
    articleContainer.removeChild(articleContainer.firstChild);
  }

  // fallback if search results return are null
if (json.response.results[0] === undefined) { 
  fallbackMesg(); 
} 

  for (let i=0; i<3; i++) {
    //Creates preview content on submit press
    const article = document.createElement('ARTICLE');
    const header = document.createElement('H2');
    const linkWrapHeader = document.createElement('A');
    const image = document.createElement('IMG');
    const paragraph = document.createElement('P');

    //Accesses Guardian JSON object properties
    const headerURL = json.response.results[i].webUrl;
    const headerTitle = json.response.results[i].webTitle;
    const imageContent = json.response.results[i].blocks.main.elements[0].assets[0].file;
    const articleContent = json.response.results[i].blocks.body[0].bodyHtml;

    //Modifies article content by (1) removing html tags and (2) trimming to three sentences long
    const modifyContent = (x) => {
      return x.replace(/<[^>]*>/g, "").split(".", 3).join() + "...";
    }

    //Sets preview content to above properties
    header.textContent = headerTitle;
    linkWrapHeader.href = headerURL;
    paragraph.textContent = modifyContent(articleContent);
    image.setAttribute('src', imageContent);
    article.setAttribute('class', 'article')

    //Gives HTML structure to DOM elements
    linkWrapHeader.appendChild(header);
    article.appendChild(linkWrapHeader);
    article.appendChild(image);
    article.appendChild(paragraph);
    articleContainer.appendChild(article);
  }
};

