//Get the target element
const duck = document.querySelector("#duck");
const field = document.querySelector('#field')
 


//Add the click event listener
duck.addEventListener("click", () => {
  increaseScore();
  moveDuck();

  
});


const increaseScore = () => {
    //Get the content of the target element. The current value for score
    const score = document.querySelector("#score-counter").innerHTML;
    //Get the element to increase the value
    const scoreHTML = document.querySelector("#score-counter");
    //Cast the score value to Number type
    let count = Number(score);
    //Set the new score to the target element
    scoreHTML.innerHTML = count + 1;
  };

  //Get a random number
const getRandomNum = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
  }
  //Move the duck randomly 
const moveDuck = () => {
   
    let wrapWidth = field.clientWidth;
    let wrapHeight = field.clientHeight;

    duck.style.left = Math.floor((Math.random() * wrapWidth - 100)) + "px";
    duck.style.top = Math.floor((Math.random() * wrapHeight - 100)) + "px";

    (function(d){
        const time =5;
        let display = d.querySelector('.timer-container .display') // меняющаяся цифра
          let timeLeft = parseInt(display.innerHTML) // оставшееся время
        let timer = setInterval(function(){
          if (--timeLeft >= 0 ) { // если таймер всё еще больше нуля
              display.innerHTML = timeLeft // обновляем цифру
          }
        
        }, 1000)  // таймер срабатывает каждые 1000 msec (1 sec)
      })(document) 
 
  };

 
//   const regressTime = () => {
//           //Get the content of the target element. The current value for score
//     const timer = document.querySelector('#timer');
//     //Get the element to increase the value
//     const scoreTimerHTML = document.querySelector("#timer-counter");
//     //Cast the score value to Number type
//     let count  = Number(timer);
//     //Set the new score to the target element
//     let timerCounter =  setInterval(count-1, 1000);
    
//     scoreTimerHTML.innerHTML = timerCounter;
        


    

//     // function myClock() {
       

//     //     var second = siteTime.getSeconds(); //получаем секунды
//     //     //В следующих трех строках проверяем, если число (часы, минуты, секунды) меньше 10,
//     //     // то выводим 0 перед числом (для красоты)
       
//     //     //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта
//     //     document.getElementById("siteTime").innerHTML = hour + ":" + minute + ":" + second; 
    
    
//     // function timerId (){
        
//     //      = timeCounter =5;
        
//     //     if(timeCounter !=0){
//     //         return timerId;
//     //     }
//     // };
//   };
  
// //   let timerId = setInterval(() =>timer(), 2000);
  



// (function(d){
//     let display = d.querySelector('#timer-counter .display') // меняющаяся цифра
//       let timeLeft = parseInt(display.innerHTML) // оставшееся время
    
//     let timer = setInterval(function(){
//       if (--timeLeft >= 0) { // если таймер всё еще больше нуля
//           display.innerHTML = timeLeft // обновляем цифру
//       } else {
//          moveDuck();
//       }
//     }, 1000)  // таймер срабатывает каждые 1000 msec (1 sec)
//   })(document)