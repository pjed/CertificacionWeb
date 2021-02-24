Algoritmo ejercicio7
	n_dias = 5
	tamanio = n_dias
	i=1
	media=0
	indice_menos_temp = 0
	aux = 0
	Dimension temp_maxima[tamanio]
	Dimension temp_minima[tamanio]
	Dimension temp_media[tamanio]
	
	numTempMax1 = 25
	numTempMin1 = 20
	numTempMax2 = 10
	numTempMin2 = 0
	
	auxTxt = ""
	
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		auxTxt = auxTxt + ConvertirATexto(i) + "     "
	Fin Para
	
	Escribir "Dia:                   " auxTxt
	i=1
	Repetir
		temp_maxima[i] = Azar(numTempMax1)+numTempMin1
		i = i + 1
	Hasta Que i > tamanio
	
	auxTxt = ""
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		auxTxt = auxTxt + ConvertirATexto(temp_maxima[i]) + "    "
	Fin Para
	Escribir "Temperaturas Máximas: " auxTxt
	
	i=1
	auxTxt = ""
	Repetir
		temp_minima[i] = -Azar(numTempMax2)+numTempMin2
		i = i + 1
	Hasta Que i > tamanio
	
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		auxTxt = auxTxt + ConvertirATexto(temp_minima[i]) + "    "
	Fin Para
	Escribir "Temperaturas Mínimas: " auxTxt
	
	auxTxt = ""
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		media = (temp_maxima[i]+temp_minima[i])/2
		temp_media[i] = media
		auxTxt = auxTxt + ConvertirATexto(media) + "   "
	Fin Para
	Escribir "Temperaturas Media:   " auxTxt
	
	aux = temp_minima[1]
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		si temp_minima[i] < aux Entonces
			indice_menos_temp = i
		FinSi
	Fin Para
	
	Escribir "El día con menos temperatura es: " indice_menos_temp " temperatura minima de " temp_minima[indice_menos_temp]
	
	Escribir "Dame una temperatura máxima y te digo que dia coincide con la temperatura que has escrito"
	leer temperatura
	
	aux=0
	Para i=1 Hasta tamanio Con Paso 1 Hacer
		si temp_maxima[i] = temperatura Entonces
			aux = i
		FinSi
	Fin Para
	
	si aux <> 0 Entonces
		Escribir "El dia " aux " es el dia con la temperatura maxima de " temp_maxima[aux] " grados"
	SiNo
		Escribir "No existe ningun dia que coincida con la temperatura introducida por teclado" 
	FinSi
	
FinAlgoritmo
