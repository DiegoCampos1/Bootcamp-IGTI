const people = require("./download.json");

// console.log(people);

const nameEmailArray = people.results.map((person) => {
  return {
    name: person.name,
    email: person.email,
  };
});
console.log(nameEmailArray);
