cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]


cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    

}
/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){

    let cuenta=recuperarTexto("txtCuenta");
    for(let i=0;i<cuentas,length;i++){
        cuenta=cuentas[i];
        if(isNaN(cuenta)){
             cuenta = {};
               cuenta.numeroCuenta=numeroCuenta,
                cuenta.cedula=cedula,
                cuenta.nombre=nombre,
                cuenta.apellido=apellido,
                cuenta.saldo=saldo;
            

            mostrarTexto("lblErrores"+ cuenta) 
        }else{
           mostrarTexto("lblErrores","CUENTA INEXISTENTE") 
    
        }
        habilitarComponente("btnDepositar");
            habilitarComponente("btnRetirar")
            habilitarComponente("txtMonto");
            habilitarComponente("btnBuscar");
    }
    
}

ejecutarBusqueda=function(){
    
    let numeroCuenta=recuperarInt("txtCuenta");
    
    let resultado;
    resultado=buscarCuenta();
    if(resultado!==null){
        mostrarTexto("lblErrores" ,"FELICIDADES CUENTA ENCONTRADA"+numeroCuenta);
    }else{
        alert("NO SE ENCONTRO LA CUENTA ");
    }

    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
}

depositar=function(numeroCuenta,monto){

    let cuentaAfectada=buscarCuenta(numeroCuenta);
    cuentas.saldo+=monto;

    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

ejecutarDeposito=function(){
    
    let numeroCuenta=recuperarInt("txtCuenta");
    //Toma el numero de cuenta ingresado en la caja de texto
    let monto=recuperarInt("txtMonto");
    //Toma el monto ingresado en la caja de texto
    depositar();
    //invoca a depositar
    alert("TRANSACION EXITOSA");
   
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
}


retirar=function(numeroCuenta,monto){
    let cuentaAfectada=buscarCuenta(numeroCuenta);
    if(isNaN(cuentas.saldo>monto)){
        cuentas.saldo-=monto;
        mostrarTexto("lblErrores", "TRANSACCION EXITOSA" +cuentas.saldo);
    }else{
        alert("SALDO INSUFICIENTE")
    }
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}