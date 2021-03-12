<!DOCTYPE html>
<!-- Ejercicios tabla de multiplicar con las filas pintadas en varios colores. -->
<html>
    <head>
        <title>Ejercicio44</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Tabla con números</h1>
        <table border="1">
            <?php
            $num = 1;
            for ($fila = 1; $fila <= 10; $fila++) {
                
                //Pintar las filas pares de gris
                if ($fila % 2 == 0) {
                    echo "<tr bgcolor='lightgrey';>\n";
                } else {
                    echo "<tr>\n";
                }

                for ($columna = 1; $columna <= 10; $columna++) {
                    echo "<td>" . $num . "</td>\n";
                    $num++;
                }
                echo "</tr>\n";
            }
            ?>
        </table>
    </body>
</html>
