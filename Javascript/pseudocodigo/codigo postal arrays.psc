Algoritmo arrays_provincias
	provincia=""
	cod = ""
	Dimension provincias[52] 
	provincias[16] = "Cuenca"
	provincias[19] = "Guadalajara"
	provincias[13] = "Ciudad Real"
	provincias[45] = "Toledo"
	
	Escribir "Que provincia quieres saber el Codigo Postal"
	leer codigo_postal
	
	cod = SubCadena(codigo_postal,1,2)
	Escribir "El código postal de " codigo_postal " es de la provincia de " provincias[cod]

FinAlgoritmo
