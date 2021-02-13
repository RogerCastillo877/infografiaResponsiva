<html><!-- Cuando se usa la declaración !DOCTYPE se genera un espacio entre la flecha y el cuerpo -->
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vamos a Marte</title>

    <link href="css/Estilos.css" type="text/css" rel="stylesheet">
    
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' rel='stylesheet' type='text/css'>
    
    <script src="js/jquery-1.11.3.min.js"></script>
        
    <script src="js/main.js" ></script>
</head>
<body>
    <div id="main_container">
        <div id="contents_container">
            <ul class="contents bloque1"><!--
                --><li id="bloque1"  >
                    
                    
                    <div class="graph_block">
                            <img id="fase1_cohete" src="imagenes/cohete.png">
                            <div class="flecha">
                                <img class="flecha_top" src="imagenes/flecha.png">
                                <div class="flecha_bottom"></div>
                            </div>      
                    </div>
                    
                    <div class="info_block">
                        <h1>Fase salida</h1>
                        <p>Ad labore quis si doctrina o ita pariatur id pariatur. Labore doctrina id quorum 
                            varias. Quibusdam eram deserunt deserunt o est mandaremus philosophari. De 
                            offendit ab iudicem, an fore incurreret. Possumus noster vidisse o ex quamquam 
                            ita pariatur. Irure commodo qui nisi amet. Vidisse quem sint ab lorem id nisi 
                            incurreret sempiternum si ex cillum commodo, aut quo nisi eram sunt, labore e 
                            expetendis nam admodum de ipsum do qui magna tamen quorum nescius, aut amet ne 
                            sunt. Ne irure occaecat voluptatibus.</p>
                    </div>

                </li><!--
                --><li id="bloque2" >
                
                    <div class="graph_block">
                        <img id="fase2_curva" src="imagenes/curva.png">
                        <img id="fase2_tierra" src="imagenes/tierra_peq.png">
                        <img id="fase2_marte" src="imagenes/marte.png">
                        <img id="fase2_cohete" src="imagenes/cohete2.png">
                    </div>
                
                    <div class="info_block">
                        <h1>Tránsito</h1>
                        <p>A fabulas reprehenderit. Nisi praetermissum arbitror quis mandaremus ab id 
                            cupidatat ex appellat. Ab minim concursionibus de cillum iis pariatur quo 
                            quorum, si e anim deserunt, litteris comprehenderit a senserit sed quis quo 
                            doctrina ne in fore consectetur o nulla hic cernantur, pariatur consectetur eu 
                            consequat. Quem expetendis te nostrud. Irure possumus singulis, quem 
                            coniunctione incididunt varias quamquam ad tempor non enim, enim ab probant. </p>
                     </div>
                    
                    
                </li><!--
                --><li id="bloque3" >
                
                    <div class="graph_block">
                        <img id="fase3_marte" src="imagenes/marte_fase3.png">
                        <img id="fase3_sonda" src="imagenes/sonda.png">
                    </div>
                
                    <div class="info_block">
                        <h1>Fase Orbital</h1>
                        <p>Dolor voluptate an illustriora, aute nostrud non tamen fore, de e elit malis 
                            anim, ullamco ex culpa probant, a hic quem incurreret nam laboris minim labore 
                            pariatur varias qui tempor enim quamquam iis ex tempor ad excepteur. Legam 
                            laboris litteris eu possumus ab possumus, nisi ea laborum, duis vidisse eiusmod, 
                            non magna quibusdam imitarentur nam si qui irure voluptate iis quorum iudicem 
                            appellat et iis quorum dolor ubi iudicem.</p>
                    </div>
                    
                </li>
            </ul>
         
        <ul class="botonera">
            <li class="active" title="Fase de salida de la atmósfera" data-block="1">
                <div class="cuadro" ></div>
                <div class="rotulo"><span>Fase de salida de la atmósfera</span></div>
            </li>
            <li title="Fase de tránsito entre planetas" data-block="2">
                <div class="cuadro" ></div>
                <div class="rotulo"><span>Fase de tránsito entre planetas</span></div>
            </li>
            <li title="Fase de acercamiento Orbital" data-block="3">
                <div class="cuadro" ></div>
                <div class="rotulo"><span>Fase de acercamiento Orbital</span></div>
            </li>
        </ul>

        </div>
    </div>
    
</body>
</html>
