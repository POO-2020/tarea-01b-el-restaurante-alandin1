import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main {
    constructor(){

    }

    pruebaTiempo(){
        let hora = new Tiempo(6, 24, "pm")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
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

    pruebaDireccion () {
        let dir1 = new Direccion("Manuel Acuña", 352, 0, "Lomas", 28000, "Colima", "Colima")
        let dir2 = new Direccion("Ignacio Sandoval", 665, 6, "Lomas", 28000, "Colima", "Colima")
        console.log(dir1.getFormatoCorto())
        console.log(dir1.getFormatoExtend())
        console.log(dir2.getFormatoCorto())
        console.log(dir2.getFormatoExtend())
    }
}

let app = new Main

app.pruebaFecha()
app.pruebaTiempo()
app.pruebaDireccion()