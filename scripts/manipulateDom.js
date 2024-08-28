document.getElementById("home").style.display = "block";

function openSection(evt, section) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      "nav-link active",
      "nav-link"
    );
  }
  document.getElementById(section).style.display = "block";

  evt.currentTarget.className = "nav-link active";
}
