function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var horaatual = data.getHours();
    
    msg.innerHTML = `Agora são ${horaatual} horas`;
    
    if (horaatual >= 0 && horaatual < 12) {
        img.src = "assets/manhapronta.gif";
    } else if (horaatual >= 12 && horaatual < 18) {
        img.src = "assets/tardepronta.gif";
    } else {
        img.src = "assets/noitepronta.gif";
    }
}
