<?php
  function getar($el){

    $server = "mysql:dbname=suitcase;host=localhost";
    $user = "phpmyadmin";
    $pwd = "user";
    $db = "suitcase";

    $mi = new pdo($server, $user, $pwd);

    $req = $mi->prepare("
    SELECT *
    FROM saved_articles
    ");
    $req -> execute();

    $resp = $req -> fetchAll(PDO::FETCH_ASSOC);

    $ht = "<div class='cache'>";

    foreach ($resp as $item){
      if($item['ar_cat'] == $el){
        switch($item['ar_state']){
          case 'done':
            $st = 'done';
            break;
          case 'reported':
            $st = 'reported';
            break;
          case 'new':
            $st = 'new';
            break;
        }
        $na = $item['ar_name'];
        $ht .= ('
        <span><img src="assets/img/v.png"><span class='.$st.'>'.$na.'</span><img src="assets/img/mp.png"></span><br/>
        ');
      }
    }
    $ht .= '</div>';
    echo($ht);
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>ReportTool</title>
    <style>

        #main{
          z-index: -1;
        }
        .container{
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-color: rgba(255,255,255,0.9);

        }
        .container::after{
          background-color: rgba(255,255,255,0.9);

        }


        div.row{
          width: 75%;
          margin-left: 11.5%;
        }
        .col-md-3 > img{
          max-height: 180px;
          cursor: pointer;
        }
        .shaketat > img:hover{
          animation: vibrate-2 0.7s linear infinite both;
          text-shadow: 0 0 3px #000;
        }
        @keyframes vibrate-2{0%{transform:translate(0)}20%{transform:translate(2px,-2px)}40%{transform:translate(2px,2px)}60%{transform:translate(-2px,2px)}80%{transform:translate(-2px,-2px)}100%{transform:translate(0)}}
        .swingin{animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both}
        @keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg)translateX(-50%);transform-origin:top;opacity:0}100%{transform:rotateX(0deg)translateX(-50%);transform-origin:top;opacity:1}}
        .swingout{animation:swingout .5s cubic-bezier(.175,.885,.32,1.275) both}
        @keyframes swingout{0%{transform:rotateX(0deg)translateX(-50%);transform-origin:top;opacity:1}100%{transform:rotateX(-100deg)translateX(-50%);transform-origin:top;opacity:0}}
        .container{
          padding-top: 15%;
          background: no-repeat;
          background-image: url('assets/img/valiseopen.png');
          background-size:contain;
          height: 1000px;
          max-height: 100%;
        }
        .cache{
          display:none
        }
        .arr{
          line-height: 35px;
          text-align: center;
          z-index: 3;
          background-color: #967A61;
          position: absolute;
          border-radius: 25px;
          border : 2px solid black;
          padding: 15px 30px 15px 30px;
          left: 50%;
          top: 170px;
          width: max-content;
        }
        span > img {
          cursor: pointer;
          max-height: 50px;
        }
        span{
          transition: .5s;
          color : white;
          font-size: 110%;
          font-weight: bold;
        }
        span > span{
          padding: 3px 10px 7px 10px;
          border-radius: 5px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .new{
          background-color: #49342c;
        }
        .done{
          background-color: #5cbd1b;
        }
        .reported{
          background-color: #dd1a3a;
        }
        input{
          position:absolute;
          border-style: none;
          border-radius: 14px;
          padding-left: 10px;
          margin: 10px;
        }
    </style>
  </head>

<body cz-shortcut-listen="true">



  <img id="themain" src="assets/img/main3.png">

    <div class="container">

        <div class="row">

            <div class="col-md-3 shaketat">
              <img src="assets/img/1.png">
            </div>

            <div class="col-md-3 shaketat">
              <img src="assets/img/2.png">
            </div>

            <div onmouseover="displaylist(this)" onmouseout="removelist(this)" class="col-md-3 shaketat">
              <img src="assets/img/3.png">

                <?php getar('health')  ?>

            </div>

            <div onmouseover="displaylist(this)" onmouseout="removelist(this)" class="col-md-3 shaketat">
              <img src="assets/img/4.png">

                <?php getar('voyage')  ?>

            </div>

        </div>
        <div class="row">

            <div onmouseover="displaylist(this)" onmouseout="removelist(this)" class="col-md-3 shaketat">
              <img src="assets/img/5.png">

                <?php getar('vehicles')  ?>

            </div>

            <div class="col-md-3 shaketat">
              <img src="assets/img/6.png">
            </div>

            <div onmouseover="displaylist(this)" onmouseout="removelist(this)" class="col-md-3 shaketat">
              <img src="assets/img/7.png">

                <?php getar('education')  ?>

            </div>

            <div class="col-md-3 shaketat">
              <img src="assets/img/fam.png">
            </div>
            </div>

    </div>

</body></html>

<script>
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
  i=2;
  moke = document.querySelector('#themain');
  moke.addEventListener("click", mouvebg);
  function mouvebg(){
    if(i!=4){
      moke.setAttribute('src','main'+i+'.png');
      i++;
    }
  }
  function showValise() {
    var x = document.getElementById("fonduTop");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
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

</script>
</html>
