// Silly example of a Node.js application that reads an environment variable and greets the user (For testing github actions)
const greet = (name) => {
  return `Hello, ${name}`;
};

// Read the NAME environment variable (The value shuld be "World" for the test to pass)
const name = process.env.NAME;

if (!name) {
  throw new Error("The NAME environment variable is missing");
}

// Greet the user
const message = greet(name);

console.log(message);

// Silly test to ensure the greeting is correct
if (message !== "Hello, World") {
  throw new Error("The greeting is not correct");
}
// New comment!