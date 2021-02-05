canvas=document.getElementById('myCanvas');
ctx=canvas.getcontext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_backgroundimage = "racing.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_backgroundimage = "racing.jpg";
car2_x = 10;
car2_y = 10;

function car1(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=backgroundimage;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src="car1.png";
}

function car1(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=backgroundimage;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src="car2.png";
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, 800, 600);
}

function uploadcar_1(){
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, 800, 600);
}

function uploadcar_2(){
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38")
{
    up();
    console.log("up arrow key");
}
if(keypressed=="40"){
    down();
    console.log("down arrow key");
}
if(keypressed=="37"){
    left();
    console.log("left arrow key");
}
if(keypressed=="39"){
    right();
    console.log("right arrow key");
}
}

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38")
{
    up();
    console.log("w arrow key");
}
if(keypressed=="40"){
    down();
    console.log("s arrow key");
}
if(keypressed=="37"){
    left();
    console.log("a arrow key");
}
if(keypressed=="39"){
    right();
    console.log("d arrow key");
}
}

