// Izarra Villareal CS 81 JavaScript Module 4 Assignment 4A: Review readingTracker.js

// Weekly reading log
// Initializes an array of objects representing daily reading activities stored in a constant variable.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 }, // Each entry contains day, book, and minutes properties consisting of two strings and one number
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];
// Another suggested imrpovement would be to use dates instead of day names for more flexibility and accuracy in tracking reading over multiple weeks.

// Adds a new reading entry to the log
// This function adds a new entry to the reading log.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // Create a new entry object with the provided day, book, and minutes
  readingLog.push(newEntry); // Add the new entry to the reading log array using push method
}

// Returns total minutes spent reading all week
// This function calculates the total reading minutes from the log.
function totalReadingMinutes(log) {
  let total = 0; // Initialize total minutes to zero before starting the loop
  for (let entry of log) { // Loop through each entry in the log array
    total += entry.minutes; // Add the minutes from the current entry to the total
  }
  return total; // Return the final total minutes after the loop completes for all entries
}

// Returns the book read most frequently
// This function finds the book that was read the most times in the log.
function mostReadBook(log) {
  const bookCounts = {}; // Initialize an empty object to keep track of book counts
  for (let entry of log) { // Loop through each entry in the log array
    if (!bookCounts[entry.book]) { // Check if the book is not already in the bookCounts object
      bookCounts[entry.book] = 1; // If not, initialize its count to 1
    } else {
      bookCounts[entry.book]++; // If it exists, increment its count by 1 using ++ operator
    }
  }

  let maxBook = null; // Initialize variables to track the book with the maximum count
  let maxCount = 0; // Initialize maxCount to zero to start comparison
  for (let book in bookCounts) { // Loop through each book in the bookCounts object
    if (bookCounts[book] > maxCount) { // If the current book's count is greater than maxCount
      maxBook = book; // Update maxBook to the current book
      maxCount = bookCounts[book]; // Update maxCount to the current book's count
    }
  }
  return maxBook; // Return the book that was read the most times after checking all counts
}
// One suggested improvement would be to handle ties in the most read book function, returning all books with the highest count instead of just one.

// Prints a summary of minutes read per day
// This function prints a summary of reading minutes for each day in the log.
function printDailySummary(log) {
  for (let entry of log) { // Loop through each entry in the log array
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // Print the day, minutes, and book
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); // Adding a new reading entry for Saturday
printDailySummary(readingLog); // Print the daily summary of reading log
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // Print the total reading minutes for the week
console.log("Most read book:", mostReadBook(readingLog)); // Print the most frequently read book
