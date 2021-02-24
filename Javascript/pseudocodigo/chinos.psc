Algoritmo chinos
	
	nombreJugador = ""
	chinos_ordenador = 0
	apuesta_ordenador = 0
	chinos_jugador = 0
	apuesta_jugador = 0
	total_chinos = 0
	ganador=""
	partidas=3
	victoria_jugador=0
	victoria_maquina=0
	
	Escribir "Dime el nombre del jugador"
	leer nombreJugador
	
	Escribir "INFORMACIÓN GANA EL MEJOR A 3 PARTIDAS"
	
	Mientras partidas > 0 Hacer
		Escribir "************************************"
		Escribir "------- PARTIDA " partidas " -------"
		Escribir "************************************"
		Escribir "Empieza el juego ..."
		Escribir "Cuantos chinos tienes " nombreJugador "?"
		chinos_jugador = azar(4)
		Escribir nombreJugador " elige que tiene en la mano " chinos_jugador " chinos"
		
		Escribir "La maquina elige los chinos" 
		chinos_ordenador = azar(4)
		//Escribir " Maquina elige que tiene en la mano " chinos_ordenador " chinos"
		
		Escribir "Cuantos chinos crees que hay en total (Elige del 0-6) " nombreJugador " ?" 
		apuesta_jugador = azar(7)
		Escribir nombreJugador " elige que hay en total " apuesta_jugador " chinos"
		
		Repetir
			apuesta_ordenador = azar(7)
		Hasta Que apuesta_ordenador <> apuesta_jugador
		Escribir "La apuesta de la maquina es que hay en total " apuesta_ordenador " chinos"
		
		total_chinos = chinos_ordenador+chinos_jugador
		
		si total_chinos = apuesta_ordenador Entonces
			Escribir "La máquina gana la partida"
			victoria_maquina= victoria_maquina+1
		SiNo
			si total_chinos = apuesta_jugador Entonces
				Escribir "El jugador gana la partida"
				victoria_jugador= victoria_jugador+1
			SiNo
				Escribir "No gana nadie"
			FinSi
		FinSi
			
		Escribir ""
		Escribir ""
		Escribir ""
		Escribir ""
		Escribir ""
		partidas = partidas - 1
		Escribir "****************************************************"
	FinMientras
	
	Escribir "**** RESULTADO FINAL AL MEJOR DE 3 partidas es *****"
	Escribir "****************************************************"
	si victoria_jugador>victoria_maquina Entonces
		Escribir "Ha ganado " nombreJugador
	SiNo
		si victoria_maquina > victoria_jugador Entonces
			Escribir "Ha ganado la máquina"
		SiNo
			Escribir "No hay ganador"
		FinSi
	FinSi
	Escribir "EL RESULTADO es: " nombreJugador " ->" victoria_jugador " - Maquina ->" victoria_maquina
	Escribir "****************************************************"
	
FinAlgoritmo
