function showMessage(message: string): void{
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
showMessage('Привіт!'); 

const sum = calc(5, 10); 
console.log('Сума:', sum);
customError();