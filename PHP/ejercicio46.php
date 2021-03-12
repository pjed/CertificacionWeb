<!DOCTYPE html>
<!-- Tabla de 4x4 con las potencias de los 4 primeros numeros con el tamaño de la tabla como constante -->
<html>
    <head>
        <title>Ejercicio45</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Tabla Potencias</h1>
        <table border="1">
            <?php
            define("TAM", 4);
            
            /**
             * Función que te calcula la potencia
             * @param type $base base
             * @param type $exp exponente
             * @return type resultado
             */
            function potencia($base, $exp){
                return pow($base, $exp);
            }
            
            $resultado = 0;
            for ($fila = 1; $fila <= TAM; $fila++) {

                //Pintar las filas pares de gris
                if ($fila % 2 == 0) {
                    echo "<tr bgcolor='lightgrey';>\n";
                } else {
                    echo "<tr>\n";
                }

                for ($columna = 1; $columna <= TAM; $columna++) {
                    $resultado = potencia($fila, $columna);
                    echo "<td>" . $resultado . "</td>\n";
                }
                echo "</tr>\n";
            }
            ?>
        </table>
    </body>
</html>
