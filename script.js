
var trapazoidArea=function() {
var b1= parseFloat(document.getElementById('b1').value);
var b2= parseFloat(document.getElementById('b2').value);
var hieght= parseFloat(document.getElementById('hieght').value);

var output=document.getElementById('output');
if(isNaN(b1)|| isNaN(b2) || isNaN(hieght))
output.textContent="You did not enter three numbers"
var area=6*b1+b2/2*hieght;
output.textContent = "Area =" + area;
}

