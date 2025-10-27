import { createElement } from "react";
import { catalogue } from "./catalogue.js";
const createSubMenu = (value, li) => {
  li.addEventListener("click", () => {
    console.log(value);
    const submenu = document.createElement('div');
    // innerHtml a titre exceptionnel pas une bonne pratique
    // const titre = document.createElement('p');
    // titre.textContent = value.titre;
    // submenu.append(titre);
    // const artiste = document.createElement('p');
    // const album= document.createElement('p');
    // const annee = document.createElement('p');
    const subMenuValues =["titre", "album", "artiste", "annee"];
    const icones = ["🎙️","🪕","🪗","🪇"];
    //Une boucle While pour executer les 4 instructions 
    // suivantes sur mon tableau subMenuValues
    // avant d'écrire while
    //1er etape d'une boucle while c'est de déclarer un entier variable
    // let i = 0;
    // while (i < subMenuValues.length) {
    //   console.log('hello');
    //   const p = document.createElement('p');
    //   p.textContent = value[subMenuValues[i]];
    //   p.classList.add("inner-submenu");
    //   submenu.append(p);
    //   // l'incrementation est OBLIGATOIRE et appelée en fin
    //   // d'instructions de boucles
    //   i++;
      
    // }

   // boucle for 
   for (let i = 0; i < subMenuValues.length; i++) {
    const p = document.createElement('p');
    p.textContent = value[subMenuValues[i]];
    p.classList.add("inner-submenu");
    submenu.append(p);
    const span = document.createElement("span");
    span.textContent = icones[i];
    p.prepend(span);
    
   }
    // (subMenuValues[0]["titre"],etc.)
    
        
    submenu.classList.add("submenu");
    playlist.append(submenu);
    li.append(submenu);


  })
}
const initMenuPlaylist = () => {
  console.log('initMenuPlaylist');
  const playlist = document.getElementById("playlist");
  const ul = document.createElement("ul");
  playlist.append(ul);
  // inserer dans ce ul autant de li qu'il ya de titre dans mon catalogue
  catalogue.forEach((value) => {
    console.log(value.titre);
    const li = document.createElement("li");
    li.textContent = value.titre;
    li.classList.add("entree-menu")
    ul.append(li);
    //fonction affichage/masquage du sous menu
    createSubMenu(value, li);
  });
}

export { initMenuPlaylist }