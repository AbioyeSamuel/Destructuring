// import animals, { useAnimals } from "./data";

// console.log(animals);

// const [cat, dog] = animals;
// console.log(cat);
// console.log(dog);

// const { name: catName, sound: catSound } = cat;
// console.log(catSound);
// console.log(catName);

// const { name = "fluffy", sound = "purr" } = cat; //helps to change the value of key in array objects

//Nested object
// const {
//   feedingRequirement: { food, water }
// } = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// destructuring cars array
const [honda, tesla] = cars;

// destructuring the speedStat, topSpeed, coloursByPopularity objects

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

//The TopColour has to be in [] because, the object to hold it was not specified in the data.js

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
