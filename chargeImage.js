content_dic = {
    "0" : {
        "titre": "ankamanatatra",
        "decription" : "Karazana lalao izay ahitanao fanotaniaina mahafinaritra isankarazany . Raha tia fifaninanana ianao dia afaka ifaninananao amin'ny namano ihany koa io ka izay be lanjan'isa ny mandresy eh !",
        "image" : ""
    },
    "1" : {
        "titre": "Fanorona",
        "decription" : "Karazana lalao izay ahitanao fanotaniaina mahafinaritra isankarazany . Raha tia fifaninanana ianao dia afaka ifaninananao amin'ny namano ihany koa io ka izay be lanjan'isa ny mandresy eh !",
        "image" : ""
    }
    
}

function changeContent(valeur){
    document.querySelector("#container .all-data .body-contain .text h1, #container .all-data .body-contain .text p:nth-child(1)").textContent = "";
    const titre = document.querySelector("#container .all-data .body-contain .text h1");
    const descript = document.querySelector("#container .all-data .body-contain .text p:nth-child(3)")
    const image_container = document.querySelector("#container .all-data .body-contain .images")
    titre.textContent = content_dic[valeur].titre;
    descript.textContent = content_dic[valeur].decription;
    image_container.innerHTML = '<img src="./image/'+content_dic[valeur].image+'" >'
}