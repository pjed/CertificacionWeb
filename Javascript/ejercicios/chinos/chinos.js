        var nombreJugador = ""
        var chinos_ordenador = 0
        var apuesta_ordenador = 0
        var chinos_jugador = 0
        var apuesta_jugador = 0
        var total_chinos = 0
        var ganador = ""
        var partidas = 3
        var victoria_jugador = 0
        var victoria_maquina = 0

        nombreJugador = prompt("Dime el nombre del jugador");

        while (partidas > 0) {
            document.write("<h3>PARTIDA " + partidas + "</h3><br>");
            document.write("Empieza el juego ..."+ "<br>");
            chinos_jugador = parseInt(prompt("Cuantos chinos tienes " + nombreJugador + "?"));
            document.write(nombreJugador + " elige "+"<br>");
            for(i=0; i<chinos_jugador ; i++){
                document.write("<img src='img/moneda.jpg' alt='' srcset=''>");
            }
            document.write("<br>");

            do {
                chinos_ordenador = parseInt(Math.random() * 4);
            } while (chinos_ordenador === chinos_jugador);

            document.write("Maquina elige "+ "<br>");
            for(i=0; i<chinos_ordenador ; i++){
                document.write("<img src='img/moneda.jpg' alt='' srcset=''>");
            }
            document.write("<br>");
            apuesta_jugador = prompt("Cuantos chinos crees que hay en total (Elige del 0-6) " + nombreJugador + " ?");
            document.write(nombreJugador + " hay en total " + "<br>");
            for(i=0; i<apuesta_jugador ; i++){
                document.write("<img src='img/moneda.jpg' alt='' srcset=''>");
            }
            do {
                apuesta_ordenador = parseInt(Math.random() * 7);
            } while (apuesta_ordenador === apuesta_jugador);

            document.write("<br>"+"Maquina en total" +"<br>")
            for(i=0; i<apuesta_ordenador ; i++){
                document.write("<img src='img/moneda.jpg' alt='' srcset=''>");
            }
            total_chinos = chinos_ordenador + chinos_jugador
            //document.write("Total de chinos en comun de los jugadores "+total_chinos+ "<br>")

            document.write("<br>");
            if (total_chinos == apuesta_ordenador) {
                document.write("GANA"+ "<br>");
                document.write("<br>"+"<img src='img/maquina.gif' alt='' srcset=''>"+ "<br>");
                victoria_maquina += 1
            } else if (total_chinos == apuesta_jugador) {
                document.write("GANA"+ "<br>");
                document.write("<br>"+"<img src='img/jugador.png' alt='' srcset=''>"+ "<br>");
                victoria_jugador += 1
            } else {
                document.write("No gana nadie" + "<br>" + "<br>");
            }
            partidas -= 1
        }

        document.write("<h3>RESULTADO FINAL AL MEJOR DE 3 partidas es </h3>"+ "<br>");

        if(victoria_jugador > victoria_maquina){
            document.write("GANA"+ "<br>");
            document.write("<br>"+"<img src='img/jugador.png' alt='' srcset=''>");
            document.write("<img src='img/victoria.png' alt='' srcset=''>");
        }else 
        
        if (victoria_maquina > victoria_jugador){
            document.write("GANA"+ "<br>");
            document.write("<br>"+"<img src='img/maquina.gif' alt='' srcset=''>");
            document.write("<img src='img/victoria.png' alt='' srcset=''>");
            document.write("<br>");
            
        }else{
            document.write("No hay ganador"+"<br>"+"<br>");
        }

        document.write("<br>"+"EL RESULTADO es: "+"<br>"+ nombreJugador +" -> <span>"+ victoria_jugador+ "</span> - Maquina -><span>"+ victoria_maquina+ "</span><br>");
        document.write("****************************************************"+ "<br>");