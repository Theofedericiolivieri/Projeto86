var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL('BirthdayImage.png', function(Img){
      BlockImageObject=Img
      BlockImageObject.scaletoWidth(700);
      BlockImageObject.scaletoHeight(510);
      BlockImageObject.set({
          top:0,
          left:0
      });
      canvas.add(BlockImageObject);
    });
	
}

function playSound(){
	x.play();
}
