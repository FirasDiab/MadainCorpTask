function rockChoose(){
    document.getElementById("Rock-btn").style.display = "none";
    document.getElementById("Paper-btn").style.display = "none";
    document.getElementById("Scissors-btn").style.display = "none";
    document.getElementById("Rock-img").innerHTML = "<img src='./images/rock.png'>";
    
    let computerChooice = [
        "<img src='./images/rock.png' alt='rock'>",
        "<img src='./images/paper.png' alt='paper'>",
        "<img src='./images/scissors.png' alt='scissors'>"
    ];
    let randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("Choose-computer-img").innerHTML = computerChooice[randomNumber];

    if( randomNumber == 1){
        document.getElementById("winner").innerHTML = 'Computer Win';
        sessionStorage.computerCount = Number(sessionStorage.computerCount)+1;
    }
    else if(randomNumber == 2){
        document.getElementById("winner").innerHTML = 'Player Win';
        sessionStorage.playerCount = Number(sessionStorage.playerCount)+1;
    }
    else{
        document.getElementById("winner").innerHTML = 'No One Win';
    }
    document.getElementById("winner").style.display = "block";
    document.getElementById("computer-result").innerHTML = sessionStorage.computerCount;
    document.getElementById("player-result").innerHTML = sessionStorage.playerCount;
    
}

function paperChoose(){
    document.getElementById("Rock-btn").style.display = "none";
    document.getElementById("Paper-btn").style.display = "none";
    document.getElementById("Scissors-btn").style.display = "none";
    document.getElementById("Rock-img").innerHTML = "<img src='./images/paper.png'>";

    let computerChooice = [
        "<img src='./images/rock.png' alt='rock'>",
        "<img src='./images/paper.png' alt='paper'>",
        "<img src='./images/scissors.png' alt='scissors'>"
    ];
    let randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("Choose-computer-img").innerHTML = computerChooice[randomNumber];

    if( randomNumber == 2){
        document.getElementById("winner").innerHTML = 'Computer Win';
        sessionStorage.computerCount = Number(sessionStorage.computerCount)+1;
    }
    else if(randomNumber == 0){
        document.getElementById("winner").innerHTML = 'Player Win';
        sessionStorage.playerCount = Number(sessionStorage.playerCount)+1;
    }
    else{
        document.getElementById("winner").innerHTML = 'No One Win';
    }
    document.getElementById("winner").style.display = "block";
    document.getElementById("computer-result").innerHTML = sessionStorage.computerCount;
    document.getElementById("player-result").innerHTML = sessionStorage.playerCount;

}

function scissorsChoose(){
    document.getElementById("Rock-btn").style.display = "none";
    document.getElementById("Paper-btn").style.display = "none";
    document.getElementById("Scissors-btn").style.display = "none";
    document.getElementById("Rock-img").innerHTML = "<img src='./images/scissors.png'>";

    let computerChooice = [
        "<img src='./images/rock.png' alt='rock'>",
        "<img src='./images/paper.png' alt='paper'>",
        "<img src='./images/scissors.png' alt='scissors'>"
    ];
    let randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("Choose-computer-img").innerHTML = computerChooice[randomNumber];

    if( randomNumber == 0){
        document.getElementById("winner").innerHTML = 'Computer Win';
        sessionStorage.computerCount = Number(sessionStorage.computerCount)+1;
    }
    else if(randomNumber == 1){
        document.getElementById("winner").innerHTML = 'Player Win';
        sessionStorage.playerCount = Number(sessionStorage.playerCount)+1;
    }
    else{
        document.getElementById("winner").innerHTML = 'No One Win';
    }
    document.getElementById("winner").style.display = "block";
    document.getElementById("computer-result").innerHTML = sessionStorage.computerCount;
    document.getElementById("player-result").innerHTML = sessionStorage.playerCount;
    
}