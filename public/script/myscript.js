console.log("linked!")
require('dotenv').config();
const randomApiKey = process.env.RANDOM_API_KEY;
const todayApiKey = process.env.TODAY_API_KEY;


numcheck=document.getElementById('NumCheck');  // works
numcheck.addEventListener('click',changeText);

function changeText(){  // works
    console.log("clicked button")
    //numcheck=num.value
    req = new XMLHttpRequest;
    req.addEventListener('load',getResponse);
    //req.open("GET", "http://numbersapi.com/"+numcheck+"/math?json");  // numbersapi
    req.open("GET", randomApiKey)
    req.send();
}

function getResponse(){  // works
    console.log("got fact")
    indata = JSON.parse(this.response);
    console.log(indata);
    console.log(indata.text);
    document.getElementById("fact").innerHTML=indata.text;
}

// pt2
numcheck2=document.getElementById('NumCheck2');  // works
numcheck2.addEventListener('click',changeText2);

function changeText2(){  // works
    console.log("clicked button 2")
    req = new XMLHttpRequest;
    req.addEventListener('load',getResponse2);
    req.open("GET", todayApiKey)
    req.send();
}

function getResponse2(){  // works
    console.log("got fact 2")
    indata = JSON.parse(this.response);
    console.log(indata);
    console.log(indata.text);
    document.getElementById("fact2").innerHTML=indata.text;
}