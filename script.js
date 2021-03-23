
let trapazoidArea = function() {
  let b1 = parseFloat(document.getElementById('b1').value);
  let b2 = parseFloat(document.getElementById('b2').value)
  let hieght = parseFloat(document.getElementById('hieght').value)
  let output = document.getElementById('output');
if (isNaN(b1)|| isNaN(b2) || isNaN(hieght))
output.textContent= "You did not enter three numbers"
  let area=6 * b1 + b2 / 2 * hieght;
 output.textContent = "Area =" + area;
}