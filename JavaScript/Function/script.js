// function concat(separator) {
//   let result = "";
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }

// console.log(concat(", ", "red", "orange", "blue"));
// // "red, orange, blue, "

// console.log(concat("; ", "elephant", "giraffe", "lion", "cheetah"));
// // "elephant; giraffe; lion; cheetah; "

// console.log(concat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// // "sage. basil. oregano. pepper. parsley. "

// function newConcat(separator, ...args) {
//   result = "";
//   return args.concat().toString();
// }

// console.log(newConcat(", ", "red", "orange", "blue"));

function solution(str, ending) {
  const secondStrLeng = ending.length;
  console.log(secondStrLeng);
  const firstStrCut = str.slice(-secondStrLeng);
  console.log(firstStrCut);
  if (firstStrCut === ending) {
    return true;
  } else {
    return false;
  }
}

solution("abc", "bc");
