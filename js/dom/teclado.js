const d = document;
let x=0,
 y=0;

export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    limitsBall=$ball.getBoundingClientRect(),
    limitsStage=$stage.getBoundingClientRect();
    console.log(e.keycode);

    switch (e.keycode){
      case 37:
      if(limitsBall.left > limitsStage.left){
        e.preventDefault();
        x--;
      }
      break;
      case 38:
      if(limitsBall.top > limitsStage.top){
        e.preventDefault();
        y--; 
      }
      break;
      case 39:
      if(limitsBall.right < limitsStage.right){
        e.preventDefault();
        x++;  
      }  
      break;
      case 40:
      if(limitsBall.buttom < limitsStage.buttom){
        e.preventDefault();
        y++;
      }    
      break;
      default:
        break;
    }
    $ball.style.transform=`translate(${x*10}px,${y*10}px)`; 

}
 
export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keycode);
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);
    // console.log(e);

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