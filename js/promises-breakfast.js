const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Seu pedido está pronto, vem e pegue');
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val) )
