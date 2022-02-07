const getElement = (selection) => {
  const element = document.querySelector(selection);

  if(element) return element;
  throw new Error('no element selected');
}

export default getElement;


// same as above, but in diff way 
/*

export default (selection) => {
  const element = document.querySelector(selection);

  if(element) return element;
  throw new Error('no element selected');
}

*/
