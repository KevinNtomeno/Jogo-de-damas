window.onload = function () {



    let box = document.querySelectorAll("td");
    let jogadorAtual = "claras";
    let jogadorContrario = "escuras";
    let lista = [[], [], [], [],[], [], [], []];
    let posBox = 0;
    let jogaDenovo = false;
    let modoAtaqueObrigatorio = true;

    for (let i = 0; i < box.length; i++){
        box[i].addEventListener("click", () => {
            clicar(i);
        });
    }

    for (let i = 0; i < lista.length; i++){
        for( let j = 0; j < 8; j++){
            lista[i][j] = box[posBox]
            posBox++;
        }
    }

    for( let i = 0; i < lista.length; i++){
        for (let j = 0; j < 8; j++){
            if((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)){
                lista[i][j].setAttribute("tipoDeQuadrado", "preto");

                if(i < 3){
                    lista[i][j].setAttribute("tipoBola", "escuras");
                    lista[i][j].innerHTML = `<div class="escuras"> </div>`;
                    lista[i][j].setAttribute("temBola", 1);
                }else if(i > 4){
                    lista[i][j].setAttribute("tipoBola", "claras");
                    lista[i][j].innerHTML = `<div class="claras"></div>`;
                    lista[i][j].setAttribute("temBola", 1);
                }
            }
        }
    }













};