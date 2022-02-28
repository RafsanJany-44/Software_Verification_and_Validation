function Pow(x,a){
    return Math.pow(x,a);
}
function GCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

function Modulo(a,b){
    return a%b;
}

module.exports = {
    Pow,
    Modulo,
    GCD

}