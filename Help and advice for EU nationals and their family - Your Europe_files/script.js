function showValise() {
  var x = document.getElementById("fonduTop");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
function closeValise() {
    var x = document.getElementById("fonduTop");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  function transition(){
    var y = document.getElementById("containerClosed");
    var z = document.getElementById("containerVal");
    if (y.style.display === "block") {
        y.style.display = "none";
        z.style.display = "block";
      } else {
        y.style.display = "block";
        z.style.display = "none";
      }
  }
  att = "";
  bye = "";
  function displaylist(lishow){
    clearTimeout(bye);
    att = setTimeout(() => {
      lishow.className = "col-md-3";
      lishow.querySelector('div').className = "arr swingin";
    }, 650);
  }
  function removelist(lihide){
    clearTimeout(att);
    bye = setTimeout(() => {
      lihide.className = "col-md-3 shaketat";
      lihide.querySelector('div').className = "arr swingout";
    }, 650);
  }
  document.querySelectorAll('div > span').forEach(dv => {
    ics = dv.querySelectorAll('span > img');
    ics[0].addEventListener("click",()=> dv.querySelector('span').className = 'done');
    ics[1].addEventListener("click",()=> {
    span = document.createElement('span');
    span.innerHTML = '<br/><input type="text" class="swingin"><img src="https://img.icons8.com/material/40/ffffff/sent.png" style="float:right;top:77px;right:30px;position:absolute"><br/>';
    dv.appendChild(span);
    });
    });