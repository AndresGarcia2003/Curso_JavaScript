import hamburgerMenu from "./dom/menu_Hamburguesa.js";
import { digitakClock,alarm } from "./dom/reloj.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
  hamburgerMenu(".panel-btn",".panel","menu a");
  digitakClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
})
