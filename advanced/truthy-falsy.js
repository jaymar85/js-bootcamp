const products = [];
const product = products[0];

// Truthy & Falsy refer to conditional statements
// Truthy & Falsy is great for making code shorthanded
// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Everything not listed as falsy value will be truthy such as empty []'s and {}'s

if (product !== undefined) {
  console.log("Product found");
} else {
  console.log("Product not found");
}
