<!DOCTYPE html>
<!-- Formulario envio -->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Formulario PHP</title>
    </head>
    <body>
        <h1>Formulario Registro</h1>
        <form action="servidor.php" method="post">
            <span>Introduce la cantidad de euros: </span><input type="text" id="euros" name="euros" size="10" placeholder="Euros"><br><br>
            <input type="submit" id="enviar" name="enviar" value="Enviar">
            <input type="reset" id="limpiar" name="limpiar" value="Limpiar">
        </form>
    </body>
</html>
