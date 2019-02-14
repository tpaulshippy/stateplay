import ApplicationState from 'applicationstate';

console.log("Array test");
console.log("------------");
ApplicationState.listen("items.0.color", (newVal, oldVal) => {
    console.log(oldVal, newVal);
});
ApplicationState.set("items", [{ name: "Paul" }]);
ApplicationState.set("items", [{ name: "Paul", color: "Green" }]);
ApplicationState.set("items", [{ name: "Paul", color: "Blue" }]);
ApplicationState.set("items.0", { name: "Paul", color: "Yellow" });
ApplicationState.set("items.0.color", "Red");
ApplicationState.undo("items.0.color")

console.log(ApplicationState.get("items.0.color"))

console.log("");
console.log("Object test");
console.log("------------");

ApplicationState.listen("item.color", (newVal, oldVal) => {
    console.log(oldVal, newVal);
});
ApplicationState.set("item", { name: "Paul" });
ApplicationState.set("item", { name: "Paul", color: "Green" });
ApplicationState.set("item", { name: "Paul", color: "Blue" });
ApplicationState.set("item.color", "Yellow");
ApplicationState.set("item.color", "Red");
ApplicationState.undo("item.color")

console.log(ApplicationState.get("item.color"))

/*
node -r esm index.js

Actual output:

Array test
------------
undefined 'Blue'
Blue Red
Green

Object test
------------
undefined 'Green'
undefined 'Blue'
Blue Yellow
Yellow Red
Green
*/

/*
Expected output:

Array test
------------
undefined Green
Green Blue
Blue Yellow
Yellow Red
Yellow

Object test
------------
undefined Green
Green Blue
Blue Yellow
Yellow Red
Yellow
*/