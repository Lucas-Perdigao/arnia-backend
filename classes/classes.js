// Sobre Objetos
/*
    Objetos são uma estrutura de dados que possuem propriedades e métodos. 
    Propriedades são características desse objeto, que definem ele.
    Métodos são funções internas do objeto.

    O 'this' é usado dentro de um objeto para referenciar uma variável interna do próprio objeto, ao invés de uma variável externa à ele.
*/

const name = "Larissa";

const person = {
  species: "human",
  height: "170cm",
  name: "Marcelo",
  sayName() {
    console.log(`Olá, meu nome é ${this.name}`);
  },
};

console.log(person.name);
person.sayName();

//O que são classes?
/*
    Classes são uma estrutura de dados que descreve estados (propriedades) e comportamentos (métodos) de um objeto.
    Elas são usadas para instanciar (criar) objetos, como uma fábrica de objetos que terão os estados e comportamentos definidos pela classe.
*/

class Dog {
  race = "poodle";
  paws = 4;
}

const cachorro = new Dog();
console.log(cachorro);

//O método constructor
/*
    O método constructor é um método interno da classe. Uma classe não é obrigada a ter o método constructor.
    O método constructor é executado no momento em que a classe é instanciada.
*/

class Example {
  constructor() {
    console.log("Executei o constructor!");
  }
}

new Example();

/* 
    O constructor, por ser uma função, pode receber parâmetros.
    Os parâmetros do constructor são passados nos parâmetros da classe quando se instancia ela.
*/

class Learning {
  constructor(word) {
    console.log(`Eu estou aprendendo ${word}`);
  }
}

new Learning("backend");

/* 
    Podemos usar o constructor, junto do "this" para criarmos propriedades com valores dinâmicos ao instanciarmos um objeto.
    Dessa maneira, podemos definir as propriedades do objeto que será gerado pela classe no momento em que instanciamos ele.
*/

class Cat {
  species = "feline";

  constructor(name, age, color, gender) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.gender = gender;
  }

  displayAge() {
    console.log(`${this.name} possui ${this.age} ano(s) de idade.`);
  }

  getOlder() {
    this.age = this.age + 1;
  }
}

const catFarofa = new Cat("Farofa", 1, "yellow", "male");
const catRicota = new Cat("Ricota", 4, "white", "female");
console.log(catFarofa);
console.log(catRicota);

catFarofa.displayAge();
catFarofa.getOlder();
catFarofa.displayAge();
