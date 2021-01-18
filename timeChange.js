// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% of browsers (2019)
  // ex. timeZone == "America/New_York"
  // ex. timeZone == "America/Los_Angeles"

  let title = "all times in calendar below are in " + timeZone;

  // Wait 2 seconds for calendar to load, then run script
  setTimeout(() => {

    // grab event details title div block
    let eventDetailsTitle = document.getElementById("block-f8bcca40e6962c1021ba");

    // replace event details title with dynamic time zone text
    eventDetailsTitle.childNodes[0].firstChild.firstChild.innerHTML = title;


    // *************************************************************************
    // REPLACE CALENDAR TIMES (white text on black background squares)

    // grab all span elements in calendar that have times (small time blocks)
    let times = document.getElementsByClassName("item-time item-time--12hr");
    // times == [<span>, <span>, ... ]
    // times[1] == <span class="item-time item-time--12hr">8p&nbsp;</span>

    // loop through EST times
    for (let i = 0; i < times.length; i++) {
      let time = times[i];
      // time == <span class="item-time item-time--12hr">8p&nbsp;</span>
      // time == <span class="item-time item-time--12hr">10a&nbsp;</span>
      // time == <span class="item-time item-time--12hr">2:30p&nbsp;</span>

      // grab EST time
      let estTime = time.innerHTML.split("&")[0];
      // estTime == "10a"

      // convert EST time to users timezone
      let newTime = formatAndConvertTZ(estTime);
      // newTime == "7a"

      // replace inner span text with new time
      time.innerHTML = `${newTime}&nbsp`;
      // time == <span class="item-time item-time--12hr">7a&nbsp;</span>
    }


    // *************************************************************************
    // REPLACE CALENDAR TIMES (black text on white squares on mouse hover)

    // grab all li elements in calendar (big time blocks)
    let bigSquareTimes = document.getElementsByClassName("flyoutitem");
    // bigSquareTimes = [<li>, <li>, ...]

    // loop through EST bigSquareTimes
    for (let i = 0; i < bigSquareTimes.length; i++) {
      let time = bigSquareTimes[i].children[1].innerText;
      // time == "10:00am – 4:00pm"   or       "Fri, Dec 4, 7:00pm – Sun, Dec 6, 11:55pm"

      // convert times to "10a" or "10:30a" format
      // grab first time and remove " " from ends
      let startTime = time.split("–")[0].trim();                              // "–" DOES NOT == regular dash "-"
      // startTime == "10:00am"    or   "Fri, Dec 4, 7:00pm "

      // if time is in long format (ex. "Fri, Dec 4, 7:00pm ") 
      if (startTime.length > 8) {

        // grab only time at end (ex. "7:00pm")
        startTime = startTime.split(" ");
        startTime = startTime[startTime.length - 1];

      }

      // remove "m"
      // startTime = removeM(startTime);
      startTime = removeChar(startTime, "m");

      // grab ending time and remove " " from ends
      let endTime = time.split("–")[1].trim();                                // "–" DOES NOT == regular dash "-"
      // endTime == "4:00pm"    or    "Fri, Jan 1, 2:30pm"

      // if time is in long format (ex. " Sun, Dec 6, 11:55pm")
      if (endTime.length > 8) {

        // grab only time at end (ex. "11:55pm")
        endTime = endTime.split(" ");
        endTime = endTime[endTime.length - 1];
        // endTime == "11:55pm"
      }

      // remove "m"
      endTime = removeChar(endTime, "m");
      // endTime == "11:55p"

      // convert EST times to users time zone
      let newStartTime = formatAndConvertTZ2(startTime);
      // newStartTime == "1p"  or   "1:30p"   (will be "1p" if no minutes ex. 1:30)

      let newEndTime = formatAndConvertTZ2(endTime);

      let newTime = newStartTime + " – " + newEndTime;

      // replace time with users time
      bigSquareTimes[i].children[1].innerHTML = newTime;
    }


    // *************************************************************************
    // REPLACE EVENT DETAILS TITLE (below calendar)

    // replace event details title with dynamic time zone text
    // grab event details title div block
    let eventDetailsTitle2 = document.getElementById("block-3eaefd1791399d35520b").children[0];

    // replace event details title with dynamic time zone text
    eventDetailsTitle2.children[1].children[0].innerHTML = title;


    // *************************************************************************
    // REPLACE TIMES BELOW CALENDAR (posts)

    // grab times below calendar
    let timesBelowCalendar = document.getElementsByClassName("event-time-12hr");
    // timesBelowCalendar == [ <span>  <time start>  <span> - </span>  <time end>  </span>, ... ]

    // loop through times
    for (let i = 0; i < timesBelowCalendar.length; i++) {
      let time = timesBelowCalendar[i].children;
      // time == [ <time class="event-time-12hr-start" datetime="2021-01-12">1:00 AM</time>, <time>, <time> ]

      // if time not listed on event, skip this loop iteration so we don't error out
      if (time.length === 0) continue;

      let startTime = time[0];
      // startTime == <time class="event-time-12hr-start" datetime="2021-01-12">1:00 AM</time>

      let startTimeTxt = startTime.innerHTML;
      // startTime == "1:00 AM"

      startTimeTxt = formatTime3(startTimeTxt, true);
      // startTimeTxt == "1:00p"

      // convert EST to users time zone
      let newStartTime = formatAndConvertTZ2(startTimeTxt, true);

      // replace old time with new time
      startTime.innerHTML = newStartTime;

      let endTime = time[2];
      // endTime == <time class="event-time-12hr-end" datetime="2021-01-12">3:05 AM</time>

      let endTimeTxt = endTime.innerHTML;

      endTimeTxt = formatTime3(endTimeTxt);

      let newEndTime = formatAndConvertTZ2(endTimeTxt, true);

      endTime.innerHTML = newEndTime;

    }
  }, 2000);
  // END OF CALLBACK ***********************************************************



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
    let hours;
    let minutes;

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



  function formatAndConvertTZ(est) {
    // est == "10a"   or "2:30p"
    let hours;
    let minutes;

    // convert est string to 24 hour string format ("20:00:00")
    // if AM time
    est = convertTo24HRFormat(est);

    // userTIme == "Tue Nov 03 2020 08:00:00 GMT-0500 (Eastern Standard Time)"
    let userTime = convertTZ(`2020/12/3 ${est} GMT-0500`, timeZone).toLocaleString();
    // userTime == "11/3/2020, 8:00:00 AM"

    let isAM = (userTime.split(" ")[2] === "AM");
    // isAM == true

    userTime = userTime.split(" ")[1].slice(0, 4);
    // userTime == "8:00"

    let hasMinutes = Number(userTime.slice(2)) > 0;
    // hasMinutes == false

    if (!hasMinutes) {

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

  // TO DO:
  // 1) Fix times for calendar on hover events longer than one day
  // 2) write code to change times on individual event page
  // 3) Refactor format time zone functions- consolidate into 1 function
  // 4) Format times below calendar ("PM" and "AM")
  // 5) Test on various browsers / devices

  // DONE:
  // - Test Code for calendar times / times below calendar
  // - fix bug- times below calendar not coverting to users time
  // - fix formatting- day / month getting cut off on calender events mouse hover for long times
  // - Fix bug- minutes getting cut off calendar events mouse hover for long times
  // - change times in calendar 
  // - change times in calendar (on mouse hover)
  // - change times below calendar
});