// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//1 For each Basics

provinces.forEach((province) => {
  console.log(province);
});

names.forEach((name) => {
  console.log(name);
});
//2 Upper Case

const newProvinces = provinces.map((province) => {
  return province.toUpperCase();
});

console.log(newProvinces);

//3 Name Lenght....

const lenghts = names.map((name) => {
  return name.length;
});
console.log(lenghts);

// 4 Sorting....
const odered = provinces.sort();
console.log(odered);
// 5 Filtering

//Filter
const removed = provinces.filter((province) => {
  return !province.includes("Cape");
});
console.log(removed.length);

//6
const boolArray = names.map((name) => {
  return name;
});
boolArray.forEach((name) => {
  const hasS = name.split("");
  hasS.some((letter) => {
    return letter === "s";
  });
});
//7 object//7. Creating Object Mapping
const nameProvinceObject = names.reduce((acc, currentName, currentIndex) => {
  acc[currentName] = provinces[currentIndex]; //creating the object with key "currentName" and value "provinces[currentIndex]"
  return acc;
}, {}); //"{}" starts off as empty object
console.log(nameProvinceObject);

//////////////////////ADVANCED//////////////////////////////////////////////////

//1
console.log(
  products.map((product) => {
    return product.product;
  })
);

///2

console.log(products.filter((product) => product.product.length <= 5));

console.log(
  products.reduce((acc, currentProduct) => {
    return acc + currentProduct.product;
  }, "")
);

console.log(
  (function () {
    const findExtremes = (products) => {
      const highestPriceItem = products.reduce((highest, current) => {
        return highest.price > current.price ? highest : current;
      });

      // Find the lowest-priced item
      const lowestPriceItem = products.reduce((lowest, current) => {
        return lowest.price < current.price ? lowest : current;
      });

      return `Highest: ${highestPriceItem.product}. Lowest: ${lowestPriceItem.product}.`;
    };

    return findExtremes(products);
  })()
);

console.log(
  (function () {
    const transformedProducts = Object.entries(products).reduce(
      (acc, [name, cost]) => {
        acc.push({ name, cost });
        return acc;
      },
      []
    );

    return transformedProducts;
  })()
);
