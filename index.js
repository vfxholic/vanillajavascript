const nicoInfo = {
  name: "nicolas",
  age: 27,
  gender: "male",
  isHandsome: true,
  favmovie: ["along the gods", "losiha", "oldboy"],
  favfood: [
    { name: "kimchi", fatty: "false" },
    { name: "cheese burger", fatty: "ture" }
  ]
};

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);
console.log(nicoInfo.favmovie);
console.log(nicoInfo.favfood[0].name);
