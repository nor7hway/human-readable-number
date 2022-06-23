
const one_to_twenty = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = [
    "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
];

const thousands = [
    "", "thousand", "million", "billion"
];


const helper = (number) => {
    if (number === 0) {
        return "";
    } else if (number < 20){
        return one_to_twenty[number] + " ";
    } else if (number < 100) {
        return tens[Math.floor(number / 10)] + " " + helper(number % 10);
    } else {
        return one_to_twenty[Math.floor(number / 100)] + " hundred " + helper(number % 100);
    }
};


module.exports = function toReadable (number) {
  if (number === 0) {
    return "zero";
  }
  res = "";

  for (let i = 0; i < thousands.length; i++) {
    if (number % 1000 != 0) {
        res = helper(number % 1000) + thousands[i] + " " + res;
    }
    number = Math.floor(number / 1000);
  }

  return res.trim();
}
