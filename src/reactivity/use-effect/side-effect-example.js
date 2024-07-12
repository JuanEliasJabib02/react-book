let counter = 0; // Global variable
function incrementCounter() {
  counter += 1; // Modify a global variable outside the function scope block (side effect)
  console.log(counter); 
}

incrementCounter(); //When this function is called , this produce a side-effect.
incrementCounter();
