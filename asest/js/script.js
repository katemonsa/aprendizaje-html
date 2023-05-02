function redirection () {
    if(confirm('estar seguro de pasar a la siguiente pagina' )){
        window.open("https://comsblog886610636.wordpress.com/2022/11/05/%e3%81%a3%e2%97%94%e2%97%a1%e2%97%94%e3%81%a3-%e2%99%a5-selenofilia-%e2%99%a5/","_blanck")
        
    } else{
        alert("continuaras aqui!!!!")
    }
    
}
function mostrar_card_izquierda(){
    let card1= document.getElementById("item1")
    card1.style.display="block"
}

function mostrar_card_derecha(){
    let card2= document.getElementById("item2")
    card2.style.display="block"
}
function cerrar_card(){
    let card1= document.getElementById("item1")
    card1.style.display="none"
}
function cerrar_card2(){
    let card2= document.getElementById("item2")
    card2.style.display="none"
    
}
