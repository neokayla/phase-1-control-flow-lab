function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber < 400) {
    result = "This one is on me!"
  }
  else if (someNumber < 2000) {
    result = 'That will be twenty bucks.'
  }
  else if (someNumber < 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
 
  return result
}

function ternaryCheckCity(city){
return (city === "NYC") ? 'Ok, sounds good.' : "No go.";

}

function switchOnCharmFromTip(tip){
  let answer
  switch(tip){
    case 'generous':
      answer = "Thank you so much.";
      break;
    case 'not as generous':
      answer = 'Thank you.';
      break;
    default:
      answer = 'Bye.'
  }
  return answer
}