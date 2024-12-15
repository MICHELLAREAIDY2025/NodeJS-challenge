// Sample text with newline characters
const textWithNewlines = "This is a line.\nThis is another line.\nYet another line.";

// Remove newline characters
const cleanedText = textWithNewlines.replace(/\n/g, ' ');

// Print the cleaned text
console.log(cleanedText);