// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
     document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
     document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
     document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
     document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
     document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}








// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    length = (rise ** 2 + run ** 2) ** 0.5;
    return(length.toFixed(2));
}

function getSlope(x1 , y1 , x2, y2){
//slope is rise/ run 

let rise = y2-y1;
let run = x2-x1;
slope = rise/run;
return (slope.toFixed(2));

}

function getDescription(x1, y1, x2 , y2){

    let slope =(y2-y1)/(x2-x1);

if(slope == 1){
    return("y=x")
}else if (slope > 0 ){
return("Slope is postivie")
}else if ( slope < 0){
    return("Slope is negitive")
}

}

function getPointLocation(x,y,x2,x2){

    if(x>0 && y>0){
        return("Quadrant 1")
    }else if (x<0 && y>0){
        return("Quardrant 2")
    }else if (x<0 && y<0){
    return("Quadrant")
    }else if (x>0 && y<0){
        return("Quadrant 4")
    }

    if(x2>0 && y2>0){
        return("Quadrant 1")
    }else if (x2<0 && y2>0){
        return("Quardrant 2")
    }else if (x2<0 && y2<0){
    return("Quadrant 3")
    }else if (x2>0 && y2<0){
        return("Quadrant 4")
    }

}


function getEquation(x,y,x2,y2){
//y=mx+b
//y-k = m(x-h)

mSlope = (y2-y)/(x2-x);

XM = mSlope*x;

if(XM< 0){
    var b=y-XM
}else if (0 < XM){
  var b=y+XM
}

b;
mSlope= mSlope.toFixed(2);
return("y=" + mSlope + "x + " + b);
}