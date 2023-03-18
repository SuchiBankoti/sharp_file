const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/third.txt",
  `here is result one plus two${firstFile} and ${secondFile}`,
  { flag: "a" }
);

const third = readFileSync("./content/third.txt", "utf-8");
console.log(third);
