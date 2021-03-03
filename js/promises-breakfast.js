const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve('Seu pedido está pronto. Venha e pegue! ');
    } else {
      reject( Error('Ocorreu um problema com seu pedido') );
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then( val => console.log(val) )
  .catch( err => console.log(err) )
