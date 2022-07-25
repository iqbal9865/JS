// explore array methods

// forEach
const products = [
   {
      id: 1,
      name: 'laptop',
      price: 50000
   },
   {
      id: 2,
      name: 'mobile',
      price: 20000
   }, 
   {
      id: 3,
      name: 'tablet',
      price: 15000
   }
]

console.log('Access Array Element using forEach')
products.forEach(function (product, index) {
   if(index === 0) {
      console.log(product.name)
      console.log(product.price)
      console.log('------')
   }
})

// map methods
console.log('Access Array Element using map methods')
products.map(product => {
   console.log(product.name)
   console.log(product.price)
   console.log('------')
})

// filter methods
console.log('Filter Method in Array')
const highPrice = products.filter(product => {
   return product.price >= 18000;
})
console.log(highPrice)

// find methods
console.log('Find Method in Array')
const findProduct = products.find(product => {
   return product.id === 3;
})
console.log(findProduct)