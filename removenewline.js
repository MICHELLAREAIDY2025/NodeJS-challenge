// Sample text with newline characters
const textWithNewlines = "This is a line.\nThis is another line.\nYet another line.";

// Remove newline characters
const cleanedText = textWithNewlines.replace(/\n/g, ' ');

// Print the cleaned text
console.log(cleanedText);


// Sample text
const text = "command firstWord secondWord thirdWord";

// Split the string into words
const words = text.split(' ');

// Extract the first word as the command
const command = words[0];

// Print the command and the rest of the words
console.log("Command:", command);
console.log("Words:", words);