import get from './getElement.js'; //since it is a default export we can give it any name we want. I am use 'get' as its name.

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];


const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  removeActive(btns);

  btns[0].classList.add('active');
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
        removeActive(btns);

      btn.classList.add('active');
    })
  })
}

function removeActive (items)  {
  items.forEach((btn) => {
    btn.classList.remove('active')
  })
}

export default displayUser;