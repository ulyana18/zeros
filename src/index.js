module.exports = function zeros(expression) {
  let number='';
  let symbol;
  let five=0;
  let two=0;

  for(let i=0; i<expression.length; i++) {
    symbol=expression[i];
    switch(symbol) {
      case '*': 
        number='';
        break;
      case '!':
        if(expression[i+1]==='!') {
          for(let i=number; i>1; i-=2) {
            let number = i;
            calcZeros(+number);
          }
          i++;
        }
        else
          for(let i=number; i>1; i--) {
            let number = i;
            calcZeros(+number);
          }
          break;
      default: 
        number+=symbol;
        break;
    }
  }

  if(five>two) return two;
  else return five;


  function calcZeros(number) {
      while(number%5 == 0) {
        number /= 5;
        five++;
      }
      while(number%2 == 0) {
        number /= 2;
        two++;
      }
    
  }
    //return result;
}