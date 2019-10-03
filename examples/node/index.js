const library = require('../dist/doggo-translator-ts.umd');
const DoggoTranslator = library.DoggoTranslator;

const myTranslator = new DoggoTranslator();
console.warn(myTranslator.translateSentence('Testing this, bark!'))
console.warn(myTranslator.translateSentence('Hello friend! I hope you have a great day!'))
