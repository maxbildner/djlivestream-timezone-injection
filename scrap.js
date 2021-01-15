// converts string to 24 hour string format "20:00:00"
// "1a"     =>  "1:00:00"
// "1p"     =>  "13:00:00"
// "1:00a"  =>  "1:00:00"
// "2:30a"  =>  "2:30:00"
// "11:00a" =>  "11:00:00"
// "12:00p" =>  "12:00:00"
// "1:00p"  =>  "13:00:00"
// "2:30p"  =>  "14:30:00"
// "12:00a" =>  "24:00:00"
function convertTo24HRFormat(time12HR) {
  let time24HR;

  time12HR = time12HR.split(":");
  // time12HR == ["10a"]   or ["10", "30a"]

  let isAM = time12HR[time12HR.length - 1].includes("a");
  // isAM == true

  // remove "a" or "p" in hours
  let hours = isAM ? removeChar(time12HR[0], "a") : removeChar(time12HR[0], "p");
  // hours == "10"

  let minutes = time12HR[1] ? time12HR[1].slice(0, time12HR[1].length - 1) : "00";
  // minutes == "30"    or    "00"

  // IF 12AM
  if (isAM && hours === "12") {
    hours = 24;
  
    // IF PM AND NOT 12
  } else if (!isAM && hours !== "12") {
    hours = 12 + Number(hours);
  }

  time24HR = `${hours}:${minutes}:00`;

  return time24HR;
}


// ("10a", "a")  =>  "10"
// ("1a", "a")   =>  "1"
// ("1p", "p")   =>  "1"
// ("1pm", "m")  =>  "1p"
function removeChar(str, char) {
  return str.split(char).join("");
}


// console.log(convertTo24HRFormat("1a"))
// console.log(convertTo24HRFormat("1p"))
// console.log(convertTo24HRFormat("12p"))
// console.log(convertTo24HRFormat("12a"))
// console.log(convertTo24HRFormat("1:00a"))
// console.log(convertTo24HRFormat("2:30a"))
// console.log(convertTo24HRFormat("11:00a"))
// console.log(convertTo24HRFormat("12:00p"))
// console.log(convertTo24HRFormat("1:00p"))
// console.log(convertTo24HRFormat("2:30p"))
// console.log(convertTo24HRFormat("12:00a"))

console.log(convertTo24HRFormat("1a") === "1:00:00")
console.log(convertTo24HRFormat("1p") === "13:00:00")
console.log(convertTo24HRFormat("12p") === "12:00:00")
console.log(convertTo24HRFormat("12a") === "24:00:00")
console.log(convertTo24HRFormat("1:00a") === "1:00:00")
console.log(convertTo24HRFormat("2:30a") === "2:30:00")
console.log(convertTo24HRFormat("11:00a") === "11:00:00")
console.log(convertTo24HRFormat("12:00p") === "12:00:00")
console.log(convertTo24HRFormat("1:00p") === "13:00:00")
console.log(convertTo24HRFormat("2:30p") === "14:30:00")
console.log(convertTo24HRFormat("12:00a") === "24:00:00")