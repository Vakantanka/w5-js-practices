function kulonbseg(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber - secondNumber);
    } else if (firstNumber < secondNumber) {
        console.log(secondNumber - firstNumber);
    } else {
        console.log("A két szám egyenlő.");
    }
}

kulonbseg(1234754, 56497);
