Algoritmo password
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
	
	
	
FinAlgoritmo
