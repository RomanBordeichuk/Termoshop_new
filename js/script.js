// smooth transition

$(document).ready(function(){
    $("a[href='#form']").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// timer

let secondSpanList = document.querySelectorAll(".seconds_span");
let minuteSpanList = document.querySelectorAll(".minutes_span");
let hoursSpanList = document.querySelectorAll(".hours_span");

let currentDate = new Date();

let secondCounter = 86400 - currentDate.getHours() * 3600 -
    currentDate.getMinutes() * 60 - currentDate.getSeconds();

let seconds = secondCounter % 3600 % 60;
let minutes = Math.floor((secondCounter % 3600) / 60);
let hours = Math.floor(secondCounter / 3600);

secondSpanList.forEach((span) =>{
    if(seconds < 10) span.innerText = "0" + seconds;
    else span.innerText = seconds;
});
minuteSpanList.forEach((span) =>{
    if(minutes < 10) span.innerText = "0" + minutes;
    else span.innerText = minutes;
});
hoursSpanList.forEach((span) =>{
    if(hours < 10) span.innerText = "0" + hours;
    else span.innerText = hours;
})

let time = setInterval(() => {  
    seconds -= 1;
    if(seconds < 0) seconds = 59;

    secondSpanList.forEach((span) =>{
        if(seconds < 10) span.innerText = "0" + seconds;
        else span.innerText = seconds;
    });

    if(secondCounter % 60 == 0){
        minutes -= 1;
        if(minutes < 0) minutes = 59;

        minuteSpanList.forEach((span) =>{
            if(minutes < 10) span.innerText = "0" + minutes;
            else span.innerText = minutes;
        });
    }

    if(secondCounter % 3600 == 0){
        hours -= 1;
        if(hours < 0) hours = 7;

        hoursSpanList.forEach((span) =>{
            if(hours < 10) span.innerText = "0" + hours;
            else span.innerText = hours;
        })
    }

    secondCounter -= 1;
    if(secondCounter < 0) secondCounter = 28800;
}, 1000);

// galeries

let imgList = document.querySelectorAll(".img_list img");
let imgListWidth = document.querySelector(".img_list").clientWidth;

imgList.forEach((img) => {
    img.style.width = imgListWidth + "px";
})

let imgInnerListsList = document.querySelectorAll(".img_innerList");
let arrowLeftList = document.querySelectorAll(".arrow_left");
let arrowRightList = document.querySelectorAll(".arrow_right");

function scrollLeft(obj, numImages){
    if(parseInt(obj.style.left) < 0) {
        obj.style.left = parseInt(obj.style.left) + imgListWidth + "px";
    }
}
function scrollRight(obj, numImages){
    if(parseInt(obj.style.left) > -imgListWidth * (numImages - 1)){
        obj.style.left = parseInt(obj.style.left) - imgListWidth + "px";
    }
    if(obj.style.left == ""){
        obj.style.left = -imgListWidth + "px";
    }
}

imgInnerListsList.forEach((list) =>{
    let group = list.classList[1];

    let arrowLeft;
    let arrowRight;

    arrowLeftList.forEach((arrow_left) =>{
        if(arrow_left.classList[2] == group) arrowLeft = arrow_left;
    });
    arrowRightList.forEach((arrow_right) =>{
        if(arrow_right.classList[2] == group) arrowRight = arrow_right;
    });

    arrowLeft.addEventListener("click", () => {
        scrollLeft(list, list.children.length);
    });
    arrowRight.addEventListener("click", () =>{
        scrollRight(list, list.children.length);
    });

});

// hidden block

let hiddenBlock = document.getElementById("hidden_block");
let hiddenBlockButton = document.getElementById("hidden_block_button");

hiddenBlockButton.addEventListener("click", () => {
    hiddenBlock.style.display = "none";
});
