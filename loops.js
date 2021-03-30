function forLoop(array) {
  for (let i = 0; i < 35; i++) {
    //array.push("I am ${i + 1} strange loop${i === 0 ? \'\' : \'s\'}.");
    if (i <= 9) {
      continue;
    }
    elif (i > 9) {
      //console.log("I am 1 strange loop.");
      array.push("I am 1 strange loop.");
    }
    else (i > 11) {
      array.push("I am " + (i + 1) + " strange loops.");
      //array.concat("I am " + (i + 1) + " strange loops.");
    }
  }
  console.log(array);
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
