importPackage(java.io);
importPackage(java.lang);

var whereAboutUs = [[0,0]];
var currentPosition_x = 0;
var currentPosition_y = 0;
var direction = "S";
var currentPosition = "e8";
var arr = ["a","b","c","d","e","f","g","h"];

function changeDirection(Direction) {
  switch(Direction){
    case "N":
      direction = "N";
      break;
    case "S":
      direction = "S";
      break;
    case "E":
      direction = "E";
      break;
    case "W":
      direction = "W";
      break;
    case "SE":
      direction = "SE";
      break;
    case "SW":
      direction = "SW";
      break;
    case "NE":
      direction = "NE";
      break;
    case "NW":
      direction = "NW";
      break;
  }
}
function moveForward() {
  switch(direction){
    case "N":
      if(currentPosition_x - 1 < 0){
      	return "error";
      }
      currentPosition_x -= 1;
      break;
    case "S":
      if(currentPosition_x + 1 > 7){
      	return "error";
      }
      currentPosition_x +=  1;
      break;
    case "E":
      if(currentPosition_y + 1 > 7){
      	return "error";
      }
      currentPosition_y +=  1;
      break;
    case "W":
      if(currentPosition_y - 1 < 0){
      	return "error";
      }
      currentPosition_y -=  1;
      break;
    case "SE":
      if(currentPosition_x + 1 > 7 || currentPosition_y + 1 > 7){
      	return "error";
      }
      currentPosition_x +=  1;
      currentPosition_y +=  1;
      break;
    case "SW":
      if(currentPosition_x + 1 > 7 || currentPosition_y - 1 < 0){
      	return "error";
      }
      currentPosition_x +=  1;
      currentPosition_y -=  1;
      break;
    case "NE":
      if(currentPosition_x - 1 < 0 || currentPosition_y + 1 > 7){
      	return "error";
      }
	  currentPosition_x -= 1;
      currentPosition_y +=  1;
      break;
    case "NW":
      if(currentPosition_x - 1 < 0 || currentPosition_y - 1 < 0){
      	return "error";
      }
	  currentPosition_x -= 1;
      currentPosition_y -= 1;
      break;
    default:
      return "directionerror";
  
  }
  return "updated";
}
function jumpMoveDirection(noOfSteps) {
  switch(direction){
    case "N":
      if(currentPosition_x - noOfSteps < 0){
      	return "error";
      }
      currentPosition_x -= noOfSteps;
      break;
    case "S":
      if(currentPosition_x + noOfSteps > 7){
      	return "error";
      }
      currentPosition_x += noOfSteps;
      break;
    case "E":
      if(currentPosition_y + noOfSteps > 7){
      	return "error";
      }
      currentPosition_y += noOfSteps;
      break;
    case "W":
      if(currentPosition_y - noOfSteps < 0){
      	return "error";
      }
      currentPosition_y -= noOfSteps;
      break;
    case "SE":
      if(currentPosition_x + noOfSteps > 7 || currentPosition_y + noOfSteps > 7){
      	return "error";
      }
      currentPosition_x += noOfSteps;
      currentPosition_y += noOfSteps;
      break;
    case "SW":
      if(currentPosition_x + noOfSteps > 7 || currentPosition_y - noOfSteps < 0){
      	return "error";
      }
      currentPosition_x += noOfSteps;
      currentPosition_y -= noOfSteps;
      break;
    case "NE":
      if(currentPosition_x - 1 < 0 || currentPosition_y + 1 > 7){
      	return "error";
      }
	  currentPosition_x -=  1;
      currentPosition_y += 1;
      break;
    case "NW":
      if(currentPosition_x - noOfSteps < 0 || currentPosition_y - noOfSteps < 0){
      	return "error";
      }
	  currentPosition_x -=  noOfSteps;
      currentPosition_y -= noOfSteps;
      break;
    default:
      return "directionerror";
  
  }
  return "updated";
}
function updatePosition() {
  currentPosition = arr[currentPosition_y] + (8-currentPosition_x);
  var position = [currentPosition_x,currentPosition_y];
  whereAboutUs.push(position);
}


var stdin= new BufferedReader(new InputStreamReader(System['in']));
var line = stdin.readLine();
print("Enter no.of testcases")
var test_cases = parseInt(line);
for(var i=0; i<test_cases; i++) {
	var input = stdin.readLine();
	print("Enter direction and number of jumps with a space")
	var elements = input.split(" ");
	var d = String(elements[0]);
	var noOfJumps = parseInt(elements[1]);
    if(noOfJumps == 1){
    	changeDirection(d);
    	if(moveForward()=="error"){
    		print("Invalid Direction");
    	}else{
    	updatePosition();
    	print("Updated Current Position->")
    	print(currentPosition);
    	}
    }else{
    	changeDirection(d);
    	if(jumpMoveDirection(noOfJumps)=="error"){
    		print("Invalid Direction")
    	}
    	else{
    	updatePosition();
    	print("Updated Current Position->",currentPosition())
    	print(currentPosition);
    	}
    }
}
