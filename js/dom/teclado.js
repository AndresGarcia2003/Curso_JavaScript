const d = document;

export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    const $stage=d.querySelector(stage);
}

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keycode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e);

    if(e.key==="a" && e.altKey){
      alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key==="c" && e.altKey){
      alert("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key==="p" && e.altKey){
      alert("Haz lanzado un aviso con el teclado");
    }

}