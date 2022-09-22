const productos = [
    {nombre: "campari", precio: 1400},
    {nombre: "fernet", precio: 1400},
    {nombre: "ron", precio: 3100},
    {nombre: "vodka", precio: 1100},
    {nombre: "gin", precio: 1700},
    {nombre: "whisky", precio: 3800},
    {nombre: "shampagne", precio: 2000},
    {nombre: "vino", precio: 1200},
    {nombre: "cerveza", precio: 700}
];

let carrito = []

let seleccion = prompt ("Bienvenidos a todo escabio, desea ingresar al shop online?")

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no")
    seleccion = prompt("Bienvenidos a full escabio, desea ingresar al shop online?");
}

if (seleccion == "si"){
    alert ("A continuación le mostraremos los productos disponibles")
    let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert (todoslosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("Gracias ¡te esperamos la próxima!");
}

while (seleccion != "no"){
    let producto = prompt ("Agregá un producto a tu carrito");
    let precio = 0;

    if (producto == "campari" 
    || producto == "fernet" 
    || producto == "ron" 
    || producto == "vodka" 
    || producto == "gin"
    || producto == "whisky"
    || producto == "shampagne"
    || producto == "vino"
    || producto == "cerveza"){
        switch (producto){
            case "campari":
                precio = 1400;
                break;
            case "fernet":
                precio = 1400;
                break;
            case "ron":
                precio = 3100;
                break;
            case "vodka":
                precio = 1100;
                break;
            case "gin":
                precio = 1700;
                break;
            case "whisky":
                precio = 3800;
                break;
            case "shampagne":
                precio = 2000;
                break;
            case "vino":
                precio = 1200;
                break;
            case "cerveza":
                precio = 700;
                break;
            
            default:
                break;
        }
        let unidades = parseInt (prompt ("Ingrese la cantidad de unidades"))
        
        carrito.push({producto, unidades, precio})
        console.log(carrito);
    }else {
        alert ("Producto sin stock")
    }

    seleccion = prompt ("¿Desea seguir comprando?")

    while (seleccion === "no"){
        alert ("Gracias por elegirnos, éste es el resumen de su compra:")
        carrito.forEach(carritoFinal =>{
            alert(`Producto: ${carritoFinal.producto},Unidades: ${carritoFinal.unidades},
            Precio: $ ${carritoFinal.precio}
            , Subtotal Producto: $ ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }   
}
const total = carrito.reduce((total, producto) => total + producto.precio * producto.unidades,0)
alert (`El total a pagar por su compra es: $ ${total}`);