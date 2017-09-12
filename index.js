function takeANumber(array, name){
  if (array.length === 0){
    array.push(name);
  }
  else{
    array.push(name);
  }
  return "Welcome, " + name + ". You are number " + (array.length) + " in line.";
}

function nowServing(array){
  var customer;
  if (array.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    customer = "Currently serving " + array[0] + ".";
    array = array.shift();
    return customer;
  }
}
