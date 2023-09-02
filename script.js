const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  return fruit.filter((fruitName) =>
    fruitName.toLowerCase().includes(str.toLowerCase())
  );
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  if (inputVal !== "") {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.innerText = result;
      suggestions.append(li);
    });
  } else {
    suggestions.innerHTML = "";
  }
}

function useSuggestion(e) {
  const suggestion = e.target.innerText;
  input.value = suggestion;
  suggestions.innerHTML = "";
}

suggestions.addEventListener("mouseover", (e) => {
  e.target.classList.add("highlight");
});
suggestions.addEventListener("mouseout", () => {
  const highlightedItem = suggestions.querySelector(".highlight");
  if (highlightedItem) {
    highlightedItem.classList.remove("highlight");
  }
});
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
