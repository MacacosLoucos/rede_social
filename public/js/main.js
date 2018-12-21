var curtidos = [];

curtidos["teste"] = true;
curtidos["teste1"] = true;

function curtir(id){

  
console.log(id);
  if(curtidos[id]){
    document.getElementById(id).innerHTML = "<img src=\"./img/baseline_tag_faces_black_18dp.png\">";
    curtidos[id] = false;
  } else {
    document.getElementById(id).innerHTML = "Curtir";
    curtidos[id] = true;
  }
  
}
