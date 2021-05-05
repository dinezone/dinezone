<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="author" content="Antal Levenete <antallevemte82@gmail.com> (https://github.com/antallevente-x)">
<meta name="designer" content="Antal Levente <antallevemte82@gmail.com> (https://github.com/antallevente-x)">
<meta name="publisher" content="dinezone.github.io">
<meta name="theme-color" content="#111111">
<meta name="description" content="DineZone - Magyar Szerverközösség">
<meta name="language" content="hungarian">
<meta property="og:title" content="dinezone.github.io">
<meta property="og:site_name" content="DINEZONE.GITHUB.IO">
<meta property="og:type" content="website">
<meta property="og:url" content="https://dinezone.github.io">
<meta property="og:image" content="assets/dzicon">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="DineZone Brand Logo">
<meta property="og:desc" content="DineZone - Magyar Minecraft Szerverközösség">
<meta property="og:locale" content="hu_HU">
<meta property="og:locale:alt" content="hu_HU">
<meta http-equiv="Content-Type" content="text/plain">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<link rel="icon" href="img/dzicon.png" type="image/x-icon"/>
<link rel="shortcut icon" href="img/dzicon.png" type="image/x-icon"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
<link rel="stylesheet" href="https://cdn.minezone.hu/css/chart.css">
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="animate.css">
<link rel="stylesheet" href="footer.css">
<title>DineZone</title>
<script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
<body>
    <div id="preloader"></div>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:rgba(0,0,0,0.75);">
        <div class="container">
            <a href="#" class="nav-brand-text mr-2"><img draggable="false" src="img/dzicon.png" style="width:50px;height:auto;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link smooth_scroll" href="#intro">Kezdőlap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth_scroll" href="#connect">Csatlakozás</a>
                    </li>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth_scroll" href="#footer">Kapcsolat</a>
                    </li>
                    <li class="nav-item text-danger">
                        <a class="nav-link text-danger" href="#">Kliens letöltése</a>
                    </li>
                </ul>
                <div class="ml-auto">
                    <span class="text-light mr-2"><b class="text-danger" id="oc">NaN</b> elérhető játékosok</span>
                    <a href="#"><button class="reg-btn">Bejelentkezés <i class="fas fa-sign-in-alt ml-2"></i></button></a>
                </div>
            </div>
        </div>
    </nav>

    <div class="section" style="min-height:50vh;background-image:url('img/bg_main.png');background-size:cover;background-position:center;background-repeat:no-repeat;">
        <div class="container mx-auto text-left">
            <div class="row">
                <div class="col-md-8 mx-auto text-center" style="margin-top:5em;">
                    <!--<h1 class="hero-title wow zoomIn" data-wow-delay=".5s"><strong>MINE</strong>ZONE</h1>-->
                    <img src="img/dzicon.png" alt="" class="intro-logo" style="height:200px;width:auto;animation:breath 5s ease-in-out alternate infinite;">
                    <h2 class="hero-caption mt-1 wow fadeInUp" data-wow-delay=".6s">Gyorsan regisztrálj egy újonnan létrehozott karaktert,és töltsd le a kliensünket, utána pedig irány a legegyedibb minecraft szerver közösségbe!</h2>
                    <div class="mr-auto mb-5">
                        <a href="#"><button class="play-btn mr-2 text-left"><i class="fas fa-download mr-1"></i> Kliens letöltése</button></a>
                        <a href="#" target="_blank"><button class="webshop-btn text-left">Regisztráció <i class="fas fa-angle-right ml-1"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section" id="connect">
        <div class="container mx-auto text-center">
            <h1 class="red-gradient wow zoomIn" data-wow-delay=".5s"><b>Esetleg új vagy nálunk?</b> Szívesen segítünk amiben csak tudunk!</h1>
            <h2 class="connect-caption wow fadeIn" data-wow-delay=".7s">Mindössze három bizonyos lépést kell megtenned ahhoz,hogy felcsatlakozz a szerverünkre!</h2>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow fadeInLeft" data-wow-delay=".7s" style="border-bottom: 3px solid #000000;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-user-plus mr-1"></i> Csatlakozás</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2><h1></h1>Ahhoz,hogy feltudj csatlakozni a szerverünkre, szükséged lesz a javára,hogy bírd futtatni a minecraft-ot. Ha ez megvan akkor, többjátékos mód lehetőségre kattints rá, utánna pedig szerver hozzáadása, és a következő ip címet kell beírnod ahhoz,hogy feltudj csatlakozni a szerverünkre: <b><a href="#">play.hypenetwork.com</a></b></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow fadeInRight" data-wow-delay="1.3s" style="border-bottom: 3px solid #000000;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-download mr-1"></i> Szükséged van a javára,és a minecraft-ra?!</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2><h1></h1>Következő oldalra irányítva könnyen,és egyszerűen birod telepíteni a javát!     <b><a href="https://java.com/en/">java.com</a></b></h2>
                            <h2><h1></h1>Következő oldalra irányítva könnyen,és egyszerűen birod telepíteni a tört minecraft-ot! <b><a href="https://tlauncher.org/">tlauncher.org</a></b></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow zoomIn" data-wow-delay="1s" style="border-bottom: 3px solid #000000;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-sign-in-alt mr-1"></i> Bejelentkezés</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2><h1></h1>Csatlakozz fel szerverünkre és regisztrálj be! <b>/register jelszó jelszó</b>paranccsal tudsz beregisztrálni. Ezt követően <h1></h1><b>/login jelszó</b> paranccsal tudsz majd belépni. Jelszavadat ne add meg senkinek!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section" id="webshop">
        <div class="container">
            <div class="col-md-8 text-left">
                <h1 class="red-gradient wow fadeInRight"><i class="fas fa-angle-double-right mr-1"></i> WebShop:</h1>
                <h4 class="wow zoomInDown">Szeretnéd megnézni milyen fizetős rangok érhetőek el, és egyéb kiegészítők?</h4>
                <a href="#" target="_blank"><button class="play-btn mt-3"><i class="fas fa-shopping-cart mr-1"></i> Megtekintés</button></a>
            </div>
        </div>
    </div>

    <!DOCTYPE html>
    <html lang="en">
    <link rel="icon" type="image/png" sizes="2000x2000" href="assets/img/sword-logo.png">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/minecraftiaregular.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.css">
    <link rel="stylesheet" href="assets/css/Navigation-with-Button.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/F19537---Timeline.css">
    <link rel="stylesheet" href="assets/css/ms-style.css">
    <link rel="shortcut icon" href="assets/img/dzicon.png" />
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
    <body style="background: #7c5e42;">
    <div class="container">
    <div class="row align-items-center">
    </div>
    </section>
    </div>
    </div>
    </section>
    <section class="py-4" style="background: url(&quot;assets/img/polished_blackstone_bricks.png&quot;) center / contain;image-rendering: pixelated;  image-rendering: crisp-edges;">
    </div>
    </div>
    </section>    
    <section id="particles-js">
    <div class="container" style="z-index: 10;">
    <div class="row">
    <div class="col-12">
    <div class="time-container left">
    <div class="time-content">
    <h2>Szerver létrejötte</h2>
    <p>A DineZone Szerverünk hivatalosan is megnyitotta kapuit. Új közösségre vágysz? Esetleg új és egyedi szervert szeretnél kipróbálni,és a későbbiekben már folyamat játszani is rajta? A DineZone csak rád vár! Gyere és csatlakozz hozzánk!<br>Szerverünk IP Címe: play.dinezone.hu <br>Szerverünk felcsatlakozható verzió számai: 1.7.X - 1.16.5</p>
    </div>
    </div>
    <div class="time-container right">
    <div class="time-content">
    <h2>Új lények</h2>
    <p>Harcolj az új szörnyekkel és barátkozz meg az új állatokkal.<br>Fedezd fel a Minecraft világát a segítségünkkel. Még varázslatosabbá tesszük a játékélményedet a saját modjainkkal.</p>
    </div>
    </div>
    <div class="time-container left">
    <div class="time-content">
    <h2>Új élmény</h2>
    <p>Hihetetlen mértékekben változtatja meg az élményt, ez a MineSide, mivel a játék teljes kihasználtságát vesszük alapúl, hogy nektek tényleg csak játszani kelljen.</p>
    </div>
    </div>
    <div class="time-container right">
    <div class="time-content">
    <h2>Új kliens</h2>
    <p>Kliensünk segítségével számtalan pluszt tudunk vinni a játékba.<br>Mint például egyedi modok, kiegészítők és akár, hogy betudjátok jelölni a barátjaitokat és tudtok velük beszélgetni.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="py-4" style="background: url(&quot;assets/img/polished_blackstone_bricks.png&quot;) center / contain;image-rendering: pixelated;  image-rendering: crisp-edges;">
    </div>
    </div>
    </section>
    <div id="footer" class="section">
        <div class="container row mx-auto">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Nyilatkozott:</h1>
                <h2 class="footer-caption">Antal Levente is not in any way affiliated with or supported by Minecraft, Mojang AB and/or Microsoft.</h2>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Dokumentumok</h1>
                <ul style="list-style-type: none;">
                    <li><a class="footer-url" href="file:///C:/Users/sweeatly/Documents/dinezone-aszf.pdf" target="_blank">Általános Szerződési Feltételek</a></li>
                    <li><a class="footer-url" href="#" target="_blank">Szabályzat - hamarosan</a></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Elérhetőségek</h1>
                <ul style="list-style-type: none;">
                    <h2 class="footer-caption">Facebook: <a href="https://www.facebook.com/dineezone" class="footer-url" target="_blank">@dineezone</a></h2>
                    <h2 class="footer-caption">Discord: <a href="#" class="footer-url" target="_blank">discord.io/dinezone</a></h2>
                    <h2 class="footer-caption">E-mail: antallevemte82@gmail.com</span></a></h2>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Szerver adatok</h1>
                <h2 class="footer-caption">Szerver Vezetője: Antal Levente</h2>
                <h2 class="footer-caption">n/a</h2>
                <h2 class="footer-caption">Szerver létrejötte: 2021.05.04.</h2>
            </div>
        </div>
        <div class="text-center mx-auto footer-bottom mt-5">
            <p class="footer-bottom-copyright">2020-<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> &copy; Antal Levente - Minden jog fenntartva.</p>
            <div class="footer-bottom-credits">
                <p>A weboldalt készítette: <a href="https://github.com/antallevente-x" target="_blank">real_ScareIOS</a></p>
            </div>
        </div>
    </div>
    <script src="https://cdn.minezone.hu/js/jquery.js"></script>
    <script src="https://cdn.minezone.hu/js/popper.js"></script>
    <script src="https://cdn.minezone.hu/js/bootstrap.js"></script>
    <script src="https://cdn.minezone.hu/js/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <script src="wow.min.js"></script>
    <script src="main.js"></script>
    <script>
        new WOW().init();
    </script>
<script type="text/javascript">(function(){window['__CF$cv$params']={r:'64a0b7251c00fca9',m:'04963a4848e831328cccac0a4000ae5123b28f9f-1620120679-1800-Ac59V18/XpqeQHsMJJdDwhg7UlfRr9sBuNaSrlD4eu10La07Rx4kACb6nUDgm0bKL4kLNbxUZigwnpVHRUTBwN4JCXy5w+h7Lae93WE2d+/ivdbOHyFVIRK5muwnnS/iZQ==',s:[0x72b50572da,0x6ecbc993ea],}})();</script></body>
</html>
