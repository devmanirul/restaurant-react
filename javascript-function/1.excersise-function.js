const city = [
  { id: 1, name: "Mymensingh", cat: "good" },
  { id: 2, name: "Dhaka", cat: "bad" },
  { id: 3, name: "Narayengang", cat: "fine" },
  { id: 4, name: "Gazipur", cat: "good" },
  { id: 5, name: "Sharper", cat: "good" },
];

const goodCity = city.filter((item) => item.cat === "good");
console.log(goodCity);
