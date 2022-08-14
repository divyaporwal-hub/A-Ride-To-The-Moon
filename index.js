let htmlo = document.querySelector(".game");
let character = document.querySelector(".character");
const enemy = document.querySelector(".enemy");
const tree = document.querySelector(".tree");
const startbtn = document.querySelector(".start-btn");
const tree1 = document.querySelector(".tree1");
const enemy1 = document.querySelector(".enemy0");
const moon = document.querySelector(".cloud");
const moon1 = document.querySelector(".moon");
const scorie = document.querySelector(".score");
const high = document.querySelector(".high-score");
const overMsg = document.querySelector(".ki");
const overMsg1 = document.querySelector(".ko");
const far = document.querySelector(".far");
const overMsg2 = document.querySelector(".new-msg");
let final = localStorage.getItem("high");
let score = 0;
let scoreHigh = 0;
let check = 1;
let wee = 0;
let diffi = 0;
let sco;
let doo;
let alive = 1;
let lowLimit = 60;
let highLimit = 90;

let start = 0;

    document.getElementById("game-audio").play();

document.querySelector(".enemy0").style.display = "none";
document.querySelector(".enemy").style.display = "none";

scorie.innerHTML = "POINTS : "+ sco;


if(localStorage.getItem("currentLevel"))
{
    diffi = localStorage.getItem("currentLevel");
    charChangetoDifficolor();
}
else
{
    charChangetoEasycolor();
}



startbtn.addEventListener("click",
function()
{
    if(start == 0){
        startbtn.style.display ='none';
        document.getElementById("game-audio").play();
        start =1 ;
        addscore = setInterval(scoreCheck,1);
        if(localStorage.getItem("currentLevel"))
        {
            diffi = localStorage.getItem("currentLevel");
            charChangetoDiffi();
        }
        else
        {
            charChangetoEasy();
        }
    }
}
);
    

function charChangetoDiffi()
{
    if(document.querySelector(".diffi").classList != "active-level")
    {
        document.querySelector(".easy").classList.remove("active-level");
        document.querySelector(".diffi").classList.add("active-level");
        diffi = 1;
        if(alive)
        {
            document.querySelector(".enemy0").style.display = "block";
            document.querySelector(".enemy").style.display = "block";
            document.querySelector(".enemy0").classList.add("enemy1");
            document.querySelector(".enemy0").style.visibility = "visible";
            document.querySelector(".enemy").style.visibility = "visible";
        }
        lowLimit = 65;
        highLimit = 85;
        localStorage.setItem("currentLevel",diffi);
    }
}

function charChangetoEasy()
{
    if(document.querySelector(".easy").classList != "active-level")

    {
        if(alive)
        {
            document.querySelector(".enemy").style.display = "block";
            document.querySelector(".enemy").style.visibility = "visible";
        }

        document.querySelector(".diffi").classList.remove("active-level");

        document.querySelector(".easy").classList.add("active-level");
        diffi = 0;
        lowLimit = 60;
        highLimit = 90;
        document.querySelector(".enemy0").classList.remove("enemy1");
        document.querySelector(".enemy0").style.visibility = "hidden";
        localStorage.removeItem("currentLevel");
    }
}



function charChangetoDifficolor()
{
    if(document.querySelector(".diffi").classList != "active-level")
    {
        document.querySelector(".easy").classList.remove("active-level");
        document.querySelector(".diffi").classList.add("active-level");
        diffi = 1;
        localStorage.setItem("currentLevel",diffi);
    }
}

function charChangetoEasycolor()
{
    if(document.querySelector(".easy").classList != "active-level")

    {
        document.querySelector(".diffi").classList.remove("active-level");
        document.querySelector(".easy").classList.add("active-level");
        diffi = 0;
        localStorage.removeItem("currentLevel");
    }
}



function charChangetop()
{
    if(character.id != "pinkiee") //its zeb
    {
        character.id = "pinkiee";
        character.src = "pinky.gif";
        character.style.transform = "scaleX(-1)";
        character.style.top= "calc(100% - 240px)";
    }
}



function charChangetoz()
{
    character.removeAttribute('id');
    character.src = "zebra1.gif";
    character.style.transform = "scaleX(1)";
    character.style.top= "calc(100% - 265px)";
}


document.querySelector(".f2").style.display = "inline";




far.addEventListener("click",
function()
{
    localStorage.removeItem("high");
    high.innerHTML = "HIGH SCORE : 0" ;
}
);


if (final)
{
    high.innerHTML = "HIGH SCORE : "+ final ;
}
else
{
    high.innerHTML = "HIGH SCORE : "+ scoreHigh ;
    localStorage.setItem("high",scoreHigh);
}

scorie.innerHTML = "POINTS : "+ score;


htmlo.addEventListener("click",
function()
{
    if (alive)
    {
        if(character.classList != "anime"){
            character.classList.add("anime");
            setTimeout(endJump,680);
            document.getElementById("run-audio").pause();
            document.getElementById("jump-audio").play();
            setTimeout(endJumpAudio,610);
        }
    }
}
);


function endJump()
{
    character.classList.remove("anime");
    document.getElementById("run-audio").play();
}
function endJumpAudio()
{
    document.getElementById("jump-audio").pause();
}


var out = setInterval(out,10);


// setTimeout(work,0);
// function work()
// {
// setInterval(enemy1Disap,6000);

// function enemy1Disap()
// {
//     if (enemy1.style.visibility != "hidden") {
//         enemy1.style.visibility = "hidden";
//         // enemy1.style.display = "none";
//     }
//     else 
//     {
//         // enemy1.style.display = "block";
//         enemy1.style.visibility = "visible";
//     }
// }

function scoreCheck()
{
    if(check)
    {
        score += 0.01;
        sco = Math.floor(score)
        doo = sco%100;
        scorie.innerHTML = "POINTS : "+ sco ;
    }
    if(doo>20 && doo<80)
    {
        document.querySelector(".star").style.visibility = "visible";
    }
    else
    {
        document.querySelector(".star").style.visibility = "hidden";
    }
}

function out()
{

    const charBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom")); 
    const enileft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left")); 
    const treeleft = parseInt(window.getComputedStyle(tree).getPropertyValue("left")); 
    const tree1left = parseInt(window.getComputedStyle(tree1).getPropertyValue("left")); 


    if (charBottom<-10 && lowLimit<enileft && enileft<=highLimit )
    {
        document.getElementById("shout-audio").play();
        // overMsg1.style.display = "block";
        enemy.style.animation = "none";
        setTimeout(ratDis,4000);
        alive=0;
        if(diffi)
        {
            enemy1.style.display = "none";
        }
        moon.style.animation = "none";
        moon1.style.animation = "none";
        tree.style.animation = "none";
        tree1.style.animation = "none";
        enemy.style.left = enileft;
        tree.style.left = treeleft;
        tree1.style.left = tree1left;
        check = 0;
        clearInterval(out);
        document.getElementById("game-audio").pause();

        if(sco > final)
        {
            let scoreHigh = sco;
            wee=1;
            high.innerHTML = "HIGH SCORE : " + scoreHigh;
            localStorage.setItem("high",scoreHigh);
            overMsg2.style.display = "block";
            document.getElementById("high-audio").play();
            document.querySelector(".high-gif").style.visibility = "visible";
            setTimeout(()=>{
                document.location.reload(true)
            },7000)
        }

        else
        {
            document.getElementById("game-over").play();
            overMsg.style.display = "block";
            setTimeout(()=>{
                document.location.reload(true)
            },5000)
        };
        sco = 0;
        start = 0;

        // scorie.innerHTML = "POINTS : "+ sco;
        clearInterval(addscore);


        // startbtn.style.display ='block';

    }

    else if(diffi)
    {
        const eni1left = parseInt(window.getComputedStyle(enemy1).getPropertyValue("left"));

        if (charBottom<-10 && lowLimit<eni1left && eni1left<=highLimit )
        {
            document.getElementById("shout-audio").play();
            // overMsg1.style.display = "block";
            enemy1.style.animation = "none";
            setTimeout(monsDis,4000);
            alive=0;
            moon.style.animation = "none";
            moon1.style.animation = "none";
            tree.style.animation = "none";
            tree1.style.animation = "none";
            enemy.style.left = enileft;
            tree.style.left = treeleft;
            tree1.style.left = tree1left;
            enemy1.style.left = eni1left;
            enemy.style.display = "none";
            check = 0;
            clearInterval(out);
            document.getElementById("game-audio").pause();

            if(sco > final)
            {
                let scoreHigh = sco;
                wee=1;
                high.innerHTML = "HIGH SCORE : " + scoreHigh;
                localStorage.setItem("high",scoreHigh);
                overMsg2.style.display = "block";
                document.getElementById("high-audio").play();
                document.querySelector(".high-gif").style.visibility = "visible";
                
            setTimeout(()=>{
                document.location.reload(true)
            },7000)
            }

            else
            {
                document.getElementById("game-over").play();
                overMsg.style.display = "block";
                
            setTimeout(()=>{
                document.location.reload(true)
            },5000)
            };
            sco = 0;
            start = 0;

            // scorie.innerHTML = "POINTS : "+ sco;
            clearInterval(addscore);

            // startbtn.style.display ='block';
        }
    }
}

function ratDis()
{
    enemy.style.display = "none";
}

function monsDis()
{
    enemy1.style.display = "none";
}

function ratDis1()
{
    enemy.style.display = "block";
}

function monsDis1()
{
    enemy1.style.display = "block";
}

function musicoff()
{
    if(document.querySelector(".f1").style.color == "rgb(3, 255, 230)")
    {
        document.querySelector(".f1").style.color = "white";
        document.getElementById("game-audio").pause();
        document.getElementById("game-over").pause();
        document.getElementById("high-audio").pause();
    }

    else
    {
        if(check)
        {
            document.getElementById("game-audio").play();
        }
        else if(wee)
        {document.getElementById("high-audio").play();
        }
        document.querySelector(".f1").style.color = "rgb(3, 255, 230)"
    }
}

function voldown()
{
    document.getElementById("run-audio").pause();
    document.getElementById("jump-audio").mute = "true";
    document.getElementById("shout-audio").mute = "true";
    document.querySelector(".f2").style.display = "none";
    document.querySelector(".f3").style.display = "inline";
}

function vol()
{
    document.querySelector(".f3").style.display = "none";
    document.querySelector(".f2").style.display = "inline";
    document.getElementById("run-audio").play();
    document.getElementById("shout-audio").mute = "false";
    document.getElementById("jump-audio").mute = "false";
}