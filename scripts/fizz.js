function fizzBuzz(number) {

    let dividerThree = number%3;
    let dividerFive = number%5;

    if (dividerThree == 0 && dividerFive == 0) {
        return "FizzBuzz";
    } else if (dividerThree == 0 && dividerFive !=0) {
        return "Fizz";
    } else if (dividerThree != 0 && dividerFive ==0) {
        return "Buzz";
    } else {
        return number;
    }
};