function redo(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
} setInterval(redo, 1000);
