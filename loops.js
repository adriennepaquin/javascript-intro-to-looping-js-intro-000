function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am " + (i + 1) + " strange loops.");
    }
  }
  newArray = array.slice(11);
  console.log(newArray);
}

function whileLoop(n) {
  let i = 0;
  while (n > i) {
    console.log(n);
    i++;
  }
  return 'done';
}

function doWhileLoop(num) {
  let i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless");
  } while (incrementVariable() < num);
}
