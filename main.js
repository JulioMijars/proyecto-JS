//alert();

let vidaSpiderman = 100;
let vidaIronman = 100;

const MIN_POWER = 5;
const MAX_POWER = 25;

while (vidaSpiderman > 0 && vidaIronman > 0){
    let golpeSpiderman = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    let golpeIronman = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

    console.log("------------------------------------");

    if (golpeSpiderman > golpeIronman) {
        console.log("Spiderman ataca con un golpe de " + golpeSpiderman);
        vidaIronman -= golpeSpiderman;
        if (vidaIronman < 0){
            vidaIronman = 0;
        }
        console.log("La vida de Ironman baja a " + vidaIronman);
}   else {
        console.log("Ironman ataca con un golpe de " + golpeIronman);
        vidaSpiderman -= golpeIronman;
        if (vidaSpiderman < 0){
            vidaSpiderman = 0;
        }
        console.log("La vida de Spiderman baja a " + vidaSpiderman);
}
}

console.log("------------------GANADOR------------------");

if(vidaSpiderman > 0){
    console.log("Gano Spiderman")
} else {
    console.log("Gano Ironman");
}