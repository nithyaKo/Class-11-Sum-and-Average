var marks = [30,40,45,35];
var sum=0
var average=0
for (var i=0; i<marks.length; i=i+1){
  sum=sum+marks[i]
console.log(marks[i])
console.log(i)
}
console.log("the sum is "+ sum)
console.log("average is "+ sum/marks.length )
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}