//------------------------------------------------Exercise #1------------------------------------------------------------

//1-write a variable without initial value

var x=undefined;
var x;

//2-write a variable with initial value

 var x="sadi";
 //3-write 3 variables in same line without initial value

 var x ,y ,z;

 //4-write 3 variables in same line with initial value

 var x=y=z=1;
 var x=1,y=2,z=3;

 //5-write 3 variables with Boolean value

 var x=true,y=false,z=true;
 console.log(y);

//6-write a constant 

const result=0;

//7-write an empty array without initializing its size

const myarray=[];

//8-write an array of number from 1 to 10

const array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);

//9-write an array of strings has letters from A to J

const array2=['A','B','C','D','E','F','G','H','I','J'];

//10-Write an Object has at least 3 attributes (keys) and give each one a numeric value

let users ={
    user1:1,
    user2:2,
    user3:3
}
//11-write an object has at least 3 attributes (keys) and give each one a string value

let user1 ={

	user1:'sadi',
    user2:'Dania',
    user3:'ahmad',
}

//12-write an object has at least 3 attributes (keys) and give each one a Boolean value

let user2 ={

	user1:false,
    user2:true,
    user3:false,
}
//13-write an object has at least 3 attributes (keys) and give each one an array value

let mamaarray ={

	chaildArray1 : ['A','B','C','D','E','F','G','H','I','J'],
	chaildArray2 : ['A','B','C','D','E','F','G','H','I','J'],
	chaildArray3 : ['A','B','C','D','E','F','G','H','I','J'],
}

//14-write an object has at least 3 attributes (keys) and give each one an object value (object of objects)

let user3 ={

	sadi  : {age:22,lastName:Ashlaq},

	dania : {age:18,lastName:abuTair},

	ahmad : {age:55,lastName:Aburoman},
}

//15-Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object


let kaltabitaBelsalas ={

	GG1 : "hvana",

	GG2 : 1,

	GG3 : false,

	GG4 : ['A','B','C','D','E','F','G','H','I','J'],

	GG5 : {age:22,lastName:Ashlaq},
}

//16-Write an array of objects

BOOKS = {
    book : [
      {
        id: 1,
        name: "The Secret",
        image:"../Images/b1.jpg",
        price: 2,
        desc: "The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the law of attraction, which claims that thoughts can change a person's life directly.",
    },
    {
        id: 2,
        name: "The Power",
        image:"../Images/b2.jpg",
        price: 2,
        desc: "The Power is a 2010 self-help and spirituality book written by Rhonda Byrne. It is a sequel to the 2006 book The Secret. The book was released on 17 August 2010 along with an audio-book based on it.",
    },
    {
        id: 3,
        name: "The Magic",
        image:"../Images/b3.jpg",
        price: 3,
        desc: "The Magic is a 2012 self-help and spirituality book written by Rhonda Byrne. It is the third book in The Secret series. The book was released on March 6, 2012, as a paperback and e-book. The book is available in 41 languages.",
    },
    {
        id: 4,
        name: "The 48 Laws of Power",
        image:"../Images/b4.jpg",
        price: 5,
        desc: "The 48 Laws of Power is a non-fiction book by American author Robert Greene. The book is a bestseller, selling over 1.2 million copies in the United States, and is popular with prison inmates and celebrities. ",
    },
      {
        id: 5,
        name: "The Subtle Art of Not Giving a F*ck",
        image:"../Images/b5.jpg",
        price: 4,
        desc: "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. In it Manson argues that life's struggles give it meaning.",
    },
    {
        id: 6,
        name: "Malleus Maleficarum",
        image:"../Images/b6.jpg",
        price: 6,
        desc: "The Malleus Maleficarum, usually translated as the Hammer of Witches, is the best known treatise on witchcraft. It was written by the Catholic clergyman Heinrich Kramer and first published in the German city of Speyer in 1486.",
    },
    {
        id: 7,
        name: "Theory of everything",
        image:"../Images/b7.jpg",
        price: 8,
        desc: "A theory of everything, final theory, ultimate theory, or master theory is a hypothetical single, all-encompassing, coherent theoretical framework of physics that fully explains and links together all physical aspects of the universe. ",
    },
    {
        id: 8,
        name: "Voices from Chernobyl",
        image:"../Images/b8.jpg",
        price: 999,
        desc: "Voices from Chernobyl: The Oral History of a Nuclear Disaster is a book about the Chernobyl disaster by the Belarusian Nobel Laureate Svetlana Alexievich. At the time of the disaster, Alexievich was a journalist living in Minsk.",
    },

    ]
    
  };

  //17-write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object

SS = "beb";
let user17 = [
    {a: [10], b: [20]},
    {a: [30], b: [40]},
    {a: [50], b: [60]},
    {a: [70], b: [80]},
    {a: [90], b: [100]},
    {a: sadi},

];
//18-Write a function to sum two numbers passed in parameters

function sum(num1,num2){
    return num1+num2;
}

//19-write a function to multiply two numbers

function multiply1(num1,num2){
    return num1*num2;
}

//20-write a function to sum two numbers entered by user

let num1=0;
let num2=0;
function sum1(num1,num2){
    return num1+num2;
}

//21-write a function to multiply two numbers entered by user

let num11=0;
let num21=0;
function multiply(num11,num21){
    return num1*num2;
}

//22-Write a function to return a value

function subtract(num1,num2){
    return num1-num2;
}

//23-Write a function to return a value

function sum2(num3,num4){
    return num3+num4;
}

