const merge = require('./merge');

function test1() {
   var thing = {
      get name() {
            return 'jon'
      },
   };
   
   var animal = {};
   merge(animal, thing);
}

function test2() {
   var thing = {
      prop1: 'nikolay',
      get name() {
            return 'jon'
      },
   };
   
   var animal = {
      prop1: 'nikolay',
      prop2: 'lebedev',
   };
   merge(animal, thing);
};

// test
console.time("test");
for (let i = 0; i < 10000000; ++i) {
    test1();
    test2();
}
console.timeEnd("test");
