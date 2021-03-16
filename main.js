var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
var steve_y=10;
var steve_x=10;
var block_object="";
var steve_object="";

function steve_update(){
    fabric.Image.fromURL("Steve.png",function(Img){
steve_object=Img;
steve_object.scaleToWidth(150);
steve_object.scaleToHeight(150);
steve_object.set({top:steve_y,left:steve_x});
canvas.add(steve_object);
    });
    
}
function Blocks_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({top:steve_y,left:steve_x});
canvas.add(block_object);
    });
    
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypress1=e.keyCode;
    console.log(keypress1);
    if(keypress1="80" && e.shiftKey==true){
        console.log("shift");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress1="77" && e.shiftKey==true){
        console.log("shift");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress1=="38"){
        up();
        console.log("up");

    }
    if(keypress1=="39"){
        right();
        console.log("right");

    } 
    if(keypress1=="40"){
        down();
        console.log("down");

    }
    if(keypress1=="37"){
        left();
        console.log("left");

    }
    if(keypress1=="71"){
        Blocks_update("gilled black stone.png");
        console.log("gilled black stone.png");
    }
    if(keypress1=="76"){
        Blocks_update("glass pane.png");
        console.log("glass pane.png");
    }

}
