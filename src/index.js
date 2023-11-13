function formatDate(date) {
  let currentTime = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thurdsday",
    "Friday",
    "Saturday"
  ];
  let day = weekdays[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let cityInput = document.querySelector("#searchInput");
  cityElement.innerHTML = cityInput.value;
}
let dataElement = document.querySelector("#currentDate");
let currentTime = new Date();
let searchform = document.querySelector("#searchForm");
searchform.addEventListener("submit", search);

dataElement.innerHTML = formatDate(currentTime);
