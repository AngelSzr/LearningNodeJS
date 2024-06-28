let tests = [1,2,3,4,5,6,7];
let test1
(async()=>{
    test1 = await tests.map(test=>test*4)
    test1.forEach(element => console.log('El nuevo elemento del array es:',element))
})();
//let test1 = tests.map((test) =>`aquí está el valor ${test}`)
//test1.forEach(element => console.log('aquí está el valor',element))
//console.log(test1);