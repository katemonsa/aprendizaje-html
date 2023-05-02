function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion (jugada){
    let resultado= ""
    if(jugada==1){
        resultado= "piedra✊"
         }else if(jugada==2){
            resultado=" papel🤚"
        }else if(jugada==3){
            resultado="tijeras ✂"
        }else{
         resultado="elegiste 😵 "
        }
        return resultado
    }
let jugador = 0 
let pc = 0
let victoias = 0
let perdidas = 0

while(victoias<3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("elige: 1 para piedra✊, 2 para papel🤚, 3 para tijeras✂")
    alert("pc eligio"+ eleccion(pc))
    alert("jugador eligio"+ eleccion(jugador))
    if(pc== jugador){
        alert ("Empate")
    } else if(jugador==1 && pc ==3){
        alert(" Ganaste")
        victoias=victoias+1
    }else if(jugador==2 && pc==1){
        alert("Ganaste")
        victoias=victoias+1
    }else if (jugador== 3 && pc == 2){
        alert ("Ganaste")
        victoias=victoias+1
    }else{
        alert("perdiste")
        perdidas=perdidas+1
    }
}
alert("ganaste"+victoias+" veces, perdiste"+ perdidas+" veces")