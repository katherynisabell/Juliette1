
function openPage(pageName, elmnt, color) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";


  elmnt.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click();



$(document).ready(function() {
  $("select").on('change', function() {
      $(this).find("option:selected").each(function() {
          var selected = $(this).attr("value");
          if (selected) {
              $(".GFG").not("." + selected).hide();
              $("." + selected).show();
          } else {
              $(".GFG").hide();
          }

      });
  }).change();
});

$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('button').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});