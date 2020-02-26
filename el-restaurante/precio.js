export default class Precio {
    /**
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor
    }
    getPrecio(){
        return `$${new Intl.NumberFormat("en-UA").format(this.valor)}`
    }
}