Algoritmo ejercicio2
	numNotas = 1
	tamanio = 5 
	sumaNotas = 0
	mediaNotas = 0
	notaAlta = 0
	notaBaja = 0
	aux = 0
	Dimension total_notas[tamanio]
	
	Mientras (numNotas <= 5)
		Repetir
			Escribir "Escribe una nota comprendida entre 0 y 10"
			leer nota
			si (nota < 0 o nota > 10) Entonces
				Escribir "Error en el numero, Escribe una nota comprendida entre 0 y 10"
			FinSi
		Hasta Que (nota >= 0 y nota <= 10)
		total_notas[numNotas] = nota
		sumaNotas = sumaNotas + nota
		numNotas = numNotas + 1 
	FinMientras
	
	Escribir "*****************************"
	Escribir "**** VER TODAS LAS NOTAS ****"
	Escribir "*****************************"
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		Escribir "Nota " i " calificacion " total_notas[i]
	Fin Para
	
	mediaNotas = sumaNotas / tamanio
	Escribir "La nota media de todas las notas anteriores es de " mediaNotas
	
	
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		si total_notas[i] > aux Entonces
			aux = total_notas[i]
			notaAlta = aux
		FinSi
	Fin Para
	
	Escribir "La nota MAS ALTA de todas las notas anteriores es de " notaAlta
	
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		si total_notas[i] < aux Entonces
			aux = total_notas[i]
			notaBaja = aux
		FinSi
	Fin Para
	
	Escribir "La nota MAS BAJA de todas las notas anteriores es de " notaBaja
	
	
	
	
FinAlgoritmo
