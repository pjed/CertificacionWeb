Algoritmo tienda_existencias
	precioPan = 0.9
	precioLeche = 1
	almacenPan = 20
	almacenLeche = 30
	almacen = 0
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
					tipo ="pan"
					si cantidad <= almacenPan Entonces
						total=total+(cantidad*precioPan)+(cantidad*precioPan)*iva
						factura = factura + "***** Pan ***** | ** "+ConvertirATexto(cantidad)+" Unidades ** | ****** "+ConvertirATexto((cantidad*precioPan))+" Euros ***** |  "+ConvertirATexto((cantidad*precioPan)*iva)+" Euros | *** "+ConvertirATexto((cantidad*precioPan)+(cantidad*precioPan)*iva)+" Euros ***"
						
						almacenPan = almacenPan - cantidad
						
						Escribir "Unidades restantes de " tipo " existentes en el almacen " almacenPan
					SiNo
						si almacenPan=0 Entonces
							Escribir "No hay pan"
						SiNo
							Escribir "No hay " cantidad " existencias de " tipo " quedan " almacenPan
						FinSi
					FinSi
				SiNo
					si teclado="2" Entonces
						tipo ="leche"
						si cantidad <= almacenLeche Entonces
							total=total+(cantidad*precioPan)+(cantidad*precioPan)*iva
							factura = factura + "***** Leche ***** | ** "+ConvertirATexto(cantidad)+" Unidades ** | ****** "+ConvertirATexto((cantidad*precioPan))+" Euros ***** |  "+ConvertirATexto((cantidad*precioPan)*iva)+" Euros | *** "+ConvertirATexto((cantidad*precioPan)+(cantidad*precioPan)*iva)+" Euros ***"
							
							almacenLeche = almacenLeche - cantidad
							
							Escribir "Unidades restantes de " tipo " existentes en el almacen " almacenLeche
						SiNo
							si almacenLeche=0 Entonces
								Escribir "No hay leche"
							SiNo
								Escribir "No hay " cantidad " existencias de " tipo " quedan " almacenLeche
							FinSi
						FinSi
					FinSi
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
