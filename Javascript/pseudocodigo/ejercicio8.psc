Algoritmo ejercicio8
	n_conductor = 5
	n_dias = 7
	kmsMin = 10
	kmsMax = 300
	Dimension nombres_conductor[n_conductor]
	
	Para i=1 Hasta n_conductor Con Paso 1 Hacer
		Escribir "Dame el nombre del conductor: "
		leer teclado
		nombres_conductor[i] = teclado
	Fin Para
	
	Dimension kms[n_conductor, n_dias]
	
	Dimension total_kms[n_conductor]
	
	Escribir "Rellenar matriz de kms"
	Para i=1 Hasta n_conductor Con Paso 1 Hacer
		Para j=1 Hasta n_dias Con Paso 1 Hacer
			kms[i, j] = Azar(kmsMax) + kmsMin
			contador = contador + kms[i, j]
		FinPara
		total_kms[i] = contador
	Fin Para
	
	contador = 0
	aux = ""
	Escribir "***** Mostrar KMS CONDUCTORES *****"
	Escribir "Conductor  "
	Para i=1 Hasta n_conductor Con Paso 1 Hacer
		Escribir Sin Saltar nombres_conductor[i] " ->     "
		Para j=1 Hasta n_dias Con Paso 1 Hacer
			Escribir Sin Saltar ConvertirATexto(kms[i, j]) + " | "
		FinPara
		Escribir "Total -> " total_kms[i] " kms"
	Fin Para
	
	
FinAlgoritmo
