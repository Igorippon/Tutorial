// const x = '1040';
// console.log(x);

// const shouldRenew = confirm("Хотите продлить подписку");
// console.log(shouldRenew);


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = []
// let total = 0
// for (let i = 0; i < langs.length; i++) {
//     let addResult = false;

//     for (let j = 0; j < result.length; j++) {
//         if (langs[i] < result[j]) {
//             result.splice(j, 0, langs[i]);
//             addResult = true;
//             total += 1
//             break;
//         }
//         total += 1
//     }
//     if (!addResult) {
//         result.push(langs[i]);
//     }
// }
// console.log(result);
// console.log(total);


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);



// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highIcon);
// console.log(highTomorrow);



// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = [...scores];
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const newData = { completed: false, category: "General", priority: "Normal", ...data };
//     return newData;
//     // console.log(newData);
//   // Change code above this line,
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })

// Change code below this line
// function add(...args) {
//   let total = 0;
//  for (const arg of args) {
//    total += arg;
//  }
//   return total;
//   // Change code above this line
// }
// add(12, 4, 11, 48);

// завдання 32
// Функція addOverNum() рахує суму всіх аргументів.
//  Зміни параметри і тіло функції addOverNum() таким чином,
//     щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
//     Це число повинно бути першим параметром функції.

// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     if(args[i] > args[0])
//     total += args[i];
//   }

// //   return total;
//   // Change code above this line
//     console.log(total);
// }

// addOverNum(10, 12, 4, 11, 48, 10, 8);
// // повертає 71

// function findMatches(one, ...args) {
//   const matches = [];
// for (let i = 0; i < one.length; i++) {
//     for (let j = 0; j < args.length; j++) {
//         if (one[i] === args[j]) {
//             matches.push(args[j]);
//         }
        
//     }
// }
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const bookIndex = this.books.indexOf(oldName);

// this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//       console.log(this.books);
//     },
  
// };
// console.log(bookShelf.books);
// bookShelf.updateBook("Haze", "Dungeon chronicles");

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName);

//       console.log(this.potions);
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion("Invisibility");


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const potionsIndex = this.potions.indexOf(potionName);
// this.potions.splice(potionsIndex, 1);

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);

//     // Change code above this line
//   },
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
  
//    addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if(newPotion.name === potion.name){
//          return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//   this.potions.push(newPotion);
//   },
  
//   removePotion(potionName) {
//      for (const potion of this.potions){
//        if( potion.name === potionName){
//          const potionIndex = this.potions.indexOf(potion);
//          this.potions.splice(potionIndex, 1);
//        }
//      }
//   return `Potion ${potionName} is not in inventory!`;
//     },
  
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions){
//         if (potion.name === oldName) {
//             potion.name = newName;
            
//       }
//     }
    

    
//       return `Potion ${oldName} is not in inventory!`;
    

   
//   },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//     // console.log(callback(pizzaName))
// }
// makeMessage('Royal Grand', makePizza);

// function changeEven(numbers, value) {
//   // Change code below this line
//     let newNumbers = [];
  
// numbers.forEach(num => {
  
//   if(num % 2 === 0){
//   newNumbers.push(num + value);
//     // return newNumbers;
//     }
//   else if (num % 2 !== 0) {
//      newNumbers.push(num);
//     }
  
   
// });
//     console.log(newNumbers);
//     // return newNumbers;
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// changeEven([44, 13, 81, 92, 36, 54], 100);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((playtime, number) => playtime + number, -1000);
// console.log(totalPlayTime);


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + (player.playtime / player.gamesPlayed), 0);
// console.log(totalAveragePlaytimePerGame);



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// console.log(names);