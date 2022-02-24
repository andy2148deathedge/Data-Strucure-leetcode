//Coding Practice - Array of Arrays
//為一常見coding考試經典題
//Write a function that collects all value in an array of arrays and return an array of values collected.

//ex:
//let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
//collecter(arrs) //[a, b, c, d, e, f, g, h]

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]; 


function collecter (arrays) {
  let result = [];
  pack(arrays);
  console.log(result);
  return result;

  function pack(arrays) {
    for(let i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        pack(arrays[i]);
      } else {
        result.push(arrays[i]);
      }
    }
  }
}

//main
collecter(arrs);
