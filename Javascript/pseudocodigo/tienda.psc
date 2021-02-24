Algoritmo tienda
	precioPan = 0.9
	precioLeche = 1
	total=0
	iva=0.21
	factura = "*** Producto *** | *** Cantidad *** | *** Importe Bruto *** | *** IVA *** | *** Importe Neto *** "+""
		Repetir
		
			Escribir "------------------"
			Escribir "----- TIENDA -----"
			Escribir "------------------"
			Escribir "1 - Mostrar articulos"
			Escribir "                     "
			Escribir "Pulsa s para salir"
			
			Escribir "Elija una opción"
			leer opcion
			
			
			Repetir
				Escribir "------------------"
				Escribir "--- PRODUCTOS ----"
				Escribir "------------------"
				Escribir "1 - Pan"
				Escribir "2 - Leche"
				Escribir "                     "
				Escribir "¿Que desea comprar?"
				Escribir "Elija una opción"
				Escribir "                     "
				Escribir "Pulsa s si no quiere comprar mas productos"
				leer teclado
				
				si teclado<>"s" Entonces
					Escribir "¿Cuantos quiere? Escriba una cantidad"
					leer cantidad
					
					si teclado="1" Entonces
						total=total+(cantidad*precioPan)+(cantidad*precioPan)*iva
						factura = factura + "***** Pan ***** | ** "+ConvertirATexto(cantidad)+" Unidades ** | ****** "+ConvertirATexto((cantidad*precioPan))+" Euros ***** |  "+ConvertirATexto((cantidad*precioPan)*iva)+" Euros | *** "+ConvertirATexto((cantidad*precioPan)+(cantidad*precioPan)*iva)+" Euros ***"
					SiNo
						factura = factura + "***** Leche ***** | ** "+ConvertirATexto(cantidad)+" Unidades ** | ***** "+ConvertirATexto((cantidad*precioLeche))+" Euros ***** |  "+ConvertirATexto((cantidad*precioLeche)*iva)+" Euros | *** "+ConvertirATexto((cantidad*precioLeche)+(cantidad*precioLeche)*iva)+" Euros ***"
						total=total+(cantidad*precioLeche)+(cantidad*precioLeche)*iva
					FinSi
				FinSi
				
			Hasta Que teclado="s"
			
			Escribir factura
			Escribir "El total del carrito es " total
			
			Escribir "                     "
			Escribir "Si quiere seguir comprando pulse cualquier opcion menos la opción s que es para salir del programa"
			leer opcion
			
	
		Hasta Que opcion="s"
		
		Escribir "Fin de programa"
FinAlgoritmo
