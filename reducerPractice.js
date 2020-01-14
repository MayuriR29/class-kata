const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]

const getMapFromArray = data =>
  data.reduce((acc, item) => {
    console.log("acc", acc)
    console.log("item", item)
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});

console.log(getMapFromArray(pokemon))
