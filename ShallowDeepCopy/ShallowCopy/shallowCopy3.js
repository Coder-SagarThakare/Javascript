// something went wrong here 
// bcoz of Array.from()
// i think this is not shallow copy

let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
// let ingredients_list_copy = ingredients_list;

console.log(JSON.stringify(ingredients_list_copy));


ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]

console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]


ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]