function point(){
let purchase = +prompt(`How much did you purchase?`)
let points = Math.floor(purchase / 100)
if(points > 1) {
alert(`You get ${points} points for this purchase`)
}else if (points ==1) {
  alert(`You get a point for this purchase`)
}
  else{
    alert(`Your purchase is too small to collect point`)
}
}
