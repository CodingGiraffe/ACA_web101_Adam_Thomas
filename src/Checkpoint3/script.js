
//initial number of cookies    
var num = 0;

window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Hoop Zone";
}

var cookie = document.getElementById("ball");

function ballClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic rookie upgrade to 2x
    if(num >= 30 ){
        num += 1;
        upgradeLevel.innerHTML = "Rookie Level";
    }

    //automatic starter upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Starter Level";
    }

    //automatic champion upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Champion Level";
    }

    //automatic best in the world upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Best in the World Level";
    }
}

