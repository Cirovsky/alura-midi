const sons = document.querySelectorAll(".tecla");

function tocarSom (som){
    const verificarsom = document.querySelector(som);
    if (verificarsom != null){
        if(verificarsom.localName ==='audio'){
            return document.querySelector(som).play();
        }else{
            console.log("o elemento selecionado não reproduz áudio");
        }
    }else{
        console.log("o elemento selecionado não existe");
    }
}

for( let t in sons){
    const som = sons[t]
    som.onclick = () => this.tocarSom(`#som_${som.classList[1]}`);
    som.onkeydown = (e) => {
        if(e.code == 'Space' || e.code == 'Enter'){
            som.classList.add("ativa");
        }
    }
    som.onkeyup= ( ) => som.classList.remove("ativa");
}

function teclar (tecla){
    const somCorrespondente = document.getElementById(tecla.code);
    if(somCorrespondente == null){
        return
    }else{
        somCorrespondente.onclick();
        somCorrespondente.classList.add("ativa");
    }
}

function desteclar(tecla){
    const somCorrespondente = document.getElementById(tecla.code);
    if(somCorrespondente == null){
        return
    }else{
        somCorrespondente.classList.remove("ativa");
    }
}

document.body.addEventListener("keydown", (e)=> teclar(e))
document.body.addEventListener("keyup", (e) => desteclar(e))