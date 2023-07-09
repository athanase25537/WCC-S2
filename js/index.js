window.addEventListener("load", ()=>{
    document.querySelector("#loader-contain").classList.add("hidden")
})

const btn_control = document.querySelector(".option img")
const list_contain = document.querySelector("#container .all-data .list-contain")
btn_control.addEventListener("click", ()=>{
    list_contain.classList.toggle("hidden")
})

const mode = {
    'light' : {
        "bg-contain": "linear-gradient(to bottom right, rgb(43, 43, 61), rgb(1, 1, 21))",
        "text": "#fff",
        "text2" : "#aaaaaa",
        "borderColor" : "#5c5c5c"
    },
    'dark' : {
        "bg-contain" : "linear-gradient(to bottom right, rgb(229, 229, 245), rgb(98, 98, 210))",
        "text" : "#040226",
        "text2" : "#353434",
        "borderColor" : "#dcd2d2"
    }
}

//control des modes
const icons = document.querySelectorAll("#container .side-contain .side-bars .mode i")
let change = true;
for(let i=0 ;i<icons.length;i++){
    icons[i].addEventListener("click",()=>{
        icons[0].classList.toggle("hidde");
        icons[1].classList.toggle("hidde");
        if (change) changeMode('dark');
        else changeMode('light');
        change = (change) ? false : true;

    })
}
function changeMode(valeur){
    document.documentElement.style.setProperty("--text", (mode[valeur]["text"]));
    document.documentElement.style.setProperty("--text2", (mode[valeur]["text2"]));
    document.documentElement.style.setProperty("--bg-contain", (mode[valeur]["bg-contain"]));
    document.documentElement.style.setProperty("--borderColor", (mode[valeur]["borderColor"]));
}


//Le changement des images
content_dic = {
    "1" : {
        "titre": "ankamanatatra",
        "decription" : "Karazana lalao izay ahitanao fanotaniaina mahafinaritra isankarazany . Raha tia fifaninanana ianao dia afaka ifaninananao amin'ny namano ihany koa io ka izay be lanjan'isa ny mandresy eh !",
        "image" : "ankamanatatra.png",
        "lien" : "https://PierrisKevin.github.io"
    },
    "0" : {
        "titre": "Fanorona",
        "decription" : "Karazana lalao izay ahitanao fanotaniaina mahafinaritra isankarazany . Raha tia fifaninanana ianao dia afaka ifaninananao amin'ny namano ihany koa io ka izay be lanjan'isa ny mandresy eh !",
        "image" : "fanorona.webp",
        "lien" : "",
    },
    "2" : {
        "titre" : "Sudoku",
        "decription" : "Ny sudoku dia kilalao hampiharanareo an'ilay fandahana isa ohatra ny any ampianarana. Ataovy misy isa manomboka amn'ny 01 ka hatr'amin'ny 09 fotsiny ilay izy dia viaaa...",
        "image" : "sudoku.webp"
    }
    
}



function changeContent(valeur){
    document.querySelector("#container .all-data .body-contain .text h1, #container .all-data .body-contain .text p:nth-child(1)").textContent = "";
    const titre = document.querySelector("#container .all-data .body-contain .text h1");
    const descript = document.querySelector("#container .all-data .body-contain .text p:nth-child(3)")
    const image_container = document.querySelector("#container .all-data .body-contain .images")
    const lien = document.querySelector("#container .all-data .body-contain .text button a")

    titre.textContent = content_dic[valeur].titre;
    descript.textContent = content_dic[valeur].decription;
    titre.style.fontSize = "4em";
    image_container.innerHTML = '<img src="./images/'+content_dic[valeur].image+'" >'
    lien.href = content_dic[valeur].lien

}
function homeOpen(){
    document.querySelector("#container .all-data .body-contain .text h1, #container .all-data .body-contain .text p:nth-child(1)").textContent = "";
    const titre = document.querySelector("#container .all-data .body-contain .text h1");
    const descript = document.querySelector("#container .all-data .body-contain .text p:nth-child(3)")
    const image_container = document.querySelector("#container .all-data .body-contain .images")
    titre.textContent = "tia zaza";
    descript.textContent = `Tongasoa ato amin'ny Tia zaza.Ny tia zaza dia tranokala vita malagasy izao nofenoina karazana lalao izay natao mba hampialavoly ny ankizy mandritra 
    izao fotoana fialantsatsatra izao. Ato ireo ankizy dia sady afaka milalao no mampitombo fahalalana ihany koa amin'ny alala'ireo
    'Jeu de culture`;
    titre.style.fontSize = "5em";
    image_container.innerHTML = '<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_YrdJ2K8cQY.json" background="transparent" speed="1" loop autoplay></lottie-player>'
}
const allBoxes = document.querySelectorAll("#container .all-data .list-contain .box")
for(let i=0; i<allBoxes.length;i++){
    allBoxes[i].addEventListener("click", (e)=>{
        e.stopPropagation()
        for(let j=0;j<allBoxes.length;j++){
            allBoxes[j].classList.remove("active")
        }
        e.target.classList.add("active")
        changeContent(String(e.target.id));
    })
}

document.querySelector("#container .side-contain .side-bars .menu a:nth-child(1)").addEventListener("click", homeOpen);
const heartBeat = document.querySelector("#container .side-contain .side-bars .menu a:nth-child(4)")
let changeLike = true
heartBeat.addEventListener("click", ()=>{
    if (changeLike) heartBeat.style.color = "red";
    else  heartBeat.style.color = "#fff";
    changeLike = (changeLike) ? false : true
    heartBeat.classList.toggle('fa-bounce')
})

//Evenement ajouter a la premier lien
const lien = document.querySelector("#container .all-data .body-contain .text button a")
lien.addEventListener("click", (e)=>{
    console.log(/#vide/.test(String(e.target.href)))
    if(/#vide/.test(String(e.target.href))){
        e.preventDefault()
        changeContent("0")
    }
})