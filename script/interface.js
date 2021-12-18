//mascaras------------------------------------------

$("#cpf").mask("000.000.000-00");
$("#cnpj").mask("00.000.000/0000-00");
$("#telfixo").mask("(00) 0000-0000");
$("#telefone").mask("(00) 0000-00009");
$("#telefone").blur(function (event) {
       if ($(this).val().length == 15) {
              $("#telefone").mask("(00) 00000-0009")
       } else {
              $("#telefone").mask("(00) 0000-00009")
       }
})

//Nome do Contrato-----------------------------------------------

let proposalName = document.getElementById("proposalName");
let pNEditArea = document.getElementById("pNEditArea");
let pNH1 = document.getElementById("pNH1");
let pNApply = document.getElementById("pNApply");
let pNTextArea = document.getElementById("pNTextArea");
let editTitle = document.getElementById("editTitle");

function showEditPainel() {
       proposalName.removeEventListener("mouseover", showEditTitle);
       editTitle.style.display = "none"
       pNEditArea.style.display = "flex";
       pNH1.style.display = "none";
}

function showEditTitle() {
       if (pNEditArea.style.display != "flex") {
              editTitle.style.display = "block"
       }
}

proposalName.addEventListener("mouseover", showEditTitle);

editTitle.addEventListener("click", showEditPainel);

pNApply.addEventListener("click", () => {
       pNH1.innerText = pNTextArea.value;
       pNEditArea.style = "";
       pNH1.style = "";
       showEditTitle();
})

proposalName.addEventListener("mouseleave", () => {
       editTitle.style.display = "";
       proposalName.addEventListener("mouseover", showEditTitle);
});

//Logo da Impresa---------------------------------------------------

let logoArea = document.getElementById("logoArea")
let file = document.getElementById("imgSelect");
let logo = document.getElementById("LogoEmpresa");
let LogoBtns = document.getElementById("LogoBtns");
let acceptImage = document.getElementById("acceptImage");
let acceptCancel = document.getElementById("acceptCancel");
let logoH1 = document.getElementsByTagName("h1")[1];
let editLogo = document.getElementById("editLogo");
let imgConfirmed = false;
let reader = new FileReader();
let cancel2 = document.getElementById("cancel2")
let oldImg = "";

editLogo.addEventListener("click", () => {
       logoArea.removeEventListener("mouseover", logoEditShow);
       editLogo.style.display = "";
       logoH1.style.display = "";
       logo.style.display = "";
       file.value = "";
       file.style.display = "";
       cancel2.style.display = "block";
       cancel2.addEventListener("click", () => {
              logo.style.display = "block";
              file.style.display = "none";
              cancel2.style.display = "none";
              logoH1.style.display = "none";
              logoArea.addEventListener("mouseover", logoEditShow);
       })
});

function logoEditShow() {
       if (imgConfirmed) {
              editLogo.style.display = "block";
       }
}

logoArea.addEventListener("mouseover", logoEditShow);

logoArea.addEventListener("mouseleave", () => {
       if (imgConfirmed) {
              editLogo.style.display = "";
       }
})

function logoConfirm() {
       logoArea.addEventListener("mouseover", logoEditShow);
       LogoBtns.style.display = "";
       file.style.display = "none";
       editLogo.style.display = "block"
       imgConfirmed = true;
}

function logoCancel() {

       logo.src = "";
       logo.style.display = "";
       file.value = "";
       file.style.display = "";
       LogoBtns.style.display = "";
       logoH1.style.display = "";
}

file.addEventListener("change", () => {

       cancel2.style.display = "";
       logoH1.style.display = "none";

       reader.onload = () => {
              logo.src = reader.result;
       }

       oldImg = 0;
       reader.readAsDataURL(file.files[0]);
       logo.style.display = "block";
       file.style.display = "none";
       LogoBtns.style.display = "block";

       acceptCancel.addEventListener("click", logoCancel);

       acceptImage.addEventListener("click", logoConfirm);
});

//Data do contrato--------------------------

let now = new Date;
let day = now.getDate();
let month = "";
getMonthName();
let year = now.getFullYear();
let dateP = document.getElementById("date");

function getMonthName() {

       let mes = now.getMonth();
       let meses = ["janeiro", "fevereiro", "março", "abril",
              "maio", "junho", "julho", "agosto", "setembro",
              "outubro", "novembro", "dezembro"];
       month = meses[mes];

}

dateP.innerText += " " + day + " de " + month + " de " + year;
dateP.style = "margin-left: calc(100% - " + (dateP.offsetWidth + 50) + "px);"

//modificação de dados de contratante e contratado---------------------------

let dataa = document.getElementById("data");

let contracted = document.getElementById("contracted")
let contractedBtn = document.getElementById("editContracted");
let inputDiv0 = document.getElementById("inputDiv0");
let inputDiv1 = document.getElementById("inputDiv1");
let applyDataBtn = document.getElementById("applyDataBtn");
let fantasyName = "";
let contractedName = "";
let contractedCpf = "";
let bigPEl = document.querySelectorAll(".big-p");
let inputData = document.querySelectorAll(".inputData");
let fantasyNameEl = document.getElementById("fantasyName");

contracted.addEventListener("mouseover", showEditContracttedBtn)

contracted.addEventListener("mouseleave", () => {
       contracted.addEventListener("mouseover", showEditContracttedBtn)
       contractedBtn.style.display = "";
})

function showEditContracttedBtn() {
       contracted.removeEventListener("mouseover", showEditContracttedBtn);
       contractedBtn.style.display = "block";
       contractedBtn.addEventListener("click", clickEditBtn);
}

function clickEditBtn() {

       contractedBtn.removeEventListener("click", clickEditBtn);
       //preciso fazer isso, para quando clicar em editar, o conteudo do item
       //suma e fique apenas o titulo
       let ind = 0;
       fantasyNameEl.innerText = info[ind];
       ind++;
       bigPEl.forEach((p) => {
              if (p.id != "no") {
                     p.innerText = info[ind];
                     ind++
              }
       });
       contractedBtn.style.display = "";
       applyDataBtn.style.display = "block"
       inputDiv0.style.display = "flex";
       inputDiv1.style.display = "flex";
       applyDataBtn.addEventListener("click", () => {
              applyDataBtn.style.display = "";
              inputDiv0.style.display = "";
              inputDiv1.style.display = "";
              contractedBtn.style.display = "block";
              contractedBtn.addEventListener("click", clickEditBtn);
              applyDataContent();
       })
}

function applyDataContent() {
       indi = 0;
       inputData.forEach((ipt) => {

              if (ipt.id == "data") {
                     if (ipt.value != "") {
                            let dataStr = "";
                            dataStr = ipt.value.charAt(8) + ipt.value.charAt(9) + "/" + ipt.value.charAt(5) + ipt.value.charAt(6) + "/" + ipt.value.charAt(0) + ipt.value.charAt(1) + ipt.value.charAt(2) + ipt.value.charAt(3);
                            bigPEl[indi - 1].innerText = info[indi] + " " + dataStr;
                            backupData[indi] = bigPEl[indi - 1].textContent;
                     }
                     indi++;

              } else if (ipt.id == "fantasia") {
                     fantasyNameEl.innerText = info[indi] + " " + ipt.value;
                     backupData[indi] = fantasyNameEl.textContent;
                     indi++
              } else {
                     //bigPEl[ind-1] recebe -1 pois existe o fantasyNameEl que não é da mesma
                     //classe de bigP               
                     bigPEl[indi - 1].innerText = info[indi] + " " + ipt.value;
                     backupData[indi] = bigPEl[indi - 1].textContent;
                     indi++;
              }
       });
}

//Gerar Itens janela-------------------------------------------
let addItemBtn = document.getElementById("addItemBtn");
let addItemtab = document.getElementById("addItemTab");
let generatorBtn = document.getElementById("generator");
let itens = document.getElementsByName("item");
let cancelBtn = document.getElementById("close");
let removeItemBtn = document.getElementById("removeItemBtn")
let itemNumber = 0;
let itens2 = document.querySelectorAll(".itemName");

itens.forEach((i) => {
       i.addEventListener("change", () => {
              i.style.display = "none"
              itens2[i.getAttribute("n")].textContent = " - ITEM " + (itemNumber + 1);
              itens2[i.getAttribute("n")].style.color = "blue";
              itemNumber++
       })

})

removeItemBtn.addEventListener("click", () => {

       if (itemNumber != 0) {
              itens2.forEach((it) => {
                     if (it.textContent == " - ITEM " + itemNumber) {
                            it.innerHTML = "";
                            let n = it.getAttribute("n");
                            itens[n].style.display = ""
                            itens[n].checked = false;
                     }
              })
              itemNumber--;
       } else {
              alert("Não há Itens para remover")
       }
})

addItemBtn.addEventListener("click", () => {
       addItemBtn.style.display = "none";
       addItemtab.style.display = "grid";
})

generatorBtn.addEventListener("click", selectedItensCreate);

function selectedItensCreate() {

       generatorBtn.removeEventListener("click", selectedItensCreate);

       if (itemNumber == 0) {
              console.log(itemNumber);
              return alert("Nem um Item selecionado");
       } else {
              let ind = 0;
              let ind2 = 1;
              let textC;
              textC = " - ITEM " + ind2;
              itensCount();

              function itensCount() {
                     while (ind != 7) {
                            if (itens2[ind].textContent == textC) {
                                   selectedItens[ind2 - 1] = itens[ind].value;
                            }
                            ind++;
                     }
                     itemNumber--;
                     if (itemNumber != 0) {
                            ind2++;
                            ind = 0;
                            textC = " - ITEM " + ind2;
                            return itensCount();
                     }
              }

              addItemtab.style.display = "none";
              generatorProcess();
       }
}

cancelBtn.addEventListener("click", () => {
       addItemBtn.style.display = "";
       addItemtab.style.display = "";
})

//Processo de Geração de itens 

let currentDiv = document.getElementById("fixedGenerationDiv");
let remainingHeight = 280;

function writePag() {
       let pag = document.createElement("div");
       pag.classList.add("pag");
       pag.classList.add("generated");
       let cab = document.createElement("img");
       cab.classList.add("cabecalhoImg")
       cab.src = "./images/Cabeçalho arte.png";
       let pagc = document.createElement("div");
       pagc.classList.add("pageContainer")
       let generatedDiv = document.createElement("div");
       generatedDiv.classList.add("padding50")
       let rod = document.createElement("img");
       rod.classList.add("rodapeImg");
       rod.src = "./images/Rodapé arte.png"
       pag.appendChild(cab);
       pag.appendChild(pagc);
       pag.appendChild(rod);
       pagc.appendChild(generatedDiv);
       let bd = document.body;
       bd.appendChild(pag);
       currentDiv = generatedDiv;
       remainingHeight = 828;
       if (stage == 1) {
              return write();
       } else if (stage == 2) {
              return writeStage2();
       } else {
              itemTabWrite();
       }
}

let ind = 0;

function generatorProcess() {
       selectedItens.forEach((si) => {
              itensS.forEach((i) => {
                     if (i.titulo == si) {
                            selectedItens[ind] = i;
                            ind++;
                     }
              })
       })
       ind = 0;
       write();
}

let indContent = 0;
let titleOn = false;
let currentElement;
let stage = 1;

function write() {
       if (ind <= selectedItens.length - 1) {
              //elemento atual do objeto
              let curretItem;
              if (!titleOn) {
                     curretItem = selectedItens[ind].titulo;
                     currentElement = document.createElement("h2");
                     currentElement.classList.add("itemH2");
                     currentElement.innerText = "ITEM 0" + (ind + 1) + " - " + curretItem;
                     currentDiv.appendChild(currentElement);
                     //se o item for maior que o espaço restante da div, apagamos e criamos outra página
                     if (currentElement.offsetHeight + 20 > remainingHeight) { //20 - margin do tipo do elemento    
                            currentDiv.removeChild(currentElement);
                            return writePag();
                     } else {
                            titleOn = true;
                            remainingHeight = remainingHeight - (currentElement.offsetHeight + 10);//voltar com 20
                            return write(selectedItens);
                     }
              } else {
                     if (indContent <= selectedItens[ind].conteudo.length - 1) {
                            curretItem = selectedItens[ind].conteudo[indContent]
                            currentElement = document.createElement("p");
                            currentElement.classList.add("radioP");
                            currentElement.innerHTML = divs[1] + curretItem;
                            currentDiv.appendChild(currentElement);
                            if (currentElement.offsetHeight + 4 > remainingHeight) {
                                   currentDiv.removeChild(currentElement);
                                   return writePag();
                            } else {
                                   remainingHeight = remainingHeight - (currentElement.offsetHeight);//voltar com 4
                                   indContent++;
                                   //para ver se o conteudo precisa receber destaque
                                   if (curretItem.charAt(0) == "E" &&
                                          curretItem.charAt(1) == "T" &&
                                          curretItem.charAt(2) == "A") {
                                          currentElement.classList.add("destaque");
                                   }
                                   return write();
                            }
                     } else {
                            titleOn = false;
                            indContent = 0;
                            ind++;
                            return write();
                     }
              }
       } else {
              //precisei dessa imagem, pois quando tentamos imprimir, o checkbox marcado não aparecia
              let checkInputs = document.querySelectorAll(".checkInputs");
              checkInputs.forEach((ipt) => {
                     ipt.addEventListener("click", () => {
                            if (ipt.checked) {
                                   let imgg = document.createElement("img");
                                   imgg.src = "./images/ping.png"
                                   imgg.style = "position: absolute; top: 1px; left: 5px"
                                   imgg.width = ipt.offsetWidth;
                                   imgg.height = ipt.offsetWidth;
                                   ipt.parentNode.appendChild(imgg)
                                   imgg.addEventListener("click", () => {
                                          ipt.parentNode.removeChild(imgg);
                                          ipt.checked = false;
                                   })
                            }
                     })
              })
              ind = 0;
              stage = 2
              let generatedDiv = document.createElement("div");
              generatedDiv.classList.add("padding50");
              currentDiv.parentNode.appendChild(generatedDiv);
              currentDiv = generatedDiv;
              alert("Itens Gerados!");
              return writeStage2();
       }
};

//pós geração de itens

let local;
let address;
let addressText;
let uf;
let uff;
let localEditBtn;

function localOn() {
       local = document.getElementById("local");
       address = document.getElementById("address");
       addressText = document.getElementById("addressText");
       uf = document.getElementById("uf");
       uff = document.getElementById("uff");
       localEditBtn = document.getElementById("localEditBtn");
       local.addEventListener("mouseleave", hideBtn);
       localEditBtn.addEventListener("click", localBtnClick);
       local.addEventListener("mouseover", localShow);
}

function localShow() {
       localEditBtn.style.display = "block"
}

function localBtnClick() {
       local.removeEventListener("mouseleave", hideBtn);
       localEditBtn.textContent = "Aplicar";
       localEditBtn.style.top = "48px";
       uf.style.display = "none";
       uff.style.display = "block";
       addressText.style.display = "none";
       address.style.display = "block";
       localEditBtn.addEventListener("click", localApplyBtn);
}

function localApplyBtn() {
       localEditBtn.style = "";
       localEditBtn.textContent = "Editar";
       uf.textContent = uff.value;
       addressText.textContent = address.value;
       uf.style.display = "";
       uff.style.display = "";
       addressText.style.display = "";
       address.style.display = "";
       localEditBtn.removeEventListener("click", localApplyBtn);
       local.addEventListener("mouseleave", hideBtn);
}

function hideBtn() {
       localEditBtn.style.display = ""
}

//tabela de investimento

let tabs;
let itq;
let iu;
let st;
let itqi;
let iui;
let MaxTotal;

function totalOn() {
       tabs = document.querySelectorAll(".tabBlock");
       itq = document.querySelectorAll(".itq");
       iu = document.querySelectorAll(".iu");
       st = document.querySelectorAll(".st");
       itqi = document.querySelectorAll(".itqi");
       iui = document.querySelectorAll(".iui");
       MaxTotal = document.getElementById("tp");
       tabs.forEach((t) => {
              t.addEventListener("mouseout", hide);
              t.addEventListener("mouseover", show)
       })
       $('.iui').mask('#.##0,00', { reverse: true });
}

function show() {
       let tab = event.currentTarget;
       let attN = tab.getAttribute("n");
       tab.removeEventListener("mouseover", show);
       itqi[attN].style.display = "block"
       iu[attN].style.display = "none";
       iui[attN].style.display = "block"
       tab.addEventListener("mouseout", hide);
};

function hide() {
       let tab = event.currentTarget;
       let attN = tab.getAttribute("n");
       if (itqi[attN].value < 10) {
              itq[attN].textContent = "0" + itqi[attN].value;
       } else {
              itq[attN].textContent = itqi[attN].value;
       }
       if (iui[attN].value != "") {
              iu[attN].textContent = iui[attN].value;
       }
       itqi[attN].style.display = ""
       iui[attN].style.display = ""
       iu[attN].style.display = "";
       itq[attN].style.display = ""
       iui[attN].style.display = ""
       if (iui[attN].value != "") {
              if (itqi[attN].value == 1) {
                     st[attN].textContent = iui[attN].value;
                     st[attN].valor = removeMaskToFloat(iui[attN].value);
                     monthlyValue();
              } else {
                     let num = removeMaskToFloat(iui[attN].value);
                     num *= itqi[attN].value;
                     st[attN].valor = num;
                     st[attN].textContent = toMask(num);
                     monthlyValue();
              }

       }
       tab.addEventListener("mouseover", show);
}



function monthlyValue() {
       v = false;
       let stValue = 0;
       st.forEach((s) => {
              if (s.valor != undefined) {
                     stValue = stValue + s.valor;
                     v = true;
              }
       });
       if (v) {
              let tp = document.getElementById("tp");
              stValue = toMask(stValue);
              tp.textContent = stValue;
       }
}

function removeMaskToFloat(i) {
       let indN = 0;
       let str = "";
       while (indN <= i.length) {
              if (i.charAt(indN) != ".") {
                     if (i.charAt(indN) == ",") {
                            str += ".";
                     } else {
                            str += i.charAt(indN);
                     }
              }
              indN++;
       }
       return parseFloat(str);
}

function toMask(n) {
       n += "b"; //para tranformar em string, pois não funciona por toString
       let str = "";
       let indN = 0;
       let point = false
       let PointPosition;
       while (indN <= n.length) {
              if (n.charAt(indN) == ".") {
                     point = true;
                     PointPosition = str.length;
              } else if (n.charAt(indN) != "b") {
                     str += n.charAt(indN);
              }
              indN++
       }
       indN = 0;
       if (str.length == PointPosition + 1) {//saber se tem apenas um numero depois da virgula
              str += "0";
       }
       if (str.length > PointPosition + 2) {//saber se existe mais de dois numeros depois da virgula
              indN = PointPosition + 2;
              let str2 = ""
              while (indN != 0) {
                     str2 += str.charAt(indN);
                     indN--;
              }
              str = str2;
       }
       if (!point) {
              str += "00"
       }
       indN = 0;
       let strMask = "";
       if (str.length == 3) {
              strMask = str.charAt(0) + "," + str.charAt(1) + str.charAt(2);
       } else if (str.length == 4) {
              strMask = str.charAt(0) + str.charAt(1) + "," + str.charAt(2) + str.charAt(3);
       } else if (str.length == 5) {
              strMask = str.charAt(0) + str.charAt(1) + str.charAt(2) + "," + str.charAt(3) + str.charAt(4);
       } else if (str.length == 6) {
              strMask = str.charAt(0) + "." + str.charAt(1) + str.charAt(2) + str.charAt(3) + "," + str.charAt(4) + str.charAt(5);
       } else if (str.length == 7) {
              strMask = str.charAt(0) + str.charAt(1) + "." + str.charAt(2) + str.charAt(3) + str.charAt(4) + "," + str.charAt(5) + str.charAt(6);
       } else if (str.length == 8) {
              strMask = str.charAt(0) + str.charAt(1) + str.charAt(2) + "." + str.charAt(3) + str.charAt(4) + str.charAt(5) + "," + str.charAt(6) + str.charAt(7);
       } else if (str.length == 9) {
              strMask = str.charAt(0) + "." + str.charAt(1) + str.charAt(2) + str.charAt(3) + "." + str.charAt(4) + str.charAt(5) + str.charAt(6) + "," + str.charAt(7) + str.charAt(8);
       }
       return (strMask);
}

function writeStage2() {

       if (ind <= pósItens.length - 1) {
              if (pósItens[ind][1] > remainingHeight) {
                     return writePag();
              }
              if (ind == 13) {
                     stage = 3;
                     currentDiv.innerHTML += pósItens[ind][0];
                     remainingHeight = remainingHeight - pósItens[ind][1];
                     ind++;
                     return itemTabWrite();
              }
              currentDiv.innerHTML += pósItens[ind][0];
              remainingHeight = remainingHeight - pósItens[ind][1];
              ind++;
              return writeStage2();
       } else {
              //por algum motivo, quando eu tentava dar um innerhtml no body, a ultima página aparecia mas bugava todos os inputs dos itens
              //apenas desse jeito funcionou
              let lastPgContent = document.querySelector("#lacre");
              lastPgContent.innerHTML = ultimaPágina;
              document.body.appendChild(lastPgContent);
              lastPgContent.style.display = "block"
              document.getElementById("tp").textContent = "0,00";
              totalOn();
              localOn();
              lastPageOn();
       }
}

let itwInd = 0
let head = false;

function itemTabWrite() {



       if (itwInd <= selectedItens.length - 1) {

              if (head) {
                     if (remainingHeight < 40) {
                            return writePag();
                     }
              } else {
                     if (remainingHeight < 65) {
                            return writePag();
                     }
              }

              if (!head) {
                     currentDiv.innerHTML += '<div class="noBorderInput" id="tabela3Title"><img src="./images/tabela3Title.png" width="690px" height="25px" alt=""></div>';
              }

              let mainDiv = document.createElement("div");
              mainDiv.classList.add("tabBlock")
              mainDiv.classList.add("roboto");
              mainDiv.setAttribute("n", itwInd);
              let div = document.createElement("div");
              div.classList.add("flexCenter");
              div.classList.add("itemBlock");
              let p = document.createElement("p");
              if (selectedItens.length <= 9) {
                     p.textContent = "0" + (itwInd + 1);
              } else {
                     p.textContent = itwInd + 1;
              }
              div.appendChild(p);
              mainDiv.appendChild(div);
              currentDiv.appendChild(mainDiv);

              div = document.createElement("div");
              div.classList.add("itemNameBlock");
              p = document.createElement("p");
              p.style.marginLeft = "3px";
              p.textContent = selectedItens[itwInd].titulo;
              div.appendChild(p);
              mainDiv.appendChild(div);

              div = document.createElement("div");
              div.classList.add("flexCenter");
              div.classList.add("itemQuant");
              p = document.createElement("p");
              p.classList.add("itq");
              p.textContent = "01"
              i = document.createElement("input");
              i.type = "number";
              i.classList.add("itqi");
              i.min = 1;
              i.setAttribute("value", "1");
              div.appendChild(i);
              div.appendChild(p);
              mainDiv.appendChild(div);

              div = document.createElement("div");
              div.classList.add("flexCenter");
              div.classList.add("itemUni");
              p = document.createElement("p");
              p.classList.add("iu");
              p.textContent = "0,00"
              i = document.createElement("input");
              i.type = "text";
              i.classList.add("iui");
              i.setAttribute("maxlength", "10");
              div.appendChild(i);
              div.appendChild(p);
              mainDiv.appendChild(div);

              div = document.createElement("div");
              div.classList.add("flexCenter");
              div.classList.add("subTotal");
              p = document.createElement("p");
              p.classList.add("st");
              p.setAttribute("valor", "");
              p.textContent = "0,00"
              div.appendChild(p);
              mainDiv.appendChild(div);
              itwInd++;
              if (head) {
                     remainingHeight = remainingHeight - 40;
              } else {
                     remainingHeight = remainingHeight - 65;
                     head = true
              }
              return itemTabWrite();
       } else {

              if (120 < remainingHeight) {
                     stage = 2;
                     div = document.createElement("div");
                     div.id = "totalFinal"
                     div.classList.add("roboto")
                     let div2 = document.createElement("div");
                     div2.id = "totalPrice"
                     let div3 = document.createElement("div");
                     div3.id = "descrição"
                     let img = document.createElement("img");
                     img.src = "./images/total.png";
                     img.width = 690
                     img.height = 35
                     p = document.createElement("p");
                     p.id = "tp";
                     div2.appendChild(img);
                     div2.appendChild(p);
                     div.appendChild(div2);
                     div.appendChild(div3);
                     currentDiv.appendChild(div);
                     remainingHeight = remainingHeight - 120;
                     return writeStage2();

              } else {
                     return writePag();
              }



       }
}


//informações da ultima página

let lCpf;
let lFantasia;
let lName;
let editLastPage;
let lastPage;
let nameL;
let cpfL;
let nameInput;
let cpfInput;
let btnPrint;
let printTab;

function lastPageOn() {
       lCpf = document.getElementById("lCpf");
       lFantasia = document.getElementById("lFantasia");
       lName = document.getElementById("lName");
       editLastPage = document.getElementById("editLastPage");
       lastPage = document.getElementById("asPage");
       nameL = document.querySelectorAll(".nameL");
       cpfL = document.querySelectorAll(".cpfL");
       nameInput = document.querySelectorAll(".nameInput")
       cpfInput = document.querySelectorAll(".cpfInput");
       lCpf.textContent = "CPF N°: " + document.getElementById("cpf").value;
       lFantasia.innerHTML = "<strong>" + document.getElementById("fantasia").value + "</strong>";
       lName.innerHTML = "NOME: " + document.getElementById("nome").value;
       document.getElementById("cpf").addEventListener("keyup", () => {
              lCpf.textContent = "CPF N°: " + event.target.value;
       });
       document.getElementById("fantasia").addEventListener("keyup", () => {
              lFantasia.innerHTML = "<strong>" + event.target.value + "</strong>";
       });
       document.getElementById("nome").addEventListener("keyup", () => {
              lName.innerHTML = "NOME: " + event.target.value;
       });
       lastPage.addEventListener("mouseover", showLastPage);
       lastPage.addEventListener("mouseout", hideLastPage);
       editLastPage.addEventListener("click", editLastPageOn);
       $(".cpfInput").mask("000.000.000-00");
       btnPrint = document.getElementById("btnPrint");
       printTab = document.getElementById("printTab");
       btnPrint.addEventListener("click", printPag);
}


function showLastPage() {
       editLastPage.style.display = "block";
}

function lastPageApply() {
       cpfInput.forEach((c) => {
              cpfL[c.getAttribute("n")].textContent = "CPF N°: " + c.value;
              c.style.display = "";
       })
       nameInput.forEach((n) => {
              nameL[n.getAttribute("n")].textContent = "NOME: " + n.value;
              n.style.display = "";
       });
       editLastPage.textContent = "Editar"
       editLastPage.removeEventListener("click", lastPageApply);
       editLastPage.addEventListener("click", editLastPageOn);
       lastPage.addEventListener("mouseout", hideLastPage);
       lastPage.addEventListener("mouseover", showLastPage);
       showText();
}

function hideLastPage() {
       editLastPage.style.display = "";
}

function editLastPageOn() {
       showLastInputs();
       editLastPage.textContent = "Aplicar"
       hideText();
       lastPage.removeEventListener("mouseout", hideLastPage);
       lastPage.removeEventListener("mouseover", showLastPage);
       editLastPage.addEventListener("click", lastPageApply);
}

function showLastInputs() {
       nameInput.forEach((i) => {
              i.style.display = "block";
       })
       cpfInput.forEach((c) => {
              c.style.display = "block";
       })
}

function showText() {
       nameL.forEach((n) => {
              n.style.display = "";
       });
       cpfL.forEach((c) => {
              c.style.display = "";
       });
}

function hideText() {
       nameL.forEach((n) => {
              n.style.display = "none";
       });
       cpfL.forEach((c) => {
              c.style.display = "none";
       });
}

function printPag() {
       printTab.style.display = "none";
       window.print();
       setTimeout(() => {
              printTab.style = "";
       }, 200)
};

