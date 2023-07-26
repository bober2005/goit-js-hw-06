const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});