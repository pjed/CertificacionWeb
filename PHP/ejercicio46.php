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
            define("tam_tabla", 5);
            
            $num = 0;
            for ($fila = 1; $fila <= tam_tabla; $fila++) {

                //Pintar las filas pares de gris
                if ($fila % 2 == 0) {
                    echo "<tr bgcolor='lightgrey';>\n";
                } else {
                    echo "<tr>\n";
                }

                for ($columna = 1; $columna <= tam_tabla; $columna++) {
                    $num = potencia($fila, $columna);
                    echo "<td>" . $num . "</td>\n";
                }
                echo "</tr>\n";
            }
            
            function potencia($base, $exp){
                return pow($base, $exp);
            }
            ?>
        </table>
    </body>
</html>
