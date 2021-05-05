
<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="author" content="Adrián Asztrik <adiihsub@gmail.com> (adiih.eu)">
<meta name="designer" content="Adrián Asztrik <adiihsub@gmail.com> (adiih.eu)">
<meta name="publisher" content="MineZone.hu">
<meta name="theme-color" content="#111111">
<meta name="description" content="MineZone - Magyar Minecraft Szerverközösség">
<meta name="language" content="hungarian">
<meta property="og:title" content="MINEZONE.hu">
<meta property="og:site_name" content="MINEZONE.hu">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.minezone.hu">
<meta property="og:image" content="https://www.minezone.hu/assets/favicon.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="MineZone Brand Logo">
<meta property="og:desc" content="MineZone - Magyar Minecraft Szerverközösség">
<meta property="og:locale" content="hu_HU">
<meta property="og:locale:alt" content="hu_HU">
<meta http-equiv="Content-Type" content="text/plain">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<link rel="icon" href="https://cdn.minezone.hu/img/ficon.png" type="image/x-icon"/>
<link rel="shortcut icon" href="https://cdn.minezone.hu/img/ficon.png" type="image/x-icon"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
<link rel="stylesheet" href="https://cdn.minezone.hu/css/chart.css">
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="animate.css">
<link rel="stylesheet" href="footer.css">
<title>MineZone</title>
<script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
<body>
    <div id="preloader"></div>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:rgba(0,0,0,0.75);">
        <div class="container">
            <a href="#" class="nav-brand-text mr-2"><img draggable="false" src="https://cdn.minezone.hu/img/mzicon.png" style="width:50px;height:auto;"></a>
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
                    <li class="nav-item">
                        <a class="nav-link smooth_scroll" href="#news">Hírek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth_scroll" href="#footer">Kapcsolat</a>
                    </li>
                    <li class="nav-item text-danger">
                        <a class="nav-link text-danger" href="https://kliens.minezone.hu/">Kliens letöltése</a>
                    </li>
                </ul>
                <div class="ml-auto">
                    <span class="text-light mr-2"><b class="text-danger" id="oc">NaN</b> online játékos</span>
                    <a href="https://bolt.minezone.hu"><button class="reg-btn">Bejelentkezés <i class="fas fa-sign-in-alt ml-2"></i></button></a>
                </div>
            </div>
        </div>
    </nav>

    <div class="section" style="min-height:50vh;background-image:url('https://cdn.minezone.hu/img/bg_main.png');background-size:cover;background-position:center;background-repeat:no-repeat;">
        <div class="container mx-auto text-left">
            <div class="row">
                <div class="col-md-8 mx-auto text-center" style="margin-top:5em;">
                    <!--<h1 class="hero-title wow zoomIn" data-wow-delay=".5s"><strong>MINE</strong>ZONE</h1>-->
                    <img src="https://cdn.minezone.hu/img/mzicon.png" alt="" class="intro-logo" style="height:200px;width:auto;animation:breath 5s ease-in-out alternate infinite;">
                    <h2 class="hero-caption mt-1 wow fadeInUp" data-wow-delay=".6s">Töltsd le a kliensünket, és irány a végtelen kalandok tárháza Magyarország legfeltörekvőbb szerverén!</h2>
                    <div class="mr-auto mb-5">
                        <a href="https://kliens.minezone.hu"><button class="play-btn mr-2 text-left"><i class="fas fa-download mr-1"></i> Kliens letöltése</button></a>
                        <a href="https://bolt.minezone.hu/auth/registration" target="_blank"><button class="webshop-btn text-left">Regisztráció <i class="fas fa-angle-right ml-1"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section" id="connect">
        <div class="container mx-auto text-center">
            <h1 class="red-gradient wow zoomIn" data-wow-delay=".5s"><b>Kezdő vagy?</b> Szívesen segítünk!</h1>
            <h2 class="connect-caption wow fadeIn" data-wow-delay=".7s">Mindössze három egyszerű lépést kell megtenned az önfeledt játék érdekében!</h2>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow fadeInLeft" data-wow-delay=".7s" style="border-bottom: 3px solid #ff4242;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-user-plus mr-1"></i> Regisztráció</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2>A játék elkezdéséhez regisztrációra van szükség, ami a <b><a href="https://bolt.minezone.hu/auth/registration">bolt.minezone.hu</a></b> webhelyen hajtható végre. Az ott található mezők mindegyikét töltsd ki a helyes adataiddal és már be is regisztráltál!</h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow fadeInRight" data-wow-delay="1.3s" style="border-bottom: 3px solid #ff4242;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-download mr-1"></i> Kliens letöltése</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2>A csatlakozáshoz a MineZone Launcher-re lesz szükséged, aminek a telepítőjét a <b><a href="https://kliens.minezone.hu/">kliens.minezone.hu</a></b> oldalon találhatod meg.</h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div class="connect-card mx-auto wow zoomIn" data-wow-delay="1s" style="border-bottom: 3px solid #ff4242;">
                        <div class="connect-card-header">
                            <h1 class="red-gradient"><i class="fas fa-sign-in-alt mr-1"></i> Bejelentkezés</h1>
                        </div>
                        <div class="connect-card-body">
                            <h2>Indítsd el a launchert, jelentkezz be a főképernyőn, kattints a <b>Játék indítása</b> gombra, és már mehet is a játék! Különböző modokat is ajánlunk annak érdekében, hogy a megfelelő élménnyel és teljesítménnyel játszhass nálunk.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section" id="webshop">
        <div class="container">
            <div class="col-md-8 text-left">
                <h1 class="red-gradient wow fadeInRight"><i class="fas fa-angle-double-right mr-1"></i> Légy különleges!</h1>
                <h4 class="wow zoomInDown">Vásárolj <b class="red-gradient">menő</b> rangokat és kiegészítőket a webshopban, ezzel a saját karaktered fejlődését alapozod meg, és közben még a szerver működését is támogatod!</h4>
                <a href="https://bolt.minezone.hu/" target="_blank"><button class="play-btn mt-3"><i class="fas fa-shopping-cart mr-1"></i> Vásárlás</button></a>
            </div>
        </div>
    </div>

    <div class="section" id="news">
        <div class="container mx-auto">
            <h1 class="red-gradient text-center font-weight-bold wow zoomIn"><i class="fas fa-clock mr-1"></i> Aktuális</h1>
            <h2 class="news-caption wow fadeIn">Kíváncsi vagy, hogy mi történik velünk? Olvasd el a legfrissebb, rólunk szóló híreket!</h2>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 wow zoomInRight">
                    <div class="news-card mx-auto" id="news1" style="background-image:url('https://cdn.minezone.hu/img/news1-bg.png');background-size:cover;background-repeat:no-repeat;">
                        <span class="news-date">2020.12.23.</span>
                        <p class="news-title">MineZone Kliens</p>
                        <p>Elkészült a szerver saját kliense, ami a kliens.minezone.hu oldalról tölthető le. Ennek segítségével a legújabb mechanikákat tudtunk behozni a játékélménybe, új szerverekkel kibővítve.</p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 wow zoomInRight">
                    <div class="news-card mx-auto" id="news2" style="background-image:url('https://cdn.minezone.hu/img/news2-bg.png');background-size:cover;background-repeat:no-repeat;">
                        <span class="news-date">2020.12.23.</span>
                        <p class="news-title">Vadonatúj szerverek</p>
                        <p>Hatalmas újdonságokkal készültünk számotokra az új verziók adottságaival, vadonatúj szerverekkel és új kalandokkal! Ilyen játékélményben még garantáltan nem volt részed eddig. Próbáld ki az megújult szervereinket még ma!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="footer" class="section">
        <div class="container row mx-auto">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Disclaimer</h1>
                <h2 class="footer-caption">Nagy Judit EV. is not in any way affiliated with or supported by Minecraft, Mojang AB and/or Microsoft.</h2>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Dokumentumok</h1>
                <ul style="list-style-type: none;">
                    <li><a class="footer-url" href="https://minezone.hu/docs/aszf.pdf" target="_blank">Általános Szerződési Feltételek</a></li>
                    <li><a class="footer-url" href="https://minezone.hu/docs/adatvedelmi.pdf" target="_blank">Adatvédelmi Nyilatkozat</a></li>
                    <li><a class="footer-url" href="https://minezone.hu/docs/szabalyzat.pdf" target="_blank">Szabályzat</a></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Elérhetőségek</h1>
                <ul style="list-style-type: none;">
                    <h2 class="footer-caption">Facebook: <a href="https://fb.minezone.hu/" class="footer-url" target="_blank">@huminezone</a></h2>
                    <h2 class="footer-caption">Discord: <a href="https://dc.minezone.hu/" class="footer-url" target="_blank">dc.minezone.hu</a></h2>
                    <h2 class="footer-caption">TeamSpeak: <a href="ts3server://ts.minezone.hu" class="footer-url" target="_blank">ts.minezone.hu</a></h2>
                    <h2 class="footer-caption">E-mail: <a href="/cdn-cgi/l/email-protection#b1d8dfd7def1dcd8dfd4cbdedfd49fd9c4" class="footer-url" target="_blank"><span class="__cf_email__" data-cfemail="e980878f86a98480878c9386878cc7819c">[email&#160;protected]</span></a></h2>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-1">
                <h1 class="footer-title">Cégadatok</h1>
                <h2 class="footer-caption">Nagy Judit EV.</h2>
                <h2 class="footer-caption">Adószám: HU 69641174-1-33</h2>
                <h2 class="footer-caption">Nyilvántartási szám: 53476166</h2>
            </div>
        </div>
        <div class="text-center mx-auto footer-bottom mt-5">
            <p class="footer-bottom-copyright">2020-<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> &copy; Nagy Judit EV. - Minden jog fenntartva.</p>
            <div class="footer-bottom-credits">
                <p>A weboldalt készítette: <a href="https://github.com/AdiihYT" target="_blank">AdiihYT</a></p>
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
<script type="text/javascript">(function(){window['__CF$cv$params']={r:'64abc9ceee327d06',m:'92a4b229c38638ef21ff53b5cdb4fcb51592f580-1620236787-1800-AYFfgk3y8LMp3QBSzExMYqgbR077goaThooLNngEj0QdMjL4m+A+eDbv0L5YF6piswFXpeLBs2ZFb2h8U/DcxgVcMxkFH5rT1msR/R7XpyMVfUiwANSTzFUISTZvjOourQ==',s:[0x74ff7c740e,0xd59fac33cf],}})();</script></body>
</html>