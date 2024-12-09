const firs_tname="mohamed";
const last_name ="Arish";
const country="India";
const city ="chennai";
const age=22;
const isMarried=true;
const year=2024;
var emp;
const address="";
const salary=null;

console.log(typeof(firs_tname));
console.log(typeof(last_name));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//check type of '10' and 10
console.log('10'==10);
console.log('10' === 10);

//parseInt
console.log(parseInt(num=9.5)==10);
console.log(parseInt(num=9.5)===10);
// bool
console.log(isMarried);
console.log(!isMarried);

// truthy
console.log(typeof(age));
console.log(typeof(country));
console.log(typeof(isMarried));

// falsy
console.log(emp);
console.log(salary);
console.log(!isMarried);

// comparison exp

console.log(4>3)                
console.log(4>=3)                       
console.log(4<=3)
console.log(4==4)
console.log(4 !=4)
console.log(4!='4')
console.log(4 == 4)
console.log(4 === 4)

// python and jargon
const lang1="python";
const lang2="jargon";
console.log(lang1.length);
console.log(lang2.length);

console.log(lang1 == lang2)

// expression
console.log(4 > 3 && 10 < 12)

console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log("dragon".includes("on"));  
console.log("python".includes("on"));  

const current_dates = new Date();

console.log(current_dates);
console.log(current_dates.getMonth());
console.log(current_dates.getDate());
console.log(current_dates.getDay());
console.log(current_dates.getMonth());
console.log(current_dates.getHours());
console.log(current_dates.getMinutes());
// console.log(current_dates.getMilliseconds());
const milli= Date.now()
console.log(milli)

// level -2

const base = prompt("Enter base:");
const height = prompt("Enter Height:");

const area = (0.5*base*height);
console.log(area)
















