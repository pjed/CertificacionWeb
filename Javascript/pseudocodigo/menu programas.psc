Algoritmo cadena
	opcion =""
	
	Repetir
		Escribir "----------"
		Escribir "-- MENÚ --"
		Escribir "----------"
		Escribir "1 - Primera opcion"
		Escribir "2 - Segunda opcion"
		Escribir "Pulsar S para salir"
		Escribir "                   "
		Escribir "Elija una opción: "
		Leer teclado
		
		si teclado ="1" Entonces
			Escribir "---- TABLA DE MULTIPLICAR ----"
			Repetir 
				Escribir "Numero de la tabla de multiplicar"
				leer tabla
				Para  i=0 hasta 10 Con Paso 1 Hacer
					Escribir tabla " * " i " = " tabla*i
				FinPara
				Escribir "Quieres otra tabla (pulse s/n)"
				Leer teclado
			Hasta Que teclado="n"	
		SiNo
			si teclado="2" Entonces
				Escribir "---- LOGIN DE USUARIO ----"
				teclado=""
				contador=3
				
				Repetir
					Escribir "Escribe la contraseña"
					Leer teclado
					contador=contador-1
					
					si teclado="alioli"
						Escribir "bienvenido al programa alioli"
						Escribir "Te han sobrado " contador " intentos"
					SiNo
						Escribir "Intentos: " contador
						si contador=0
							Escribir "has superado el numero de intentos intentelo mas tarde"
						SiNo
							Escribir "contraseña incorrecta"
						FinSi
					FinSi
					
				Hasta Que teclado="alioli" o contador <= 0
			FinSi
		FinSi
		
	Hasta Que teclado = "S"
	Escribir "Fin de programa"
	
FinAlgoritmo
