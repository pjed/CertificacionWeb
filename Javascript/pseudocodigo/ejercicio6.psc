Algoritmo ejercicio6
	Definir nombres Como Caracter
	Definir edad Como Entero
	
	mayor_edad = 18
	
	aux = 0
	indice_aux = 0
	
	n_elementos = 10
	Dimension nombres[n_elementos]
	Dimension edad[n_elementos]
	
	indice = 0
	cuantos = 0
	escape = "*"
	
	Repetir
		Escribir "Dame el nombre del alumno: "
		leer teclado
		si teclado <> escape Entonces
			nombres[indice+1] = teclado
			
			Escribir "Dame la edad del alumno: "
			leer teclado
			edad[indice+1] = ConvertirANumero(teclado)
			
			indice = indice + 1
			cuantos = indice
		FinSi
	Hasta Que teclado = escape 
	
	Escribir "Has añadido " cuantos " alumnos"
	Escribir " ****** MOSTRAR ALUMNOS ****** "
	Para i=1 Hasta cuantos Con Paso 1 Hacer
		Escribir "Nombre: " nombres[i] " Edad: " edad[i]
	Fin Para
	
	Escribir " ****** MOSTRAR MAYORES DE EDAD ****** "
	Para i=1 Hasta cuantos Con Paso 1 Hacer
		si edad[i] > mayor_edad Entonces
			Escribir "Nombre: " nombres[i] " Edad: " edad[i]
		FinSi
	Fin Para
	
	aux = edad[1]
	//Encontrar el alumno mas viejo
	Para i=1 Hasta cuantos Con Paso 1 Hacer
		si edad[i] > aux Entonces
			aux = edad[i]
			indice_aux=i
		FinSi
	Fin Para
	
	Escribir " ******* EL ALUMNO MAS VIEJO ES ******* "
	Escribir " Nombre alumno: " nombres[indice_aux] " Edad: " edad[indice_aux]
	
	aux = 0
	aux = edad[1]
	//Encontrar el alumno mas joven
	Para i=1 Hasta cuantos Con Paso 1 Hacer
		si edad[i] < aux Entonces
			aux = edad[i]
			indice_aux=i
		FinSi
	Fin Para
	
	Escribir " ******* EL ALUMNO MAS JOVEN ES ******* "
	Escribir " Nombre alumno: " nombres[indice_aux] " Edad: " edad[indice_aux]
	
FinAlgoritmo
