Algoritmo primitiva_norepe
	desdeNum = 1
	hastaNum = 49
	tamano=6
	Definir numeros_sinrepe como entero 
	Dimension numeros_sinrepe[tamano]
	
	Para i=1 Hasta 6 Con Paso 1 Hacer
		numeros_sinrepe[i] = 10
	Fin Para
	
	Para i=1 Hasta tamano Con Paso 1 Hacer
		Repetir
			n = Azar(hastaNum)+desdeNum
		Hasta Que !comprobarSiContiene(numeros_sinrepe,i,n)
		Escribir "Aleatorio: " n
		numeros_sinrepe[i] = n
	Fin Para
	
	Para i=1 Hasta 6 Con Paso 1 Hacer
		Escribir "Numeros " numeros_sinrepe[i]
	Fin Para
FinAlgoritmo

SubProceso dev <- comprobarSiContiene (numeros_sinrepe, indice, val)
	Escribir "i: " indice " valor: " val
	Para i=1 Hasta indice Con Paso 1 Hacer
		si numeros_sinrepe[i] = val Entonces
			Escribir numeros_sinrepe[i] " == " val
			Escribir numeros_sinrepe[i] = val
			dev <- verdadero
		FinSi
	Fin Para
	dev <- Falso
FinSubProceso
	