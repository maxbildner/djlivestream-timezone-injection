// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // grab event details title div block
  let eventDetailsTitle = document.getElementById("block-f8bcca40e6962c1021ba");

  // get timezone of user
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // works w/ 95% browsers (2019)
  // ex. timeZone = "America/New_York"

  // let timeZoneTxt = timeZone;
  let title = "all times in calendar below are in " + timeZone;

  // replace event details title with dynamic time zone text
  eventDetailsTitle.childNodes[0].firstChild.firstChild.innerHTML = title;

  // For Testing:
  // console.log(eventDetailsTitle.childNodes[0].firstChild.firstChild.innerHTML);

  // get all html elements by class name time-zone 
  // let timeZones = document.getElementsByClassName("time-zone");
  // timeZones = HTMLCollection(3) [span.time-zone, span.time-zone, span.time-zone]

  // get all html elements by class name time
  // let times = document.getElementsByClassName("time");
  // times = HTMLCollection(2) [span.time, span.time]
  
  // convert EST time zone to timezone of user

  // loop through all timeZones, and times, and replace innerHTML with 
  // corresponding times/timezones of user

});