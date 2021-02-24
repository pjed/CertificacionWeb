Algoritmo menu_programa2
	
		opcion =""
		
		Repetir
			Escribir "----------"
			Escribir "-- MENÚ --"
			Escribir "----------"
			Escribir "1 - Separar letra DNI dado"
			Escribir "2 - Indicar cual es el numero mayor de una serie dada"
			Escribir "3 - Calcular letra DNI dado"
			Escribir "Pulsar S para salir"
			Escribir "                   "
			Escribir "Elija una opción: "
			Leer teclado
			
			si teclado ="1" Entonces
				
				Escribir "---- Separar letra DNI dado ----"
				letra=""
				Escribir "Escribe tu DNI"
				leer teclado
				
				letra = SubCadena(teclado,8,8)
				
				Escribir "La letra de tu dni es " letra
				
				
			SiNo
				si teclado="2" Entonces
					Escribir "---- MAYOR DE LOS NUMEROS ----"
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
				SiNo
					Escribir "--- AVERIGUAR LA LETRA DE TU NUMERO DE DNI ----"
					
					resultado=0
					
					Escribir "Dame tu dni y te digo la letra"
					leer dni
					
					resultado=dni%23
					
					Segun resultado Hacer
						0:
							Escribir "La letra de tu dni " dni " es la T"
						1:
							Escribir "La letra de tu dni " dni " es la R"
						2:
							Escribir "La letra de tu dni " dni " es la W"
						3:
							Escribir "La letra de tu dni " dni " es la A"
						4:
							Escribir "La letra de tu dni " dni " es la G"
						5:
							Escribir "La letra de tu dni " dni " es la M"
						6:
							Escribir "La letra de tu dni " dni " es la Y"
						7:
							Escribir "La letra de tu dni " dni " es la F"
						8:
							Escribir "La letra de tu dni " dni " es la P"
						9:
							Escribir "La letra de tu dni " dni " es la D"
						10:
							Escribir "La letra de tu dni " dni " es la X"
						11:
							Escribir "La letra de tu dni " dni " es la B"
						12:
							Escribir "La letra de tu dni " dni " es la N"
						13:
							Escribir "La letra de tu dni " dni " es la J"
						14:
							Escribir "La letra de tu dni " dni " es la Z"
						15:
							Escribir "La letra de tu dni " dni " es la S"
						16:
							Escribir "La letra de tu dni " dni " es la Q"
						17:
							Escribir "La letra de tu dni " dni " es la V"
						18:
							Escribir "La letra de tu dni " dni " es la H"
						19:
							Escribir "La letra de tu dni " dni " es la L"
						20:
							Escribir "La letra de tu dni " dni " es la C"
						21:
							Escribir "La letra de tu dni " dni " es la K"
						22:
							Escribir "La letra de tu dni " dni " es la E"
					Fin Segun
				FinSi
			FinSi
			
		Hasta Que teclado = "S"
		Escribir "Fin de programa"
		
FinAlgoritmo
