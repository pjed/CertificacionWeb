Algoritmo ejercicio3
	Definir vector Como Entero
	i=0
	j=0
	N=0
	min=0
	aux=0;		
	N = 5;
	numMaximo = 50
	numMinimo = 1
	Dimension aleatorios[N]	
	
	Escribir "****** VECTOR SIN ORDENAR ******"
	Para i <- 1 hasta N con paso 1 Hacer       
		aleatorios[i] = azar(numMaximo)+numMinimo
		Escribir aleatorios[i] " "      
	FinPara
	Escribir "";
	Para i = 1 hasta N con paso 1 Hacer       
		min = i;       
		Para j=i+1 Hasta N Con Paso 1 Hacer           
			Si aleatorios[j] < aleatorios[min] Entonces
				min = j
			Fin Si           
		FinPara       
		aux = aleatorios[i]
		aleatorios[i] = aleatorios[min]
		aleatorios[min] = aux;       
	FinPara
	
	Escribir "****** ORDENADO ******"
	Para i <- 1 hasta N con paso 1 Hacer       
		Escribir aleatorios[i] " "  
	FinPara
	
FinAlgoritmo
