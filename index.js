// Write your solution here!
//  create cats array
let cats = ["Milo", "Otis", "Garfield"];
//add a cat at the end of the array
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  //add a cat at the start of the cats array
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  //remove the last cat from the array
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  //remove the first cat from the array
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  //create anew array with the cats array attached at the end
  function appendCat(name) {
    return [...cats, name];
  }
  //create a new array with the cats array starting
  function prependCat(name) {
    return [name, ...cats];
  }
  //remove the last cat  from the new array
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  //remove the first cat from the new array
  function removeFirstCat() {
    return cats.slice(1);
  }