// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$(".currentDay").text(today.format("MM/DD/YYYY"));

// This is trying to make a variable that 
// var student = document.getElementById("student-names");
// var eventEntry = $('.eventInput');
// var saveButton = $('.btn');

/* $(document).ready(function () {
  $('.btn').addEventListener("click", function () {
    var eventEntry = $('.eventInput').value;
    var description = $(); 
    var hour = $(); // .??().attr()
    localStorage.setItem(hour, description);
    
    // code that shows notif of item saved in local storage
    $("").addClass("");
    // create a set timeout to remove class after 5 seconds
    setTimeout(function() {
      $("").removeClass("");
    }, 5000)
  })
  function updateTime() {
    // get current time, loop through time blocks, check if time has moved past current time.
    var date = dayjs().hour();
  }
  updateTime();
  // set interval for time

  // load save data in local storage
  $(".currentDay").text(date.format("MM/DD/YYYY"));
});



// eventData.innerHTML = localStorage.getItem("value");

// $(".btn").click(function() {
// var saveText = $(event).val();

// localStorage.
// $(".eventData").innerHTML = localStorage.??



// saveButton.on("click", function () {
//  localStorage.setItem('value', input.value);
// });

/* function saveData() {
  // Save related form data as an object
  var eventData = {
    eventEntry: eventEntry.value,
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('eventData', JSON.stringify(eventData));
}

function renderData() {
  // Use JSON.parse() to convert text to JavaScript object
  var loadEntry = JSON.parse(localStorage.getItem('eventData'));
  // Check if data is returned, if not exit out of the function
  if (loadEntry !== null) {
    $('.eventInput').innerHTML = loadEntry.eventEntry;
  }
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveData();
  renderData();
}); */
