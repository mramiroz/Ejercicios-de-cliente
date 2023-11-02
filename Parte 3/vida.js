const avanzar=function(){
    let siguiente=[];
    for(let i=0;i<filas;i++){
        siguiente[i]=[];
        for(let j=0;j<columnas;j++){
            siguiente[i][j]=decidir(i,j);
        }
    }
    aplicar(siguiente);
};

const decidir=function(f,c){
    let vecinos=0;
    let x;
    let y;
    for(let i=-1;i<=1;i++){
        for(let j=-1;j<=1;j++){
            x=f+i;
            y=c+j;
            if (x>=0 && x<filas && y>=0 && y<columnas){                
                vecinos+=parseInt(document.getElementById(''+x+'-'+y).getAttribute('value'));
            }
        }
    }
    vecinos-=parseInt(document.getElementById(''+f+'-'+c).getAttribute('value'));
    if(vecinos==3){
        return 1;
    }
    if(vecinos==2){
        return document.getElementById(''+f+'-'+c).getAttribute('value');
    }
    return 0;
};

const aplicar=function(matriz){
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            let e=tablero.children[i].children[j];
            let valor=matriz[i][j];
            e.setAttribute('value',valor);
            e.setAttribute('class','c'+valor);
        }
    }
};

var intervalo;
const auto=function(){
    intervalo=setInterval(avanzar,100);
};

const parar=function(){
    clearInterval(intervalo);
};