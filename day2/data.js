let challenge ="30 Days Of JavaScript";
// const new ="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let sentence ="You cannot end a sentence with because because because is a conjunction"
const newstr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let str1 = "30 Days of";
let str2 = "JavaScript";

 
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,3));
console.log(challenge.substring(2,21));
console.log(challenge.includes("Script"));
console.log(challenge.split(' '));
console.log(challenge.split(', '));

console.log(newstr);
console.log(newstr.split(' '));

console.log(challenge.replace('JavaScript','python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(15));
console.log(challenge.indexOf('a'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(challenge.trim())
console.log(challenge.startsWith(30));
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi));
// let challenge1="30 Days of' and 'JavaScript"
// console.log(challenge.concat('30 Days Of JavaScript'));

let result = str1.concat(" ", str2);
console.log(result);
console.log(challenge.repeat(2));

// level -2

let quote =`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`

console.log(quote);

const quote1 ="Love is not patronizing and charity isn't about pity, it is about love.\ Charity and love are the same -- with\ charity you give love,\ so don't just give money but reach out your hand instead."

console.log(quote1)


let str = '10';
let num = parseInt(10);


if (Number(str) !== num) {
    str = num;  
}

console.log(typeof(str));  


let floatValue = parseFloat('9.8');


if (floatValue !== num) {


    floatValue = num;  
}

console.log(typeof(floatValue));  

const nums = Math.floor(Math.random () * 101) 
console.log(nums)

const val = Math.floor(Math.random () * (100-50+1)+50) 
console.log(val)

const no = Math.floor(Math.random () * 256) 
console.log(no)

const word ="JavaScript"

const store = Math.floor(Math.random()*word.length);

console.log(word[store]);

// Loop to generate each row
for (let i = 1; i <= 5; i++) {
    let row = ''; // Initialize an empty string to build each row
    
    // Loop to generate the columns (5 columns per row)
    for (let j = 0; j < 5; j++) {
        // Calculate the value based on row (i) and column (j) index
        row += Math.pow(i, j) + ' '; // Math.pow(i, j) computes i raised to the power of j
    }

    // Print the row and remove trailing space using trim()
    console.log(row.trim());  // Remove any extra spaces at the end of each row
}

const sentence1 = 'You cannot end a sentence with because because because is a conjunction';


const phrase = sentence.substring(31, 54);

console.log(phrase);  

const sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';


const loveCount = (sentence2.match(/\blove\b/gi) || []).length;

console.log(loveCount); 

const hello ="'You cannot end a sentence with because because because is a conjunction"

const value = hello.match(/because/gi);
console.log(value);

const sentencee = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanedSentence = sentencee
  .replace(/[^\w\s]/g, '')  
  .toLowerCase();  


const words = cleanedSentence.split(/\s+/);  


const wordFrequency = words.reduce((freq, word) => {
  if (word) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
}, {});


let mostFrequentWord = '';
let maxCount = 0;
for (const word in wordFrequency) {
  if (wordFrequency[word] > maxCount) {
    mostFrequentWord = word;
    maxCount = wordFrequency[word];
  }
}

console.log(`The most frequent word is: '${mostFrequentWord}' with a count of ${maxCount}`);

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';


const numbers = text.match(/\d+/g);


const monthlySalary = parseInt(numbers[0]);  // 5000
const annualBonus = parseInt(numbers[1]);   // 10000
const monthlyCoursesIncome = parseInt(numbers[2]); // 15000


const totalAnnualIncome = (monthlySalary + monthlyCoursesIncome) * 12 + annualBonus;

console.log(`Total annual income: €${totalAnnualIncome}`);
