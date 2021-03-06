var images;
var usedImages;

//Estas variables se inicializan en begin();
var aciertos;
var errores;

var level = 1;
var correctSrc;
var nCorrects;
var stopCounting;
var timelap;
var lap;
var src = './assets/images/aat2/';
var radioBotones = document.getElementsByName("nivel");

function begin() {
    document.getElementById("begin").style.display = "none"
    stopCounting = false;
    displaySave(false);
    timelap = 0;
    lap = 1;
    nCorrects = 0;
    images = [["nCirculo.PNG","nCirculoCirculo.PNG","nCirculoEstrella.PNG","nEstrella.PNG","nEstrella8.PNG", "nEstrella12.PNG","nTick.PNG"],
    ["rCirculo.PNG","rCirculoCirculo.PNG","rCirculoEstrella.PNG","rEstrella.PNG","rEstrella8.PNG", "rEstrella12.PNG","rTick.PNG"]];

    usedImages = null;
    document.getElementById("aciertos").value = 0;
    document.getElementById("errores").value = 0;
    aciertos = 0;
    errores = 0;
    assingKey();
    for (var i=1;i<=40;i++) {
        (function(ind) {
                setTimeout(function(){assign(ind);lap=ind;}, timelap *ind);
        })(i);
    }

    for(var i = 0; i < radioBotones.length; i++){
      radioBotones[i].disabled = true;
    }
}

function setLevel(n){
    level = n;
    document.getElementById("level").value = n;
}

function assingKey(){
    var imgrow;
    var imgcol = Math.floor(Math.random()*7);
    usedImages = images;
    if(level == 1 || level == 2){
        timelap = 500;
    }
    else{
        timelap = 0;
    }
    if(level == 1 || level == 3){
        imgrow = 1;
    }
    if(level == 2 || level == 4 || level == 5){
        imgrow = 0;
    }

    usedImages[0][imgcol] = images[imgrow][imgcol];
    //Asigna una src correcta de manera global
    correctSrc = src + images[imgrow][imgcol];
    document.getElementById("0").src = correctSrc;
    document.getElementById("0").style.display = "table";
}

function assign(i){
    var n = Math.floor(Math.random() * 7);
    var assigned = src + usedImages[0][n];
    document.getElementById(i).src = assigned;
    document.getElementById(i).style.display = "table";
    if (correctSrc == assigned)
        nCorrects++
}

function validate(id, src) {
  splitsrc = src.split('/');
  //Hace un split porque originalmente la src que toma desde el html esta como file//:C//Documents...... y pues no coincide
  justsrc = splitsrc[splitsrc.length-1];
  //Compara los src de cada imagen
  splitcrrct = correctSrc.split('/');

  justcrrct = splitcrrct[splitcrrct.length-1];
  if(justsrc == justcrrct){
      count(true);
      makedisappear(id)
  }
  else{
      count(false);
      swal('Error');
  }

  // Si ya se acabaron los estimulos clave termina el ejercicio y despliega el boton "Guardar Resultados"
  // nCorrects lo asigna al empezar, son el numero de estimulos correctos

  if ((aciertos == nCorrects)&&(lap == "40")) {
      displaySave(true);
      stopCounting = true;
  }

}

function count(r){
    //Stopcounting sirve para que deje de contar cuando se acabe el ejercicio
    if(!stopCounting){
        if(r)
            aciertos++
        else
            errores++
    }

    document.getElementById("aciertos").value = aciertos;
    document.getElementById("errores").value = errores;
}

function makedisappear(id){
    document.getElementById(id).src = "";
    document.getElementById(id).style.display = "none";
}

function displaySave(bool){
    if(bool)
        document.getElementById("save-results").style.display = "flex"
    else
        document.getElementById("save-results").style.display = "none"
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + aciertos, "Errores: " + errores);

    for(var i = 1; i<=40;i++){
        document.getElementById(i).src = "";
        document.getElementById(i).style.display = "none";
    }
    document.getElementById("0").style.display = "none";
    document.getElementById("begin").style.display = "table";
    document.getElementById("save-results").style.display = "none";
    document.getElementById("aciertos").value = "0";
    document.getElementById("errores").value = "0";
    for(var i = 0; i < radioBotones.length; i++){
      radioBotones[i].disabled = false;
    }
    return;
}
