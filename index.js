objArray =[
  {
    name:"AWOMOLO ADEKEMI",
    qualification:"Full Stack Developer",
  },
  {
    name:"TEMITOPE AGBAJE",
    qualification:"Full Stack Developer",
    
  },
  {
    name:"SONIO OTIONO ",
    qualification:"Full Stack Developer",
  },
  {
    name:"DESOLA OLUSEYE",
    qualification:"Full Stack",
  },
  {
    name:"OLUWADUNSIN OLAJIDE",
    qualification: "Full Stack Developer",
  }
];

function getFields(input, field){
  var output=[];
  for(var i=0; i < input.length; ++i)
  output.push(input[i][field]);
  return output;
}
let result = objArray.map(({name}) => name);
let desult = objArray.map(({qualification}) =>qualification);



let ausers = document.getElementById("sis").innerHTML = result[0] + "<br>"+ desult[0];

let mini1 = document.getElementById('siss').innerHTML = result[1] + "<br>" + desult[1];
let user1 = document.getElementById('swss').innerHTML = result[2] + "<br>" + desult[2];
let user3 = document.getElementById('sins').innerHTML = result[3] + "<br>" + desult[3];
let mini11 = document.getElementById('sils').innerHTML = result[4] + "<br>" + desult[4];



var img = document.createElement("img");
img.src="Kemio.jpeg";
img.style.width ='480px';
img.style.height= '500px';
var src= document.getElementById("x");
src.appendChild(img);

var img = document.createElement("img");
img.src="tope.jpeg";
img.style.width ='480px';
img.style.height= '500px';
var src= document.getElementById("y");
src.appendChild(img);

var img = document.createElement("img");
img.src="sonio.jpeg";
img.style.width ='480px';
img.style.height= '500px';
var src= document.getElementById("z");
src.appendChild(img);

var img = document.createElement("img");
img.src="desola.jpeg";
img.style.width ='480px';
img.style.height= '500px';
var src= document.getElementById("a");
src.appendChild(img);

var img = document.createElement("img");
img.src="dunsin.jpeg";
img.style.width ='480px';
img.style.height= '500px';
var src= document.getElementById("b");
src.appendChild(img);

/*let ausers = document.getElementById("sis").innerHTML = result[0] + "<br>"+ desult[0];
let mini1 = document.getElementById('siss').innerHTML = result[1] + "<br>" + desult[1];
let user1 = document.getElementById('swss').innerHTML = result[2] + "<br>" + desult[2];
let user3 = document.getElementById('sins').innerHTML = result[3] + "<br>" + desult[3];
let mini11 = document.getElementById('sils').innerHTML = result[4] + "<br>" + desult[4];*/



