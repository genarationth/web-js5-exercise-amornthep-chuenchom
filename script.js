console.log("Exercise #1");

let waitingList = ["Sofia", "David", "Juan"];
waitingList.push("Sara");
waitingList.push("Augustin");

let tmpList = waitingList.splice(0, 2);
tmpList.push("Elena");

waitingList = tmpList.concat(waitingList);

console.log(waitingList);

console.log("Exercise #2");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

console.log("Exercise #3");
console.log("#3.1");
let xValue = prompt("Enter X Value: ");

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

console.log("#3.2");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}
console.log("#3.3");
const printThroughN = (n) => {
  //   let n = prompt("Enter n: ");
  let i = 1;
  let textResult = "";
  while (i <= n) {
    textResult += `[${i}] `;
    i++;
  }
  console.log(textResult);
};
printThroughN(prompt("Enter n: "));

console.log("#3.4");
const sumOfNPositive = (n) => {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
};
sumOfNPositive(prompt("Enter n: "));
