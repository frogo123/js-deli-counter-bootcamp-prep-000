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
  if (array.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + array[0] + ".";
  }
}
