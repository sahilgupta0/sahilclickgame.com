let click =0;
let trigger = 0;
let time = 10;
let i = 4;

function clicked(){
    click = click+1;
    if (click==1){
        startLoop = setInterval(delay,1000);
    }
    if(click>0){
        let hide_box=document.getElementById("start");
        hide_box.style.display="none";
        let count = document.getElementById("real_click");
        count.innerHTML="";
        count.append(click);
    }
}

function delay(){
    if(i >=0){
        let timer = document.getElementById("real_time");
        console.log("itserrfwe working ");
        timer.innerText="";
        timer.append(i);
        i--;
    }
    else{
        console.log("time out");
        let noOfClick = document.getElementById("noOfClick");
        noOfClick.append(click);
        let average = document.getElementById("average");
        average.append(click/5);
        let game_over=document.getElementById("game_over");
        game_over.style.display="block";
        let blur=document.getElementById("main");
        blur.setAttribute("style", "filter:blur(2px); pointer-events: none;");
        clearInterval(startLoop);
        
    }
}


function ok(){
    console.log("ok has been clicked");
    window.location.reload();
    
    

}
