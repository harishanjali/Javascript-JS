//passing function name as an argument
/*function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
  }
  function displayRahul() {
    console.log("Rahul");
  }
  displayGreeting(displayRahul);*/

//passing function as an argument
  function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
  }
  
  displayGreeting(function() {
    console.log("Rahul");
  });