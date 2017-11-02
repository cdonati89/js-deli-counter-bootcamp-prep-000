var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing() {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Now serving ${name}.`;
      }
  else {
    return "There is nobody waiting to be served!"
  }
}
