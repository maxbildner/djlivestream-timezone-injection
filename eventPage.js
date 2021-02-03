// Script to change time on individual event

// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% of browsers (2019)
  // ex. timeZone == "America/New_York"
  // ex. timeZone == "America/Los_Angeles"

  // Wait 2 seconds for data to load, then run script
  setTimeout(() => {

    // KEEP ORIGINAL NOTE- Don't modify times
    // let newNote = "Note: all times in flyer are in " + timeZone;

    // grab note html element
    // let note = document.getElementsByClassName("sqs-block-content")[0].children[1];
    // note == <p class="" style="white-space:pre-wrap;"><em>Note: all times in flyer are PST (GMT-8)</em></p>

    // if note is not undefined (exists), update note inner text to display users time
    // if (note) note.innerText = newNote;

    // grab event times (lefthand sidebar)
    let times = document.getElementsByClassName("event-time-12hr");
    // times == [time.event-time-12hr, time.event-time-12hr]

    let isMultiDayEvent = times.length > 1;
    let startTime;
    let endTime;
    let startTimeTxt;
    let endTimeTxt;
    let newStartTime;
    let newEndTime;
    debugger
    if (isMultiDayEvent) {
      startTime = times[0];
      endTime = times[1];
      // startTime == <time class="event-time-12hr" datetime="2020-12-26">1:30 PM</time>
      // endTime == <time class="event-time-12hr" datetime="2020-12-26">2:30 PM</time>
      debugger
      // NOT a multi day event
    } else {
      debugger
      startTime = times[0].children[0];
      endTime = times[0].children[2];
      // startTime == <time class="event-time-12hr" datetime="2020-12-26">1:30 PM</time>
      // endTime == <time class="event-time-12hr" datetime="2020-12-26">2:30 PM</time>
      debugger
    }

    startTimeTxt = startTime.innerText;
    endTimeTxt = endTime.innerText;

    newStartTime = formatTime3(startTimeTxt);       // "1:30p"
    newEndTime = formatTime3(endTimeTxt);           // "2:30p"

    // convert start/end EST times to users time zone
    newStartTime = formatAndConvertTZ2(newStartTime) + "m";
    newEndTime = formatAndConvertTZ2(newEndTime) + "m";

    // update DOM with new times
    startTime.innerText = newStartTime;
    endTime.innerText = newEndTime;

  }, 2000);



  // HELPER FUNCTIONS
  // ("10a", "a")  =>  "10"
  // ("1a", "a")   =>  "1"
  // ("1p", "p")   =>  "1"
  // ("1pm", "m")  =>  "1p"
  function removeChar(str, char) {
    return str.split(char).join("");
  }


  // "1:00 AM" => "1:00a" 
  // "3:05 AM" => "3:05a"
  function formatTime3(string) {
    let newStr = "";

    let strArr = string.split(" ");
    // strArr = ["1:00", "AM"]

    newStr += strArr[0];

    let isAM = strArr[1][0] === "A";

    if (isAM) {
      newStr += "a";

    } else {
      newStr += "p";
    }

    return newStr;
  }


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


  // "2:30p"    =>    "11:30a"
  function formatAndConvertTZ2(est, belowCal = false) {
    // est == "10a"   or "2:30p"

    // convert est string to 24 hour string format ("20:00:00")
    est = convertTo24HRFormat(est);

    // convert EST time to user's time
    let userTime = convertTZ(`2020/12/3 ${est} GMT-0500`, timeZone).toLocaleString();
    // userTime == "11/3/2020, 8:00:00 AM"

    let isAM = (userTime.split(" ")[2] === "AM");
    // isAM == true

    // grab hh:mm:ss part only
    userTime = userTime.split(" ")[1].split(":");
    // userTime == ["10", "00", "00"]

    // remove seconds
    userTime = userTime.slice(0, userTime.length - 1).join(":");
    // userTime == "8:00"   or   "10:00"    or    "10:30" (if on mouse hover and long time format)

    let hasMinutes = userTime.split(":")[1] !== "00";
    // hasMinutes == false

    if (!hasMinutes && !belowCal) {

      // remove extra zeros "00"
      userTime = userTime.split(":")[0];
      // userTime == "8"

    }

    userTime = userTime + ((isAM) ? 'a' : 'p');
    // userTime == "8a"
    return userTime;
  }


  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  }
});