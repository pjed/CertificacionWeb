Algoritmo primitiva
	tamanio = 6
	
	Dimension maquina[tamanio]
	Dimension jugador[tamanio]
	
	alea = 0
	num = 0
	
	Para i=1 Hasta 6 Con Paso 1 Hacer
		alea = Azar(49)+1
		maquina[i]=alea
	Fin Para
	
	Para i=1 Hasta 6 Con Paso 1 Hacer
		Repetir
			si num <= 49 y num > 0 Entonces
				Escribir "Numero comprendido entre 1 y 49"
				leer num
				Escribir "Escribes el numero " num
			SiNo
				Escribir "Numero erroneo, Dame un numero comprendido entre 1 y 49"
				leer num
				Escribir "Numero erroneo, Escribes el numero " num
			FinSi
		Hasta Que num <= 49 y num > 0
		
		jugador[i]=num
	Fin Para
	
	Escribir "******* Números Maquina ********"
	Para i=1 Hasta 6 Con Paso 1 Hacer
		Escribir "Números Maquina " maquina[i]
	Fin Para
	Escribir "********************************"
	
	Escribir "******* Números Jugador ********"
	Para i=1 Hasta 6 Con Paso 1 Hacer
		Escribir "Números Jugador " jugador[i]
	Fin Para
	Escribir "********************************"
	
	Escribir "************* SORTEO ***********"
	Para i=1 Hasta 6 Con Paso 1 Hacer
		si maquina[i] = jugador[i] Entonces
			aciertos = aciertos + 1
		FinSi
	FinPara
	Escribir "Has acertado " aciertos " aciertos"
	si aciertos = 6 Entonces
		Escribir "eres millonario"
	SiNo
		si aciertos = 5 Entonces
			Escribir "eres menos millonario"
		sino
			si aciertos = 4 Entonces
				Escribir "eres poco millonario"
			SiNo
				si aciertos = 3 Entonces
					Escribir "eres un pelao"
				SiNo
					si aciertos=3 Entonces
						Escribir "no tienes ni pa un viaje"
					SiNo
						si aciertos=2 Entonces
							Escribir "no tienes ni pa pipas"
						SiNo
							si aciertos=1 Entonces
								Escribir "no tienes naaa"
							SiNo
								Escribir "eres un pelao prueba mas suerte"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
	
	
	
FinAlgoritmo
