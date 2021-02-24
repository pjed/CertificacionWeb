Algoritmo ejercicio1
	n_datos=1
	tamano_datos=5
	tamanio=5
	contador = 5
	Dimension v_normal[tamanio]
	Dimension v_reves[tamanio]
	
	Mientras n_datos <= tamano_datos
		Escribir "Escribe la palabra que quieras"
		Leer teclado
		v_normal[n_datos] = teclado
		n_datos = n_datos + 1
	FinMientras
	
	Para i=1 Hasta 5 Con Paso 1 Hacer
		v_reves[contador]=v_normal[i]
		contador = contador-1
	Fin Para
	
	Escribir "******** Vector lectura normal ********"
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		Escribir "El vector tiene: " v_normal[i]
	Fin Para
	
	Escribir "******** Vector lectura al revés ********"
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		Escribir "El vector tiene: " v_reves[i]
	Fin Para
FinAlgoritmo
