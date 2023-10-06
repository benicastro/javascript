// JavaScript Fundamentals - Part 1

// Values and Variables
let country = "Philippines";
let continent = "Asia";
let population = 117337368;

console.log(country, continent, population);

// Data Types
let isIsland = true;
let language;

console.log(isIsland, population, country, language);

// let, const, and var
language = "Tagalog";
/*
Cannot redeclare block-scoped variable 'country'.
*/

// Basic Operators
let halfPopulation = population / 2;
population += 1;
console.log(population);
let isPopulationMore = population > 6000000;
let isAveragePopulationLess = population < 33000000;
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// Strings and Template Literals
console.log(description);

//
