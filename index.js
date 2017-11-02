var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var position = katzDeli.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing() {
  if (katzDeli.length > 0) {
    var name = katzDeli[0];
    katzDeli.shift();
    return `Now serving ${name}.`;
      }
  else {
    return "There is nobody waiting to be served!"
  }
}
