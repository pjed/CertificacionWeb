Algoritmo ejercicio5
	fecha = ""
	
	Escribir "Dame el mes de la fecha que quieras (PE: 02) y te dire que mes y cuantos dias tiene"
	leer fecha
	
	Repetir
		si pago != "1" o pago != "2" o pago != "3"  Entonces
			Escribir "ERROR, seleccione una opción correcta"
		FinSi
		Escribir " ****** Seleccione una fecha de pago ******* "
		Escribir ""
		Escribir "1.- 30 Dias"
		Escribir "2.- 60 Dias"
		Escribir "3.- 90 Dias"
		Escribir ""
		Escribir "Elija una opción"
		leer pago
	Hasta Que pago = "1" o pago = "2" o pago = "3"  
	
	Segun fecha Hacer
		"1":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Febrero" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Marzo" 	
				SiNo
					Escribir "La fecha de vencimiento es en Abril" 	
				FinSi
			FinSi
		"2":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Marzo" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Abril" 	
				SiNo
					Escribir "La fecha de vencimiento es en Mayo" 	
				FinSi
			FinSi
		"3":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Abril" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Mayo" 	
				SiNo
					Escribir "La fecha de vencimiento es en Junio" 	
				FinSi
			FinSi
		"4":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Mayo" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Junio" 	
				SiNo
					Escribir "La fecha de vencimiento es en Julio" 	
				FinSi
			FinSi
		"5":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Junio" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Julio" 	
				SiNo
					Escribir "La fecha de vencimiento es en Agosto" 	
				FinSi
			FinSi
		"6":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Julio" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Agosto" 	
				SiNo
					Escribir "La fecha de vencimiento es en Septiembre" 	
				FinSi
			FinSi
		"7":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Agosto" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Septiembre" 	
				SiNo
					Escribir "La fecha de vencimiento es en Octubre" 	
				FinSi
			FinSi
		"8":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Septiembre" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Octubre" 	
				SiNo
					Escribir "La fecha de vencimiento es en Noviembre" 	
				FinSi
			FinSi
		"9":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Octubre" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Noviembre" 	
				SiNo
					Escribir "La fecha de vencimiento es en Diciembre" 	
				FinSi
			FinSi
		"10":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Noviembre" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Diciembre" 	
				SiNo
					Escribir "La fecha de vencimiento es en Enero de 2022" 	
				FinSi
			FinSi
		"11":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Diciembre" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Enero de 2022" 	
				SiNo
					Escribir "La fecha de vencimiento es en Febrero de 2022" 	
				FinSi
			FinSi
		"12":
			si pago="1" Entonces
				Escribir "La fecha de vencimiento es en Enero de 2022" 
			sino 
				si pago ="2" Entonces
					Escribir "La fecha de vencimiento es en Febrero de 2022" 	
				SiNo
					Escribir "La fecha de vencimiento es en Marzo de 2022" 	
				FinSi
			FinSi
	Fin Segun
FinAlgoritmo
