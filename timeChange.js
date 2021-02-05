// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% of browsers (2019)
  // ex. timeZone == "America/New_York"
  // ex. timeZone == "America/Los_Angeles"

  let title = "times in " + timeZone + " unless otherwise noted";

  // Wait 2 seconds for calendar to load, then run script
  setTimeout(() => {

    let onGuidePage = document.getElementById("block-adca8940b5d4e8b50a06") !== null;

    // if we're on the guide page (not an individual event page)
    if (onGuidePage) {

      // grab event details title div block
      let eventDetailsTitle = document.getElementById("block-f8bcca40e6962c1021ba");

      // replace event details title with dynamic time zone text
      eventDetailsTitle.childNodes[0].firstChild.innerText = title;


      // *************************************************************************
      // REPLACE CALENDAR TIMES 1 (white text on black background squares)

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
      // REPLACE CALENDAR TIMES 2 (black text on white squares on mouse hover)

      // grab all li elements in calendar (big time blocks)
      let bigSquareTimes = document.getElementsByClassName("flyoutitem");
      // bigSquareTimes = [<li>, <li>, ...]

      // loop through EST bigSquareTimes
      for (let i = 0; i < bigSquareTimes.length; i++) {
        let time = bigSquareTimes[i].children[1].innerText;
        // time == "10:00am – 4:00pm"   or       "Fri, Dec 4, 7:00pm – Sun, Dec 6, 11:55pm"

        let timeIsMultiday = time.length > 17;

        // grab first time and remove " " from ends
        let startTime = time.split("–")[0].trim();                              // "–" DOES NOT == regular dash "-"
        // startTime == "10:00am"    or   "Fri, Dec 4, 7:00pm "

        // grab ending time and remove " " from ends
        let endTime = time.split("–")[1].trim();                                // "–" DOES NOT == regular dash "-"
        // endTime == "4:00pm"    or    "Fri, Jan 1, 2:30pm"

        // if time is in long format (ex. "Fri, Dec 4, 7:00pm ") 
        if (timeIsMultiday) {

          // grab Day, Month, Date, Start Time
          startTime = startTime.split(" ");
          var startDay = removeChar(startTime[0], ",");   // "Thu"
          var startMonth = startTime[1];                  // "Feb"
          var startDate = removeChar(startTime[2], ",");  // "4"
          startTime = startTime[startTime.length - 1];    // "7:30pm"

          // grab Day, Month, Date, End Time
          endTime = endTime.split(" ");
          var endDay = removeChar(endTime[0], ",");     // "Tue"
          var endMonth = endTime[1];                    // "Feb"
          var endDate = removeChar(endTime[2], ",");    // "9"
          endTime = endTime[endTime.length - 1];        // "2:30am"
        }

        // remove "m"
        startTime = removeChar(startTime, "m");
        endTime = removeChar(endTime, "m");
        // endTime == "11:55p"

        // convert EST times to users time zone
        let newStartTime = formatAndConvertTZ(startTime);
        // newStartTime == "1p"  or   "1:30p"   (will be "1p" if no minutes ex. 1:30)

        let newEndTime = formatAndConvertTZ(endTime);

        let newTime;
        if (timeIsMultiday) {
          newTime = `${startDay}, ${startMonth} ${startDate}, ${newStartTime}m – ${endDay}, ${endMonth} ${endDate}, ${newEndTime}m`;

        } else {
          newTime = `${newStartTime}m – ${newEndTime}m`;
        }

        // replace time with users time
        bigSquareTimes[i].children[1].innerHTML = newTime;
      }


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

        startTimeTxt = removeCharAndSpace(startTimeTxt, true);
        // startTimeTxt == "1:00p"

        // convert EST to users time zone
        let newStartTime = formatAndConvertTZ(startTimeTxt, true) + "m";

        // replace old time with new time
        startTime.innerHTML = newStartTime;

        let endTime = time[2];
        // endTime == <time class="event-time-12hr-end" datetime="2021-01-12">3:05 AM</time>

        let endTimeTxt = endTime.innerHTML;

        endTimeTxt = removeCharAndSpace(endTimeTxt);

        let newEndTime = formatAndConvertTZ(endTimeTxt, true) + "m";

        endTime.innerHTML = newEndTime;

      }


      // *************************************************************************
      // IF WE ARE ON INDIVIDUAL EVENT PAGE
    } else {

      // KEEP ORIGINAL NOTE TIME
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

      if (isMultiDayEvent) {
        startTime = times[0];
        endTime = times[1];
        // startTime == <time class="event-time-12hr" datetime="2020-12-26">1:30 PM</time>
        // endTime == <time class="event-time-12hr" datetime="2020-12-26">2:30 PM</time>

        // NOT a multi day event
      } else {

        startTime = times[0].children[0];
        endTime = times[0].children[2];
        // startTime == <time class="event-time-12hr" datetime="2020-12-26">1:30 PM</time>
        // endTime == <time class="event-time-12hr" datetime="2020-12-26">2:30 PM</time>
      }

      startTimeTxt = startTime.innerText;
      endTimeTxt = endTime.innerText;

      newStartTime = removeCharAndSpace(startTimeTxt);       // "1:30p"
      newEndTime = removeCharAndSpace(endTimeTxt);           // "2:30p"

      // convert start/end EST times to users time zone
      newStartTime = formatAndConvertTZ(newStartTime) + "m";
      newEndTime = formatAndConvertTZ(newEndTime) + "m";

      // update DOM with new times
      startTime.innerText = newStartTime;
      endTime.innerText = newEndTime;
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
  function removeCharAndSpace(string) {

    string = string.split(" ").join("").toLowerCase();
    // string = "1:00am"

    return removeChar(string, "m");
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


  function formatAndConvertTZ(est, belowCal = false) {
    // est == "10a"   or "2:30p"

    // convert est string to 24 hour string format ("20:00:00")
    est = convertTo24HRFormat(est);
    // est == "15:00:00"

    // userTime == "Tue Nov 03 2020 08:00:00 GMT-0500 (Eastern Standard Time)"
    let userTime = convertTZ(`2020/12/3 ${est} GMT-0500`, timeZone).toLocaleString();
    // userTime == "11/3/2020, 8:00:00 AM"

    let isAM = (userTime.split(" ")[2] === "AM");
    // isAM == true

    // grab hh:mm:ss part only
    userTime = userTime.split(" ")[1].split(":");
    // userTime == ["12", "00", "00"]

    // remove seconds
    userTime = userTime.slice(0, userTime.length - 1).join(":");
    // userTime == "8:00"   or   "10:00"    or    "10:30" (if on mouse hover and long time format)

    let hasMinutes = userTime.split(":")[1] !== "00";
    // hasMinutes == false

    // remove minutes (if none) only if time is on calendar (not below cal)
    if (!hasMinutes && !belowCal) {

      // remove extra zeros "00" (if any)
      userTime = userTime.split(":")[0];
      // userTime == "8"
    }

    // add 'a' or 'p'
    userTime = userTime + (isAM ? 'a' : 'p');
    // userTime == "8a"

    return userTime;
  }


  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  }

  // TO DO:
  // 1) Fix Bug- time changes but day does not update (guide page and individual event page)
  // 2) Test on various browsers / devices

  // DONE:
  // - Refactor format time zone functions- consolidate into 1 function
  // - TEST- keep note in individual event page the same
  // - TEST- write code to change times on individual event page
  // - TEST- Fix times for calendar on hover events longer than one day
  // - Format times below calendar ("PM" and "AM")
  // - Fix times for calendar on hover events longer than one day
  // - Test Code for calendar times / times below calendar
  // - fix bug- times below calendar not coverting to users time
  // - fix formatting- day / month getting cut off on calender events mouse hover for long times
  // - Fix bug- minutes getting cut off calendar events mouse hover for long times
  // - change times in calendar 
  // - change times in calendar (on mouse hover)
  // - change times below calendar
});