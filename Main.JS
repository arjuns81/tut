canvas=
Document.GetElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas=document.getElementById
ctx.stroke();
widthofline=3 
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var positionx,positiony;
color="red";
widthofline=3;

canvas.addEventListener("mouseup",mouse_up);
    function mouse_up(e){
         mouseevent="mouseup";
    }
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    currentX=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){ 
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(positionx,positiony);
ctx.lineTo(currentX,currenty);
ctx.stroke();
    }
    positionx=currentX;
    positiony=currenty;
}


