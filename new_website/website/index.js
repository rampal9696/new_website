var bars=document.getElementById('bars');
       var side_bars_id=document.getElementById('side-bars-id');
       var ram = true;
       bars.classList="fa fa-bars";
       bars.addEventListener("click",function(){

      if(ram)
     {
        bars.classList="fa fa-times .side-nav";
        side_bars_id.classList="side-nav";

        ram=!ram;
     }
     else{
        bars.classList="fa fa-bars";
        side_bars_id.classList="side-nav-hide";
        ram=!ram;
     }
    })   