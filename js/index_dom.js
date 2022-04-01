import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitakClock,alarm } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webcam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import SearchFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d=document; 

d.addEventListener("DOMContentLoaded",(e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitakClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
  countdown("countdown","Jun 26,2022 12:50:10","Feliz Dia 🐞");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia("youtube","(min-width:1024px)",
  `<a href="https://youtu.be/2V_uAAAH-_Q" target="_blank" rel="noopener">Ver video</a>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/2V_uAAAH-_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps","(min-width:1024px)",
  `<a href="https://g.page/canyoncountyhistory?share" target="_blank" rel="noopener">Ver Mapa</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184969.60254678078!2d-116.5793045726526!3d43.58259102674946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae4c698d363dff%3A0xc29a10cc5a237278!2sCanyon%20County%20Historical%20Society&#39;s%20Nampa%20Train%20Depot%20Museum!5e0!3m2!1ses!2sco!4v1645068090160!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
  SearchFilters(".card-filter",".card");
  draw("#winner-btn",".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
  speechReader();
  
});
d.addEventListener("keydown",(e)=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
});
darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
