let d = new Date();
let time = d.toLocaleTimeString();
setInterval(printtime, 1000);
function printtime(){
  console.log(time);
}
