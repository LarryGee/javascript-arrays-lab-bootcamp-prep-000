const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kitens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.shift(name);
  return kittens;
}