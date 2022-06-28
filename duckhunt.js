window.onload = function() {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  // let duck = document.createElement('div')
  //   2. add a class to the element
  // duck.classList.add('duck')
  //   3. append the element to the body )
  // body.appendChild(duck)

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  // setInterval(() => duck.classList.toggle('flap') , 250)

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"
  // DON'T FORGET: You might need to set "top" and "left" to a number of pixels -- e.g., "400px" rather than simply "400".


  function moveDuck(duckObj){
    const oldDuckLeft = parseInt(duckObj.style.left)
    const newDuckLeft = Math.floor(Math.random() * window.innerWidth)
    
    if(oldDuckLeft < newDuckLeft){
      if(duckObj.classList.contains('left')){
        duckObj.classList.remove('left')
      }
      duckObj.classList.add('right')
    } else if (oldDuckLeft > newDuckLeft){
      if(duckObj.classList.contains('right')){
        duckObj.classList.remove('right')
      }
      duckObj.classList.add('left')
    } else {
      duckObj.classList.toggle('left')
      duckObj.classList.toggle('right')
    }

    duckObj.style.top = Math.random() * window.innerHeight + 'px'
    duckObj.style.left = newDuckLeft + 'px'
    
    console.log(oldDuckLeft, newDuckLeft)
    
  }

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // setInterval(moveDuck, 1000, duck)

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object
  
  const randomPosition = moveDuck
  const removeDuck = (e) => {
    e.target.classList.toggle('shot')
    setTimeout(() => e.target.remove(), 1000)
    setTimeout(checkForWinner, 1000)
  }
  
  const createDuck = () => {
    let duck = document.createElement('div')
    duck.classList.add('duck')
    body.appendChild(duck)
    randomPosition(duck)
    duck.addEventListener('click', removeDuck)
    setInterval(() => duck.classList.toggle('flap') , 250)
    setInterval(moveDuck, 1000, duck)
  }
  
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  
  for(let i=0; i < 5; i++) {
    createDuck();
  }
  
  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;
  
  
  // 9. Keep going! Move onto part 3!
  
  // --------------------------- PART 3 ------------------------------------
  
  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
  
  
  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain
  
  
  
  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  
  function checkForWinner() {
    const ducks = document.querySelectorAll('.duck')
    console.log(ducks)
    if(ducks.length == 0) {
      alert('YOU WIN!')
    }
  }
  
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
