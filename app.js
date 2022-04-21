const titulo = document.getElementById('titulo');
const elementoh1 = document.createElement('h1');
elementoh1.setAttribute('class', 'titulo');
elementoh1.textContent = 'titulo provisorio';
titulo.appendChild(elementoh1);
titulo.innerHTML += ' <h1 id="titulo" class="titulo"></h1>';