const randomTxt = document.querySelector(".randomTxt")
let date = new Date()
let day = date.getDate()

const textsBase = {
    a1: "Nic Ci się nie wyświetla? Przecież w kodzie wszystko jest okej.",
    a2: "Człowieku, wakacje są, a ty zamiast surfować na morzu, to serfujesz po necie? Zajmiemy się tą stroną jak wszyscy wrócą z urlopu.",
    a3: "Jak nasz główny programista wróci z miesięcznego urlopu, to coś zaczniemy robić.",
    a4: "Jak narazie to śpię.",
    a5: "Jak tylko dopijemy kawę, siadamy do kodu."
}

let randomTxtNum = (day % Object.keys(textsBase).length) + 1

for (const x in textsBase) {
    if(x.slice(1) == randomTxtNum){
        randomTxt.textContent = textsBase[x]
    }
}