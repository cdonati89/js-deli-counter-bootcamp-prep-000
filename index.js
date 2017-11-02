var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var position = katzDeli.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
      }
  else {
    var name = katzDeli[0];
    katzDeli.shift();
    return(`Currently serving ${name}.`);
  }
}
