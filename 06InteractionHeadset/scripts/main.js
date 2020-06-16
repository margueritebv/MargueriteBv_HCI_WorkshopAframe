
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.005;
	console.log('left');
});



/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

var shrinkspeed = 0.1;

 function shrink(){
 	myOtherBox.object3D.scale.x *= shrinkspeed;
 	myOtherBox.object3D.scale.y *= shrinkspeed;
 	myOtherBox.object3D.scale.z *= shrinkspeed;
 	console.log(myOtherBox.object3D.scale);
 }

 myOtherBox.addEventListener('click', function(){ // uses a fuse
 	shrink();
 	console.log('grew');
 });