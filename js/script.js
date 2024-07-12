// !Scroll Bar JS Star.

let calcscrollvalue = () => {
  let scrollProgress = document.getElementById("progressbar");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  // #03cc65 for progressbar and #d7d7d7 for unused area of progressbar.
};

window.onscroll = calcscrollvalue;
window.onload = calcscrollvalue;

// !Scroll Bar JS End.
