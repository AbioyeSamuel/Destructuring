const animals = [
  { name: "cat", sound: "meow", feedingRequirment: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
      console.log(animal.feedingRequirement);
    }
  ];
}
export { useAnimals };
export default animals;
