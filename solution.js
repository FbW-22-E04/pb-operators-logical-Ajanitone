const isDogBetter = true;
const isCatBetter = false;

console.log("01a", isDogBetter && isCatBetter);
console.log("01b", isDogBetter || isCatBetter);
console.log("01c", !(isDogBetter && isCatBetter));

console.log(
  "------------------------------------------------------------------"
);

const atoms = 100;
const sandGrains = 1000;
const starsInSky = 10000;
console.log("03a", atoms > starsInSky && atoms > sandGrains);

console.log("03b", atoms !== sandGrains);

console.log("03c", starsInSky < sandGrains || starsInSky > atoms);

console.log("03d", atoms == starsInSky || atoms !== sandGrains);

console.log("03e", atoms >= 10 || sandGrains <= 10);

console.log("03f", atoms * starsInSky < 100 || atoms * sandGrains > 100);
