import get from './utils/getElement.js'; //since it is a default export we can give it any name we want. I am use 'get' as its name.
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  //get user form api
  const person = await getUser();
  displayUser(person)
  //dislay user
};

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
