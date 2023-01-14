window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 625 || document.documentElement.scrollTop > 625) {
    document.getElementById("navbar").style.display = "block";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
}
