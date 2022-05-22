function precioTotal () {
    let cantidad = document.getElementById ("cantidad").value
    let tipo = document.getElementById ("seleccionar").value
    let precioa = 40
    let preciob = 100
    let precioc = 170
        if (tipo == "1"){
           vale = (cantidad*precioa)
        }
        else if (tipo == "2") {
            vale = (cantidad*preciob)
        } 
        
        else if (tipo == "3") {
            vale = (cantidad*precioc)
        }
        document.getElementById("total").innerHTML = "Total a Pagar $ " + vale
      }
      document.getElementById("resumen").onclick = precioTotal;