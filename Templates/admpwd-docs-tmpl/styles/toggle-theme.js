/*const sw = document.getElementById("switch-style"), b = document.body;
if (sw && b) {
  sw.checked = window.localStorage && localStorage.getItem("theme") === "light-theme" || !window.localStorage;
  b.classList.toggle("dark-theme", !sw.checked)
  b.classList.toggle("light-theme", sw.checked)

  sw.addEventListener("change", function (){
    b.classList.toggle("dark-theme", !this.checked)
    b.classList.toggle("light-theme", this.checked)
    if (window.localStorage) {
      this.checked ? localStorage.setItem("theme", "light-theme") : localStorage.setItem("theme", "dark-theme")
    }
  })
}*/
const sw = document.getElementById("switch-style"), b = document.body;
if (sw && b) {
  sw.checked = window.localStorage && localStorage.getItem("theme") === "dark-theme" || !window.localStorage;
  b.classList.toggle("dark-theme", sw.checked)
  b.classList.toggle("light-theme", !sw.checked)

  sw.addEventListener("change", function (){
    b.classList.toggle("dark-theme", this.checked)
    b.classList.toggle("light-theme", !this.checked)
    if (window.localStorage) {
      this.checked ? localStorage.setItem("theme", "dark-theme") : localStorage.setItem("theme", "light-theme")
    }
  })
}

window.onload = function() {
  let headerOffsetHeight = document.querySelector('.js-nav-height').offsetHeight;
  let sidefilter = document.querySelector('#sidetoc .sidefilter');
  let sidetoc = document.querySelector('#sidetoc .sidetoc');
  let article = document.querySelector('.article');
  let sideaffix = document.querySelector('.sideaffix');
  if (sidefilter !== null) {
    let sidefilterTop  = headerOffsetHeight + 70;
    sidefilter.style.top = sidefilterTop + "px";
  }
  if (sidetoc !== null) {
    let sidetocTop  = headerOffsetHeight + 150;
    sidetoc.style.top = sidetocTop + "px";
  }
  if (article !== null) {
    let articleTop  = headerOffsetHeight + 90;
    article.style.marginTop = articleTop + "px";
  }
  if (sideaffix !== null) {
    let sideaffixTop  = headerOffsetHeight + 30;
    sideaffix.style.top = sideaffixTop + "px";
  }
}
