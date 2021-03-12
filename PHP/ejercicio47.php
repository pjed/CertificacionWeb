<!DOCTYPE html>
<!-- Tabla de 4x4 con las potencias de los 4 primeros numeros con el tamaño de la tabla como constante -->
<html>
    <head>
        <title>Ejercicio47</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Vector 10 primeros numeros pares y pintarlos</h1>
        <table border="1">
            <?php
            define("TAM", 10);
            echo "Array declarado ...<br><br>";
            $numeros = Array();

            //Rellenar el array con los 10 primeros numeros 
            for ($i = 0; $i < TAM; $i++) {
                $numeros[$i] = $i*2;
            }
            echo "Array lleno con " . count($numeros) . " elementos.<br><br>";

            //Pintar los numeros pares
            echo "Pintamos el array con los numeros pares.<br><br>";
            echo "<tr>\n";
            foreach ($numeros as $numero) {
                //Pintar las filas pares de gris
                if ($numero % 2 == 0) {
                    echo "<td>" . $numero . "</td>\n";
                }
            }

            echo "</tr>\n";
            ?>
        </table>
    </body>
</html>
