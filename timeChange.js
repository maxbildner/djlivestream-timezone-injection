// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // grab event details title div block
  let eventDetailsTitle = document.getElementById("block-f8bcca40e6962c1021ba");

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% of browsers (2019)
  // ex. timeZone == "America/New_York"
  // ex. timeZone == "America/Los_Angeles"

  let title = "all times in calendar below are in " + timeZone;

  // replace event details title with dynamic time zone text
  eventDetailsTitle.childNodes[0].firstChild.firstChild.innerHTML = title;

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
    // startTime == "10:00am "    or   "Fri, Dec 4, 7:00pm "
    debugger

    // if time is in long format (ex. "Fri, Dec 4, 7:00pm ") 
    if (startTime.length > 8) {
      debugger
      // grab only time at end (ex. "7:00pm")
      startTime = startTime.split(" ");
      startTime = startTime[startTime.length - 1];
      debugger
    }

    // remove "m"
    startTime = removeM(startTime);
    debugger
    // grab ending time and remove " " from ends
    let endTime = time.split("–")[1].trim();                                // "–" DOES NOT == regular dash "-"
    // endTime == " 4:00pm"
    debugger

    // if time is in long format (ex. " Sun, Dec 6, 11:55pm")
    if (endTime.length > 8) {
      debugger
      // grab only time at end (ex. "11:55pm")
      endTime = endTime.split(" ");
      endTime = endTime[endTime.length - 1];
      // endTime == "11:55pm"
      debugger
    }

    // remove "m"
    endTime = removeM(endTime);
    // endTIme == "11:55p"
    debugger
    // convert EST times to users time zone
    let newStartTime = formatAndConvertTZ2(startTime);
    // newStartTime == "1p"  or   "1:30p"
    debugger
    let newEndTime = formatAndConvertTZ2(endTime);
    debugger
    let newTime = newStartTime + " – " + newEndTime;
    debugger
    // replace time with users time
    bigSquareTimes[i].children[1].innerHTML = newTime;
  }


  function removeM(str) {
    return str.split("").filter(char => char !== "m").join("");
  }


  // "Fri, Dec 4, 7:00pm"         => "7:00p"
  function parseTime(timeStr) {
    // timeStr == "Fri, Dec 4, 7:00pm"
    // timeStr == "Sun, Dec 6, 11:55pm"

    timeStr = timeStr.split(" ")[timeStr.length - 1];
    // timeStr == ["Fri,", "Dec", "4,", "7:00p"][3]   => "7:00p"
  }


  function formatAndConvertTZ2(est) {
    // est == "10a"   or "2:30p"
    let hours;
    let minutes;

    // convert est string to 24 hour string format ("20:00:00")
    // if AM time
    if (est[est.length - 1].toLowerCase() === "a") {
      est = est.split(":");
      // est == ["10a"]   or ["10", "30a"]

      hours = est[0];
      minutes = (est[1]) ? est[1].slice(0, est[1].length - 1) : "00";
      est = `${hours}:${minutes}:00`;
      // est == "8:00:00"   or "8:30:00"

      // else PM time
    } else {
      est = est.split(":");
      // est == ["8p"]   or ["8", "30p"]

      hours = est[0];
      minutes = (est[1]) ? est[1].slice(0, est[1].length - 1) : "00";
      // hours == "8"     minutes == "30"

      est = (12 + Number(est[0].slice(0, est[0].length))) + ":" + minutes + ":00";

    }

    // let userTime = convertTZ(`2020/12/3 ${est} GMT-0500`, timeZone).toString();
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



  function formatAndConvertTZ(est) {
    // est == "10a"   or "2:30p"
    let hours;
    let minutes;

    // convert est string to 24 hour string format ("20:00:00")
    // if AM time
    if (est[est.length - 1].toLowerCase() === "a") {
      est = est.split(":");
      // est == ["10a"]   or ["10", "30a"]

      hours = est[0].slice(0, est[0].length - 1);
      minutes = (est[1]) ? est[1].slice(0, est[1].length - 1) : "00";
      est = `${hours}:${minutes}:00`;
      // est == "8:00:00"   or "8:30:00"

      // else PM time
    } else {
      est = est.split(":");
      // est == ["8p"]   or ["8", "30p"]

      hours = est[0].slice(0, est[0].length - 1);
      minutes = (est[1]) ? est[1].slice(0, est[1].length - 1) : "00";
      // hours == "8"     minutes == "30"

      est = (12 + Number(est[0].slice(0, est[0].length - 1))) + ":" + minutes + ":00";

    }

    // let userTime = convertTZ(`2020/12/3 ${est} GMT-0500`, timeZone).toString();
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
  // 2) Test Live
  // 3) Test on various browsers
});