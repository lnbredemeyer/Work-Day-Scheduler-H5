//Updates the time in the header
var now = moment().format('dddd, MMMM Do YYYY, h:mm.ss');
$("#currentDay").text(now);

// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");

var hour = moment().hours();
var userInfo;
var hourStuff;

//tracking for the hours, color coded for past, present and future
var hourNow = moment ().hour();
function hourlyTracking() {
    if(hourNow > parseInt($('#time-9').children('div').attr('data-hours'))) {
        $('#time-9').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-9').children('div').attr('data-hours'))) {
        $('#time-9').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-9').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-10').children('div').attr('data-hours'))) {
        $('#time-10').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-10').children('div').attr('data-hours'))) {
        $('#time-10').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-10').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-11').children('div').attr('data-hours'))) {
        $('#time-11').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-11').children('div').attr('data-hours'))) {
        $('#time-11').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-11').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-12').children('div').attr('data-hours'))) {
        $('#time-12').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-12').children('div').attr('data-hours'))) {
        $('#time-12').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-12').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-13').children('div').attr('data-hours'))) {
        $('#time-13').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-13').children('div').attr('data-hours'))) {
        $('#time-13').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-13').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-14').children('div').attr('data-hours'))) {
        $('#time-14').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-14').children('div').attr('data-hours'))) {
        $('#time-14').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-14').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-15').children('div').attr('data-hours'))) {
        $('#time-15').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-15').children('div').attr('data-hours'))) {
        $('#time-15').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-15').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-16').children('div').attr('data-hours'))) {
        $('#time-16').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-16').children('div').attr('data-hours'))) {
        $('#time-16').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-16').children('div').siblings('textarea').addClass('present')
    }

    if(hourNow > parseInt($('#time-17').children('div').attr('data-hours'))) {
        $('#time-17').children('div').siblings('textarea').addClass('past')
    } else if(hourNow < parseInt($('#time-17').children('div').attr('data-hours'))) {
        $('#time-17').children('div').siblings('textarea').addClass('future')
    } else {
        $('#time-17').children('div').siblings('textarea').addClass('present')
    }
}

hourlyTracking()

//local storage for each hour
function initPage() {

    var init9 = JSON.parse(localStorage.getItem("9am"));
    nineAm.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("10am"))
    tenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11am"))
    elevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12pm"))
    twelvePm.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("1pm"))
    onePm.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("2pm"))
    twoPm.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("3pm"))
    threePm.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("4pm"))
    fourPm.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("5pm"))
    fivePm.val(init5);
  } 
  
  $(document).ready(function(){
    initPage()
  
    // Buttons (save to Local Storage)
    $(".saveBtn").on("click", function(){
      userInfo = $(this).siblings(".form").val().trim();
      console.log(userInfo);
      hourStuff = $(this).siblings(".time-hour").text().trim();
      console.log(hourStuff);
      localStorage.setItem(hourStuff, JSON.stringify(userInfo));
  
    })
  
  });