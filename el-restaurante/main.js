import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main {
    constructor(){

    }

    pruebaTiempo(){
        let hora = new Tiempo(6, 24, "pm");
        console.log(hora.getFormato12());
        console.log(hora.getFormato24());
    }

    pruebaFecha () {
        let fecha = new Fecha(15,2,2021)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }
}

let app = new Main

app.pruebaFecha()
app.pruebaTiempo()