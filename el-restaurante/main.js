import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Pedido from "./pedido.js"
import Cliente from "./cliente.js"

class Main {
    constructor(){
        this.pedido = new Pedido(new Fecha(27,2,2020), new Tiempo(6,34,"pm"), new Cliente("Ana Georgina Landín", new Direccion("Manuel Acuña", 385, 0, "Lomas", 28000, "Colima", "Colima"), 3123045861))
        
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
        let dir2 = new Direccion("Ignacio Sandoval", 665, 9, "Lomas", 28000, "Colima", "Colima")
        console.log(dir1.getFormatoCorto())
        console.log(dir1.getFormatoExtend())
        console.log(dir2.getFormatoCorto())
        console.log(dir2.getFormatoExtend())
    }

    pruebaPrecio() {
        let precio = new Precio(1334.50)
        console.log(precio.getPrecio())
    }

    pruebaProducto() {
        let product = new Producto("Hamburguesa con papas,", new Precio(85.60))
        console.log(product.getDescripcion())
    }

    pruebaElementoPedido() {
        let pedido1 = new ElementoPedido(new Producto("Hamburguesa con papas", new Precio (85.6)), 2)
        console.log(pedido1.getDescripcion())
    }

    pruebaPedido(){
        let elemento = new ElementoPedido(new Producto("Hamburguesa con papas", new Precio (85.6)), 2)
        this.pedido.agregarElemento(elemento)
        console.log(this.pedido.listarElementos())
    }

    pruebaCliente(){
        let cliente = new Cliente("Ana Landín", new Direccion("Ignacio Salndoval", 130, 0, "Centro", 28000, "Colima", "Colima"), 31358605)
        console.log(cliente.getPerfil())
    }
}

let app = new Main

app.pruebaFecha()
app.pruebaTiempo()
app.pruebaDireccion()
app.pruebaPrecio()
app.pruebaProducto()
app.pruebaElementoPedido()
app.pruebaPedido()