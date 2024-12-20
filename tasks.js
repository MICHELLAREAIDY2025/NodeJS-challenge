
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
    text = text.trim(); // Trim input to remove whitespace/newline
    console.log(`Received input: "${text}"`); // Log the received input for debugging
    if (text === 'quit' || text === 'exit') { // Check for both commands
      quit();
    }
  // else if(text === 'hello\n'){
    // hello();
  // }
  else if (text.startsWith('hello')) { // Check if the input starts with "hello"
    hello(text); // Pass the full text to the hello function
  }
  else if (text === 'help') { // Check for the help command
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
//help function list all available commands
function help() {
  console.log("Available commands:");
  console.log("- hello: Responds with a greeting.");
  console.log("- quit: Exits the application.");
  console.log("- exit: Exits the application.");
  console.log("- help: Lists all available commands.");
}
function hello(text) {
  const args = text.split(' '); // Split the input into words
  const name = args.slice(1).join(' '); // Get everything after "hello"
  if (name) {
    console.log(`hello ${name}!`);
  } else {
    console.log('hello!'); // Handle the case where no name is provided
  }
}

// The following line starts the application
startApp("Michella Reaidy")
