// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // grab event details title div block
  let eventDetailsTitle = document.getElementById("block-f8bcca40e6962c1021ba");

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% of browsers (2019)
  // ex. timeZone == "America/New_York"

  let title = "all times in calendar below are in " + timeZone;

  // replace event details title with dynamic time zone text
  eventDetailsTitle.childNodes[0].firstChild.firstChild.innerHTML = title;

  // grab all span elements in calendar that have times
  let times = document.getElementsByClassName("item-time item-time--12hr");
  // times == [<span>, <span>, ... ]
  // times[1] == <span class="item-time item-time--12hr">8p&nbsp;</span>

  // will contain new array of span elements
  let newTimes = [];

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
    let newTime;
    // newTime == "7a"
    
    // replace inner span text with new time
    time.innerHTML = `${newTime}&nbsp`;
    // time == <span class="item-time item-time--12hr">7a&nbsp;</span
  }


  // TO DO:
  // 1) find out how to convert "10a" EST -> "7a" users time
  // 2) find out how to change timezones of times on mouse hover blocks
});