const filas=100;
const columnas=100;
var tablero;

window.onload=function(){
    tablero=document.getElementById("tab");
    for(let i=0;i<filas;i++){
        let tr=document.createElement('tr');
        for(let j=0;j<columnas;j++){
            let td=document.createElement('td');
            td.setAttribute('id',i+'-'+j);
            let valor=Math.random()<0.5?0:1;
            td.setAttribute('value',valor);
            td.setAttribute('class','c'+valor);
            td.setAttribute('onclick','aumentar(this)');
            tr.appendChild(td);
        }
        tablero.appendChild(tr);
    }
};

const max=2;

const aumentar=function(e){
    let num=e.getAttribute('value');
    let nuevo=(parseInt(num)+1)%max;
    e.setAttribute('value',nuevo);
    e.setAttribute('class','c'+nuevo);
};