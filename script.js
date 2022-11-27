const container = document.querySelector('#container');

const content1 = document.createElement('p');
content1.classList.add('p1');
content1.style.cssText = "color: red;"
content1.textContent = "Hey I’m red!";
container.appendChild(content1);

const content2 = document.createElement('h1');
content2.classList.add('h11');
content2.style.cssText = "color: blue;";
content2.textContent = "I’m a blue h3!";
container.appendChild(content2);

const content3 = document.createElement('div');
content3.setAttribute('id', 'div3');
content3.style.cssText = "border: 1px solid black; background-color: pink;";
container.appendChild(content3);

const divContent = document.querySelector('#div3');

const contentDiv = document.createElement('h1');
contentDiv.textContent = "i'm in a div";
divContent.appendChild(contentDiv);
const content2Div = document.createElement('p');
content2Div.textContent = "ME TOO!";
divContent.appendChild(content2Div);



