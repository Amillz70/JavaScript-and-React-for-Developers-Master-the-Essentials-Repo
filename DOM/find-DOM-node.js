// implement get elements by attribute
  // start by calling function getElementsByAttribute
function getElementsByAttribute(attribute, value) {

// Get all elements in the DOM
  // all will now get all elements in the document
  let all = document.getElementsByTagName("*");

  // found will now be an empty array of found elements that will eventually return
  let found = [];

//Check if they have a particular attribute
  for (i = 0; i < all.length; i++) {
    element = all[i];
    if (all[i].getAttribute(attribute) === value) {
    }
  }
//Check that attribute has the correct value
  return found
}
