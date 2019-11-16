

/*const dealerRow = document.getElementById("dealerRow");
const playerRow = document.getElementById("playerRow");

function dealerDeal(num, img){
    const Dealercard = document.createElement("div");
    const Dealernumber = document.createElement("div");
    const DealernumberValue = document.createTextNode(num);
    const Dealerfigure = document.createElement("img");

    Dealerfigure.setAttribute("src", img);
    Dealerfigure.className = "figure"
    Dealercard.className = "card";
    Dealernumber.className = "number";

    Dealercard.appendChild(Dealernumber);
    Dealernumber.appendChild(DealernumberValue);
    Dealercard.appendChild(Dealerfigure);
    dealerRow.appendChild(Dealercard);
}*/

    
    

    //let PlayerdeckNumber = deck.value.splice(Math.floor(Math.random()*deck.value.length), 1);
    


const bet1 = document.querySelector(".fb");
const bet2 = document.querySelector(".sb");
const bet3 = document.querySelector(".tb");
const bet4 = document.querySelector(".frb");

const yourBet = document.querySelector(".yb");
const yourMoneyBet = document.querySelector("#yourMoneyBet");
const yourMoney = document.querySelector("#money");
const moneyPosition = document.querySelector("#moneyS");
const tyb = document.getElementById("tyb");
const playerAmount = document.getElementById("playerAmount");
const dealerAmount = document.getElementById("dealerAmount");


let yourBetNumber = 0;

let money = 100;
yourMoney.textContent = money;

function upBet(num){
    yourBet.style.display = "block";
    if(money < (num)){
        return;
    }
    else {
        yourBetNumber = yourBetNumber + (num);
        yourMoneyBet.textContent = yourBetNumber;
        downMoney(num);
    }
}
function downMoney(num){
    money = money - (num);
    yourMoney.textContent = money;
}


bet1.addEventListener('click', function(){
    upBet(1);
    
});
bet2.addEventListener('click', function(){
    upBet(5);
    
});
bet3.addEventListener('click', function(){
    upBet(10);
    
});
bet4.addEventListener('click', function(){
    upBet(50);
    
});

function Buttons(){
    bet1.style.display = "none";
    bet2.style.display = "none";
    bet3.style.display = "none";
    bet4.style.display = "none";
    deal.style.display = "none";
    hit.style.display = "block";
    stand.style.display = "block";
    moneyPosition.style.top = "370px";
    tyb.style.left = "60%";
    playerAmount.style.display = "block"
    dealerAmount.style.display = "block";
    dealerRow.style.display = "block";
    playerRow.style.display = "block";
    

}

const dealerRow = document.getElementById("dealerRow");
const playerRow = document.getElementById("playerRow");

const deal = document.querySelector("#deal");
const hit = document.querySelector("#hit");
const stand = document.querySelector("#stand");

let deck = ["hA","h2","h3","h4","h5","h6","h7","h8","h9","h10","hJ","hQ","hK","cA","c2","c3","c4","c5","c6","c7","c8","c9","c10","cJ","cQ","cK","dA","d2","d3","d4","d5","d6","d7","d8","d9","d10","dJ","dQ","dK","sA","s2","s3","s4","s5","s6","s7","s8","s9","s10","sJ","sQ","sK"]
//"h3","h4","h5","h6","h7","h8","h9","h10","hJ","hQ","hK","cA","c2","c3","c4","c5","c6","c7","c8","c9","c10","cJ","cQ","cK","dA","d2","d3","d4","d5","d6","d7","d8","d9","d10","dJ","dQ","dK","sA","s2","s3","s4","s5","s6","s7","s8","s9","s10","sJ","sQ","sK"]



let deckCardD1;



let deckCardP1;
let deckCardP2;
let deckCardP3;


deal.addEventListener('click', function(){
    if (yourBetNumber >= 1){
        Buttons();
        
        deckCardP1 = deck.splice(Math.floor(Math.random()*deck.length), 1);
        let deckCardTransP1 = JSON.stringify(deckCardP1);
        idenP(deckCardTransP1);
        deckCardP1 = deck.splice(Math.floor(Math.random()*deck.length), 1);
        let deckCardTransP2 = JSON.stringify(deckCardP1);
        idenP(deckCardTransP2);
        console.log(deck);

        deckCardD1 = deck.splice(Math.floor(Math.random()*deck.length), 1);
        let deckCardTransD1 = JSON.stringify(deckCardD1);
        idenD(deckCardTransD1);
        console.log(deck);

        if (totalNumberP === 21){
            loopApp();
        }
            
    }
    
});

let hitT = true;

hit.addEventListener('click', function(){
    if (hitT === true){
        if (totalNumberP < 21){
            deckCardP1 = deck.splice(Math.floor(Math.random()*deck.length), 1);
            let deckCardTransP3 = JSON.stringify(deckCardP1);
            idenP(deckCardTransP3);
            console.log(deck);
        
            if (totalNumberP >= 21){
                loopApp();
            }
        }
    } 
});
stand.addEventListener('click', function(){
    hitT = false;
    loopApp();
});

function loopApp(){
    setTimeout(function(){
        for (totalNumberD; totalNumberD <= 17; totalNumberD++){
        
            deckCardD1 = deck.splice(Math.floor(Math.random()*deck.length), 1);
            let deckCardTransD1 = JSON.stringify(deckCardD1);
            idenD(deckCardTransD1);
           
            console.log(deck);
            if (totalNumberD >= 17){
                whoWin();
            }
        }
        
    },  1000);
    
}

function whoWin(){
    if (totalNumberD > totalNumberP && totalNumberD <= 21){
        dealerAmount.style.background = "#88e83f";
        playerAmount.style.background = "red";
        setTimeout(function(){
            dealerWin();
        },  3500);
    } else if (totalNumberD > 21 && totalNumberP > 21){
        dealerAmount.style.background = "#88e83f";
        playerAmount.style.background = "red";
        setTimeout(function(){
            dealerWin();
        },  3500);
    } else if (totalNumberD <= 21 && totalNumberP > 21){
        dealerAmount.style.background = "#88e83f";
        playerAmount.style.background = "red";
        setTimeout(function(){
            dealerWin();
        },  3500);
    } else if (totalNumberD === totalNumberP && totalNumberP > 21 && totalNumberD > 21){
        dealerAmount.style.background = "#88e83f";
        playerAmount.style.background = "red";
        setTimeout(function(){
            dealerWin();
        },  3500);
    }

    if (totalNumberP > totalNumberD && totalNumberP <= 21){
        playerAmount.style.background = "#88e83f";
        dealerAmount.style.background = "red";
        setTimeout(function(){
            playerWin();
        },  3500);
    } else if (totalNumberP <= 21 && totalNumberD > 21){
        playerAmount.style.background = "#88e83f";
        dealerAmount.style.background = "red";
        setTimeout(function(){
            playerWin();
        },  3500);
    }

    if (totalNumberP === totalNumberD && totalNumberP <=21 && totalNumberD <=21){
        playerAmount.style.background = "#b1b3b1";
        dealerAmount.style.background = "#b1b3b1"
        setTimeout(function(){
            tie();
        },  3500);
    }


    
}

function tie(){
    money = yourBetNumber + money;
    yourMoney.textContent = money;
    yourBetNumber = 0;
    yourMoneyBet.textContent = yourBetNumber;
    reset();
}
function playerWin(){
    money = money + yourBetNumber + yourBetNumber;
    yourBetNumber = 0;
    yourMoney.textContent = money;
    yourMoneyBet.textContent = yourBetNumber;
    yourBet.style.display = "none";
    reset()
}
function dealerWin(){
    yourBetNumber = 0;
    yourMoneyBet.textContent = yourBetNumber;
    yourBet.style.display = "none";
    reset()
}


function reset(){
    bet1.style.display = "block";
    bet2.style.display = "block";
    bet3.style.display = "block";
    bet4.style.display = "block";
    deal.style.display = "block";
    hit.style.display = "none";
    stand.style.display = "none";
    moneyPosition.style.top = "650px";
    moneyPosition.style.left = "40%";
    tyb.style.left = "50%";
    playerAmount.style.display = "none"
    dealerAmount.style.display = "none";
    dealerRow.style.display = "none";
    playerRow.style.display = "none";
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) elements[0].remove();
    deck = [];
    deck = ["hA","h2","h3","h4","h5","h6","h7","h8","h9","h10","hJ","hQ","hK","cA","c2","c3","c4","c5","c6","c7","c8","c9","c10","cJ","cQ","cK","dA","d2","d3","d4","d5","d6","d7","d8","d9","d10","dJ","dQ","dK","sA","s2","s3","s4","s5","s6","s7","s8","s9","s10","sJ","sQ","sK"]
    totalNumberD = 0;
    totalNumberP = 0;
    playerAmount.style.background = "";
    dealerAmount.style.background = "";
    hitT = true;
    
    
    

    
}


function idenP(card){
    if (card === '["hA"]'){
        let hAn = "A"
        let hAf = "images/heart.png";
        playerSum(11);
        playerDeal(hAn, hAf);
    }
    if (card === '["h2"]'){
        let h2n = "2"
        let h2f = "images/heart.png";
        playerSum(2);
        playerDeal(h2n, h2f);
    }
    if (card === '["h3"]'){
        let h3n = "3"
        let h3f = "images/heart.png";
        playerSum(3);
        playerDeal(h3n, h3f);
    }
    if (card === '["h4"]'){
        let h4n = "4"
        let h4f = "images/heart.png";
        playerSum(4);
        playerDeal(h4n, h4f);
    }
    if (card === '["h5"]'){
        let h5n = "5"
        let h5f = "images/heart.png";
        playerSum(5);
        playerDeal(h5n, h5f);
    }
    if (card === '["h6"]'){
        let h6n = "6"
        let h6f = "images/heart.png";
        playerSum(6);
        playerDeal(h6n, h6f);
    }
    if (card === '["h7"]'){
        let h7n = "7"
        let h7f = "images/heart.png";
        playerSum(7);
        playerDeal(h7n, h7f);
    }
    if (card === '["h8"]'){
        let h8n = "8"
        let h8f = "images/heart.png";
        playerSum(8);
        playerDeal(h8n, h8f);
    }
    if (card === '["h9"]'){
        let h9n = "9"
        let h9f = "images/heart.png";
        playerSum(9);
        playerDeal(h9n, h9f);
    }
    if (card === '["h10"]'){
        let h10n = "10"
        let h10f = "images/heart.png";
        playerSum(10);
        playerDeal(h10n, h10f);
    }
    if (card === '["hJ"]'){
        let hJn = "J"
        let hJf = "images/heart.png";
        playerSum(10);
        playerDeal(hJn, hJf);
    }
    if (card === '["hQ"]'){
        let hQn = "Q"
        let hQf = "images/heart.png";
        playerSum(10);
        playerDeal(hQn, hQf);
    }
    if (card === '["hK"]'){
        let hKn = "K"
        let hKf = "images/heart.png";
        playerSum(10);
        playerDeal(hKn, hKf);
    }
    if (card === '["cA"]'){
        let cAn = "A"
        let cAf = "images/clubsBlack.png";
        playerSum(11);
        playerDeal(cAn, cAf);
    }
    if (card === '["c2"]'){
        let c2n = "2"
        let c2f = "images/clubsBlack.png";
        playerSum(2);
        playerDeal(c2n, c2f);
    }
    if (card === '["c3"]'){
        let c3n = "3"
        let c3f = "images/clubsBlack.png";
        playerSum(3);
        playerDeal(c3n, c3f);
    }
    if (card === '["c4"]'){
        let c4n = "4"
        let c4f = "images/clubsBlack.png";
        playerSum(4);
        playerDeal(c4n, c4f);
    }
    if (card === '["c5"]'){
        let c5n = "5"
        let c5f = "images/clubsBlack.png";
        playerSum(5);
        playerDeal(c5n, c5f);
    }
    if (card === '["c6"]'){
        let c6n = "6"
        let c6f = "images/clubsBlack.png";
        playerSum(6);
        playerDeal(c6n, c6f);
    }
    if (card === '["c7"]'){
        let c7n = "7"
        let c7f = "images/clubsBlack.png";
        playerSum(7);
        playerDeal(c7n, c7f);
    }
    if (card === '["c8"]'){
        let c8n = "8"
        let c8f = "images/clubsBlack.png";
        playerSum(8);
        playerDeal(c8n, c8f);
    }
    if (card === '["c9"]'){
        let c9n = "9"
        let c9f = "images/clubsBlack.png";
        playerDeal(c9n, c9f);
        playerSum(9);
    }
    if (card === '["c10"]'){
        let c10n = "10"
        let c10f = "images/clubsBlack.png";
        playerDeal(c10n, c10f);
        playerSum(10);
    }
    if (card === '["cJ"]'){
        let cJn = "J"
        let cJf = "images/clubsBlack.png";
        playerSum(10);
        playerDeal(cJn, cJf);
    }
    if (card === '["cQ"]'){
        let cQn = "Q"
        let cQf = "images/clubsBlack.png";
        playerSum(10);
        playerDeal(cQn, cQf);
    }
    if (card === '["cK"]'){
        let cKn = "K"
        let cKf = "images/clubsBlack.png";
        playerSum(10);
        playerDeal(cKn, cKf);
    }
    if (card === '["dA"]'){
        let dAn = "A"
        let dAf = "images/diamond.png";
        playerSum(11);
        playerDeal(dAn, dAf);
    }
    if (card === '["d2"]'){
        let d2n = "2"
        let d2f = "images/diamond.png";
        playerSum(2);
        playerDeal(d2n, d2f);
    }
    if (card === '["d3"]'){
        let d3n = "3"
        let d3f = "images/diamond.png";
        playerSum(3);
        playerDeal(d3n, d3f);
    }
    if (card === '["d4"]'){
        let d4n = "4"
        let d4f = "images/diamond.png";
        playerSum(4);
        playerDeal(d4n, d4f);
    }
    if (card === '["d5"]'){
        let d5n = "5"
        let d5f = "images/diamond.png";
        playerSum(5);
        playerDeal(d5n, d5f);
    }
    if (card === '["d6"]'){
        let d6n = "6"
        let d6f = "images/diamond.png";
        playerSum(6);
        playerDeal(d6n, d6f);
    }
    if (card === '["d7"]'){
        let d7n = "7"
        let d7f = "images/diamond.png";
        playerSum(7);
        playerDeal(d7n, d7f);
    }
    if (card === '["d8"]'){
        let d8n = "8"
        let d8f = "images/diamond.png";
        playerSum(8);
        playerDeal(d8n, d8f);
    }
    if (card === '["d9"]'){
        let d9n = "9"
        let d9f = "images/diamond.png";
        playerSum(9);
        playerDeal(d9n, d9f);
    }
    if (card === '["d10"]'){
        let d10n = "10"
        let d10f = "images/diamond.png";
        playerSum(10);
        playerDeal(d10n, d10f);
    }
    if (card === '["dJ"]'){
        let dJn = "J"
        let dJf = "images/diamond.png";
        playerSum(10);
        playerDeal(dJn, dJf);
    }
    if (card === '["dQ"]'){
        let dQn = "Q"
        let dQf = "images/diamond.png";
        playerSum(10);
        playerDeal(dQn, dQf);
    }
    if (card === '["dK"]'){
        let dKn = "K"
        let dKf = "images/diamond.png";
        playerSum(10);
        playerDeal(dKn, dKf);
    }
    if (card === '["sA"]'){
        let sAn = "A"
        let sAf = "images/spadesBlack.png";
        playerSum(11);
        playerDeal(sAn, sAf);
    }
    if (card === '["s2"]'){
        let s2n = "2"
        let s2f = "images/spadesBlack.png";
        playerSum(2);
        playerDeal(s2n, s2f);
    }
    if (card === '["s3"]'){
        let s3n = "3"
        let s3f = "images/spadesBlack.png";
        playerSum(3);
        playerDeal(s3n, s3f);
    }
    if (card === '["s4"]'){
        let s4n = "4"
        let s4f = "images/spadesBlack.png";
        playerSum(4);
        playerDeal(s4n, s4f);
    }
    if (card === '["s5"]'){
        let s5n = "5"
        let s5f = "images/spadesBlack.png";
        playerSum(5);
        playerDeal(s5n, s5f);
    }
    if (card === '["s6"]'){
        let s6n = "6"
        let s6f = "images/spadesBlack.png";
        playerSum(6);
        playerDeal(s6n, s6f);
    }
    if (card === '["s7"]'){
        let s7n = "7"
        let s7f = "images/spadesBlack.png";
        playerSum(7);
        playerDeal(s7n, s7f);
    }
    if (card === '["s8"]'){
        let s8n = "8"
        let s8f = "images/spadesBlack.png";
        playerSum(8);
        playerDeal(s8n, s8f);
    }
    if (card === '["s9"]'){
        let s9n = "9"
        let s9f = "images/spadesBlack.png";
        playerSum(9);
        playerDeal(s9n, s9f);
    }
    if (card === '["s10"]'){
        let s10n = "10"
        let s10f = "images/spadesBlack.png";
        playerSum(10);
        playerDeal(s10n, s10f);
    }
    if (card === '["sJ"]'){
        let sJn = "J"
        let sJf = "images/spadesBlack.png";
        playerSum(10);
        playerDeal(sJn, sJf);
    }
    if (card === '["sQ"]'){
        let sQn = "Q"
        let sQf = "images/spadesBlack.png";
        playerSum(10);
        playerDeal(sQn, sQf);
    }
    if (card === '["sK"]'){
        let sKn = "K"
        let sKf = "images/spadesBlack.png";
        playerSum(10);
        playerDeal(sKn, sKf);
    }
}
function idenD(card){
    if (card === '["hA"]'){
        let hAn = "A"
        let hAf = "images/heart.png";
        dealerSum(11);
        dealerDeal(hAn, hAf);
    }
    if (card === '["h2"]'){
        let h2n = "2"
        let h2f = "images/heart.png";
        dealerSum(2);
        dealerDeal(h2n, h2f);
    }
    if (card === '["h3"]'){
        let h3n = "3"
        let h3f = "images/heart.png";
        dealerSum(3);
        dealerDeal(h3n, h3f);
    }
    if (card === '["h4"]'){
        let h4n = "4"
        let h4f = "images/heart.png";
        dealerSum(4);
        dealerDeal(h4n, h4f);
    }
    if (card === '["h5"]'){
        let h5n = "5"
        let h5f = "images/heart.png";
        dealerSum(5);
        dealerDeal(h5n, h5f);
    }
    if (card === '["h6"]'){
        let h6n = "6"
        let h6f = "images/heart.png";
        dealerSum(6);
        dealerDeal(h6n, h6f);
    }
    if (card === '["h7"]'){
        let h7n = "7"
        let h7f = "images/heart.png";
        dealerSum(7);
        dealerDeal(h7n, h7f);
    }
    if (card === '["h8"]'){
        let h8n = "8"
        let h8f = "images/heart.png";
        dealerSum(8);
        dealerDeal(h8n, h8f);
    }
    if (card === '["h9"]'){
        let h9n = "9"
        let h9f = "images/heart.png";
        dealerSum(9);
        dealerDeal(h9n, h9f);
    }
    if (card === '["h10"]'){
        let h10n = "10"
        let h10f = "images/heart.png";
        dealerSum(10);
        dealerDeal(h10n, h10f);
    }
    if (card === '["hJ"]'){
        let hJn = "J"
        let hJf = "images/heart.png";
        dealerSum(10);
        dealerDeal(hJn, hJf);
    }
    if (card === '["hQ"]'){
        let hQn = "Q"
        let hQf = "images/heart.png";
        dealerSum(10);
        dealerDeal(hQn, hQf);
    }
    if (card === '["hK"]'){
        let hKn = "K"
        let hKf = "images/heart.png";
        dealerSum(10);
        dealerDeal(hKn, hKf);
    }
    if (card === '["cA"]'){
        let cAn = "A"
        let cAf = "images/clubsBlack.png";
        dealerSum(11);
        dealerDeal(cAn, cAf);
    }
    if (card === '["c2"]'){
        let c2n = "2"
        let c2f = "images/clubsBlack.png";
        dealerSum(2);
        dealerDeal(c2n, c2f);
    }
    if (card === '["c3"]'){
        let c3n = "3"
        let c3f = "images/clubsBlack.png";
        dealerSum(3);
        dealerDeal(c3n, c3f);
    }
    if (card === '["c4"]'){
        let c4n = "4"
        let c4f = "images/clubsBlack.png";
        dealerSum(4);
        dealerDeal(c4n, c4f);
    }
    if (card === '["c5"]'){
        let c5n = "5"
        let c5f = "images/clubsBlack.png";
        dealerSum(5);
        dealerDeal(c5n, c5f);
    }
    if (card === '["c6"]'){
        let c6n = "6"
        let c6f = "images/clubsBlack.png";
        dealerSum(6);
        dealerDeal(c6n, c6f);
    }
    if (card === '["c7"]'){
        let c7n = "7"
        let c7f = "images/clubsBlack.png";
        dealerSum(7);
        dealerDeal(c7n, c7f);
    }
    if (card === '["c8"]'){
        let c8n = "8"
        let c8f = "images/clubsBlack.png";
        dealerSum(8);
        dealerDeal(c8n, c8f);
    }
    if (card === '["c9"]'){
        let c9n = "9"
        let c9f = "images/clubsBlack.png";
        dealerSum(9);
        dealerDeal(c9n, c9f);
    }
    if (card === '["c10"]'){
        let c10n = "10"
        let c10f = "images/clubsBlack.png";
        dealerSum(10);
        dealerDeal(c10n, c10f);
    }
    if (card === '["cJ"]'){
        let cJn = "J"
        let cJf = "images/clubsBlack.png";
        dealerSum(10);
        dealerDeal(cJn, cJf);
    }
    if (card === '["cQ"]'){
        let cQn = "Q"
        let cQf = "images/clubsBlack.png";
        dealerSum(10);
        dealerDeal(cQn, cQf);
    }
    if (card === '["cK"]'){
        let cKn = "K"
        let cKf = "images/clubsBlack.png";
        dealerSum(10);
        dealerDeal(cKn, cKf);
    }
    if (card === '["dA"]'){
        let dAn = "A"
        let dAf = "images/diamond.png";
        dealerSum(11);
        dealerDeal(dAn, dAf);
    }
    if (card === '["d2"]'){
        let d2n = "2"
        let d2f = "images/diamond.png";
        dealerSum(2);
        dealerDeal(d2n, d2f);
    }
    if (card === '["d3"]'){
        let d3n = "3"
        let d3f = "images/diamond.png";
        dealerSum(3);
        dealerDeal(d3n, d3f);
    }
    if (card === '["d4"]'){
        let d4n = "4"
        let d4f = "images/diamond.png";
        dealerSum(4);
        dealerDeal(d4n, d4f);
    }
    if (card === '["d5"]'){
        let d5n = "5"
        let d5f = "images/diamond.png";
        dealerSum(5);
        dealerDeal(d5n, d5f);
    }
    if (card === '["d6"]'){
        let d6n = "6"
        let d6f = "images/diamond.png";
        dealerSum(6);
        dealerDeal(d6n, d6f);
    }
    if (card === '["d7"]'){
        let d7n = "7"
        let d7f = "images/diamond.png";
        dealerSum(7);
        dealerDeal(d7n, d7f);
    }
    if (card === '["d8"]'){
        let d8n = "8"
        let d8f = "images/diamond.png";
        dealerSum(8);
        dealerDeal(d8n, d8f);
    }
    if (card === '["d9"]'){
        let d9n = "9"
        let d9f = "images/diamond.png";
        dealerSum(9);
        dealerDeal(d9n, d9f);
    }
    if (card === '["d10"]'){
        let d10n = "10"
        let d10f = "images/diamond.png";
        dealerSum(10);
        dealerDeal(d10n, d10f);
    }
    if (card === '["dJ"]'){
        let dJn = "J"
        let dJf = "images/diamond.png";
        dealerSum(10);
        dealerDeal(dJn, dJf);
    }
    if (card === '["dQ"]'){
        let dQn = "Q"
        let dQf = "images/diamond.png";
        dealerSum(10);
        dealerDeal(dQn, dQf);
    }
    if (card === '["dK"]'){
        let dKn = "K"
        let dKf = "images/diamond.png";
        dealerSum(10);
        dealerDeal(dKn, dKf);
    }
    if (card === '["sA"]'){
        let sAn = "A"
        let sAf = "images/spadesBlack.png";
        dealerSum(11);
        dealerDeal(sAn, sAf);
    }
    if (card === '["s2"]'){
        let s2n = "2"
        let s2f = "images/spadesBlack.png";
        dealerSum(2);
        dealerDeal(s2n, s2f);
    }
    if (card === '["s3"]'){
        let s3n = "3"
        let s3f = "images/spadesBlack.png";
        dealerSum(3);
        dealerDeal(s3n, s3f);
    }
    if (card === '["s4"]'){
        let s4n = "4"
        let s4f = "images/spadesBlack.png";
        dealerSum(4);
        dealerDeal(s4n, s4f);
    }
    if (card === '["s5"]'){
        let s5n = "5"
        let s5f = "images/spadesBlack.png";
        dealerSum(5);
        dealerDeal(s5n, s5f);
    }
    if (card === '["s6"]'){
        let s6n = "6"
        let s6f = "images/spadesBlack.png";
        dealerSum(6);
        dealerDeal(s6n, s6f);
    }
    if (card === '["s7"]'){
        let s7n = "7"
        let s7f = "images/spadesBlack.png";
        dealerSum(7);
        dealerDeal(s7n, s7f);
    }
    if (card === '["s8"]'){
        let s8n = "8"
        let s8f = "images/spadesBlack.png";
        dealerSum(8);
        dealerDeal(s8n, s8f);
    }
    if (card === '["s9"]'){
        let s9n = "9"
        let s9f = "images/spadesBlack.png";
        dealerSum(9);
        dealerDeal(s9n, s9f);
    }
    if (card === '["s10"]'){
        let s10n = "10"
        let s10f = "images/spadesBlack.png";
        dealerSum(10);
        dealerDeal(s10n, s10f);
    }
    if (card === '["sJ"]'){
        let sJn = "J"
        let sJf = "images/spadesBlack.png";
        dealerSum(10);
        dealerDeal(sJn, sJf);
    }
    if (card === '["sQ"]'){
        let sQn = "Q"
        let sQf = "images/spadesBlack.png";
        dealerSum(10);
        dealerDeal(sQn, sQf);
    }
    if (card === '["sK"]'){
        let sKn = "K"
        let sKf = "images/spadesBlack.png";
        dealerSum(10);
        dealerDeal(sKn, sKf);
    }
}

let totalNumberP = 0;
function playerSum(num){
    totalNumberP = totalNumberP + (num);
    playerAmount.textContent = totalNumberP;
}

let totalNumberD = 0;
function dealerSum(num){
    totalNumberD = totalNumberD + (num);
    dealerAmount.textContent = totalNumberD;
}



function dealerDeal(num, img){
    const Dealercard = document.createElement("div");
    const Dealernumber = document.createElement("div");
    const DealernumberValue = document.createTextNode(num);
    const Dealerfigure = document.createElement("img");
    
    Dealerfigure.setAttribute("src", img);
    Dealerfigure.className = "figure";
    Dealercard.className = "card";
    Dealernumber.className = "number";

    Dealercard.appendChild(Dealernumber);
    Dealernumber.appendChild(DealernumberValue);
    Dealercard.appendChild(Dealerfigure);
    dealerRow.appendChild(Dealercard);


    
    
    
    
}

const cardsDeal = document.getElementsByClassName("Dealercard");
function playerDeal(num, img){
    const Playercard = document.createElement("div");
    const Playernumber = document.createElement("div");
    const PlayernumberValue = document.createTextNode(num);
    const Playerfigure = document.createElement("img");

    Playerfigure.setAttribute("src", img);
    Playerfigure.className = "figure";
    Playercard.className = "card";
    Playernumber.className = "number";

    Playercard.appendChild(Playernumber);
    Playernumber.appendChild(PlayernumberValue);
    Playercard.appendChild(Playerfigure);
    playerRow.appendChild(Playercard);
}


 
