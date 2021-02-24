Algoritmo mayor_numeros
	v = 0
	Repetir
		Escribir "Escribe un numero"
		leer num
		
		si num > v Entonces
			v = num
		FinSi
		
		Escribir "¿Quieres seguir introduciendo numeros (s/n)? "
		Leer opcion
	Hasta Que opcion = "n"
	
	Escribir "El numero mayor que has introducido es " v
FinAlgoritmo
