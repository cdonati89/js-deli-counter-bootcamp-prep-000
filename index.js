var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowService() {
  var position = katzDeliLine.indexOf(name) + 1;
  if (katzDeliLine.length > 0) {
    return `Now serving number ${position}`
  }
}