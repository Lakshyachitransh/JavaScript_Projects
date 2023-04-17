let userName = 'Lakshya';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
let userQuestion = 'Will i became a software engineer?';
console.log(`${userName} has asked - ${userQuestion}`);
let  randomNumber = Math.floor(Math.random()*8);
//floor converts decimal value to integer value and random generate some random values 
let eightBall = '';
switch (randomNumber){
  case 1:
  eightBall='It is certain';
  break;
  case 2:
  eightBall='It is decidedly so';
  break;
  case 3:
  eightBall='Reply hazy try again';
  break;
  case 4:
  eightBall='Cannot predict now';
  case 5:
  eightBall='Do not count on it';
  break;
  case 6:
  eightBall='My sources say no';
  break;
  case 0:
  eightBall='Outlook not so good';
  break;
  case 7:
  eightBall='Signs point to yes';
  break;
}
console.log(eightBall);

