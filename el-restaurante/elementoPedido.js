import Precio from "./precio.js"
export default class elementoPedido {
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad =cantidad
    }
    getDescripcion(){
        let precioF = this.cantidad * this.producto.precio.valor
        return `${this.cantidad} * ${this.producto.nombre} $${new Intl.NumberFormat("en-US").format(precioF)}`
    }
}