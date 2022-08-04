function arranca () {
    var estado = false
    num = document.getElementById("num").value;
    num == "00:00" ? estado=false : estado=true;
    document.getElementById("num").innerHTML = "00:01"
}