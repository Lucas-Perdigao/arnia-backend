// Injeção de dependência
/*
Injeção de dependência é um padrão de projeto que ajuda a separar a criação e a resolução de dependências de um objeto, permitindo que as dependências sejam definidas e gerenciadas externamente. Em outras palavras, em vez de um objeto criar suas próprias dependências, as dependências são fornecidas a ele por uma fonte externa.

Usamos essa lógica de injeção de dependência, ao injetar dentro de um código as coisas necessárias para ele funcionar à todo momento. Um exemplo é a passagem de parâmetros para uma função.
*/

function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(4, 6));

/*
Na função acima, passamos externamente os parâmetros 4 e 6 para a função. É uma passagem externa de dados.
Até o momento, definíamos classes da seguinte maneira:
*/

class GarageSystem {
  garage = [];

  addCar(car) {
    this.garage.push(car);
  }

  removeCar(idCar) {
    const index = this.garage.findIndex((car) => car.id == idCar);

    if (index == -1) {
      return;
    }

    this.garage.splice(index, 1);
  }

  listCars() {
    console.log(this.garage);
  }
}

const garage = new GarageSystem();
garage.addCar({ id: 1, car: "Fiat Palio" });
garage.listCars();
garage.removeCar(1);
garage.listCars();

/*
E se nós quisermos aproveitar essa lógica do sistema de garagens, mas não para a garagem definida em "this.garage", mas para qualquer garagem que nós formos utilizarmos?
Ao invés de declararmos a garagem dentro da própria classe, podemos passar a garagem no qual os carros serão armazenados por parâmetro do construtor.
Dessa maneira, a nossa classe se torna dinâmica e poderá usar essa mesma lógica com qualquer garagem. Segue o exemplo:
*/

class GarageSystemImproved {
  constructor(garage) {
    this.garage = garage;
  }

  addCar(car) {
    this.garage.push(car);
  }

  removeCar(idCar) {
    const index = this.garage.findIndex((car) => car.id == idCar);

    if (index == -1) {
      return;
    }

    this.garage.splice(index, 1);
  }

  listCars() {
    console.log(this.garage);
  }
}
const garagemDoZezinho = [];
const garagemDoTiao = [];

const sistemaGaragemDoZezinho = new GarageSystemImproved(garagemDoZezinho);
const sistemaGaragemDoTiao = new GarageSystemImproved(garagemDoTiao);

sistemaGaragemDoZezinho.addCar({ id: 1, car: "Fiat Palio" });
sistemaGaragemDoTiao.addCar({ id: 1, car: "Ford Focus" });

sistemaGaragemDoZezinho.listCars();
sistemaGaragemDoTiao.listCars();

/*
Usando a classe GarageSystemImproved, injetamos a dependência "garage" dentro dela. Se a dependência não é passada, a classe não funciona.
Porém diferente da classe GarageSystem que definia o array dentro dela, a classe GarageSystemImproved define o array fora dela e passa o array para dentro
da classe pelo parâmetro do construtor. Dessa maneira, a classe pode utilizar qualquer array que for passado pela sua lógica. 

Essa lógica é muito utilizada para deixarmos o nosso código mais genérico, reaproveitável e flexível.
Por exemplo, se nós quisermos mudar o nosso banco de dados da nossa aplicação, usando uma injeção de dependência nós podemos mudar somente o banco de dados injetado, ao invés de precisar mudar em todos os pontos no qual o banco de dados era chamado diretamente no sistema.
*/

class Repository {
  constructor(bancodedados) {
    this.bancodedados = bancodedados;
  }

  // Método para adicionar um novo item
  adicionar(item) {
    this.bancodedados.push(item);
  }
}

// Cria as dependências
const databaseMysql = [];
const databaseMongodb = [];

// Cria uma instância do serviço com as dependências injetadas
const repositoryMysql = new Repository(databaseMysql);
