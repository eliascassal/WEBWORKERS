var num ;
self.addEventListener("message", function(e){
    num = e.data;
})
function sumar(){
    num++;
    postMessage(num);
}
setInterval("sumar()", 500);