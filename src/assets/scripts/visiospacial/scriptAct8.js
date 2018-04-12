// Crear el canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.getElementById("caballero").appendChild(canvas);

// Poner el background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "./assets/images/avs8/escenario2.png";

// Imagen del personaje principal
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "./assets/images/avs8/hero.png";

// Imagen del mounstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "./assets/images/avs8/monster.png";

// Objetos que apareceran en el canvas
var hero = {
	speed: 256 // movimiento en pixeles
};
var monster = {};
var monstersCaught = 0;
var error = 0;

// Obtener datos del teclado
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Resetear cuando atrapes al monstruo
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	//El monstruo se va a un lugar random
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

//El update
var update = function (modifier) {
	if (38 in keysDown) { // Flecha arriba
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { //Flecha abajo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Flecha Izquierda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { //Flecha derecha
		hero.x += hero.speed * modifier;
	}

	//Colision
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)


	) {
		++monstersCaught;
		reset();
	}
	if(hero.x > 512 || hero.y > 480 || hero.x < 0 || hero.y < 0){
		++error;
		reset();
	}
};

//Imprimir en canvas
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	// Score
	ctx.fillStyle = "black";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";

	ctx.fillText("Puntos: " + monstersCaught, 60, 64);
	ctx.fillText("Errores: " + error, 200, 64);
};

// Loop del juego
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	requestAnimationFrame(main);
};

// Librerias
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Correr los metodos}
var then = Date.now();
function iniciar(){
	reset();
main();
var acti = setTimeout(function(){mostrarResultados();},60000);

}
//iniciar();
function mostrarResultados(){
	document.getElementById("caballero").style.visibility = "hidden";
	document.getElementById("save-results").style.display = "table";
	document.getElementById("resultadosBox").style.visibility="visible";
}

function instrucciones(){
	swal(
		{
			title: "Instrucciones",
			text: " Tienes 60 segundos para la actividad , use las Flechas 'Arriba' ↑, 'Abajo' ↓, 'Izquierda' ← y 'Derecha' → para mover al caballero, cada vez que alcanze al monstruo se reiniciara su posicion.",
			dangerMode: true,
		}
	)
	.then(willDelete => {
			if (willDelete) {
				iniciar();
			}
		}
	);
 	//swal("Use las Flechas 'Arriba' ↑, 'Abajo' ↓, 'Izquierda' ← y 'Derecha' → para mover al caballero, cada vez que alcanze al monstruo se reiniciara su posicion.");
	//iniciar();
}

function jugar(){
 	document.getElementById("caballero").style.visibility = "visible";
 	document.getElementById("resultadosBox").style.visibility = "hidden";
	document.getElementById("save-results").style.display = "none";
	document.getElementById("jugarBtn").style.display = "none";
 	iniciar();
}

function saveResults(){
    //aquí es donde despliega los resultados
    swal("Aciertos: " + monstersCaught, "Errores: " + error);
    document.getElementById("save-results").style.display = "none";
	document.getElementById("jugarBtn").style.display = "table";
    monstersCaught = 0;
	error = 0;
    return;
}
