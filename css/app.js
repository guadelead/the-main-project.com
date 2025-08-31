
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var displayMenu = document.getElementById("myTopnav");
  if (displayMenu.className === "navigation") {
    displayMenu.className += " responsive";
  } else {
    displayMenu.className = "navigation";
  }
}