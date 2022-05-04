colour="black";
width_of_line=2;
var last_position_of_mouse_x, last_position_of_mouse_y;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var width=screen.width;

new_width=screen.width - 70;
new_height=screen.height - 300;
if (width<992) {
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").heigth=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
console.log("mytouchstart")
colour=document.getElementById("colour").value;
width_of_line=document.getElementById("width_of_line").value;

last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e){

    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=1;   

    console.log("last positions of x and y cordinates are: ");
    console.log("x= "+ last_position_of_x+" y= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current positions of x and y cordinates are: ");
    console.log("x= "+ current_position_of_x+" y= "+current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y); 

    ctx.stroke();
    
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}