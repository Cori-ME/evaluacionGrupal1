cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
    
}

mostrarCuentas=function(){
    let cmpTabla = document.getElementById("tablaCuentas");
    let tabla = "<table> <tr>" + "<th>NUMERO CUENTA</th>" +
                                 "<th>CEDULA</th>" +
                                 "<th>NOMBRE</th>" +
                                 "<th>SALDO</th>" + " </tr>";
    let elemento;
    for (let i = 0; i < cuentas.length; i++) {
        elemento = cuentas[i];
        tabla += "<tr>" + "<td>" + elemento.numeroCuenta + "</td>" +
            "<td>" + elemento.cedula + "</td>" +
            "<td>" + elemento.nombre+" "+ elemento.apellido + "</td>" +
            "<td>" + elemento.saldo + "</td>" +
            " </tr>";
    }
    tabla += "</table>"
    cmpTabla.innerHTML = tabla
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let elementoCuenta;
    let cuentaEncontrada = null;
    for(let i =0; i< cuentas.length; i++){
        elementoCuenta= cuentas[i];
        if(elementoCuenta.cedula!=numeroCuenta){
            cuentaEncontrada= elementoCuenta;
            break;
        }
    }
    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    let cuenataEncontrada = buscarCuenta(cuenta.numeroCuenta);
    if(cuenataEncontrada!=null){
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");        
        mostrarCuentas();
    }else{
        alert("CUENTA EXISTENTE");
       
    }
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){
    let numcuenta = recuperarTexto("txtCaja1");
    let cedu =recuperarTexto("txtCaja2");
    let nom =recuperarTexto("txtCaja3");
    let ape =recuperarTexto("txtCaja4");
    let sueldo = recuperarTexto("txtCaja5");
    let cuenta = {}
    cuenta.numeroCuenta =numcuenta;
    cuenta.cedula=cedu ;
    cuenta.nombre=nom;
    cuenta.apellido=ape;
    cuenta.saldo=sueldo;
    agregarCuenta(cuenta);
    mostrarCuentas();
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}
