const dias=[31,28,31,30,31,30,31,31,30,31,30,31];

var hoy=new Date();

var dia=hoy.getDate();
var sem=hoy.getDay();
var mes=hoy.getMonth();

var d1=(sem-dia%7+1)%7;

var cont=(-d1+2)%7;
if(cont>1){
    cont-=7;
}

window.onload=function(){
    while(cont<=dias[mes]){
        let tr=document.createElement('tr');
        for(let j=0;j<7;j++){
            let td=document.createElement('td');
            if(cont>0 & cont<=dias[mes]){
                td.innerHTML = cont;
                if (j>4){
                    td.setAttribute('class','finde');
                }
                if (cont==dia){
                    td.setAttribute('class','hoy');
                }
            }
            tr.appendChild(td);
            cont++;
        }
        document.getElementById('cal').appendChild(tr);
    }
}