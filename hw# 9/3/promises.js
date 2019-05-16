//********************************//
  // true - отработает resolve //
  // false - отработает reject //
//********************************//

let iKeepMyWord = true;
let artPromise = new Promise(function (resolve, reject) {
    if (iKeepMyWord) {
        resolve("Я держу свое слово!");
    } else {
        reject("Я не держу свое слово(")
    }
});
artPromise.then(resolve => {
    console.log(resolve);
},
    (reject) => {
        console.log(reject);
});