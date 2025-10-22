import { catalogue } from "./catalogue.js";
const createSubMenu = (value,li) => {
    li.addEventListener("click",()=>{
        console.log(value);
        const div = document.createElement('div');
        // innerHtml a titre exceptionnel pas une bonne pratique
        div.innerHTML = `<p>${value.titre}</p>
        <p>${value.artiste}</p>
        <p>${value.album}</p>`;
        div.classList.add("submenu");
        playlist.append(div);
       li.append(div);
        
        
    })
}
const initMenuPlaylist = ()=>{
    console.log('initMenuPlaylist');
    const playlist =document.getElementById("playlist");
    const ul = document.createElement("ul");
    playlist.append(ul);
    // inserer dans ce ul autant de li qu'il ya de titre dans mon catalogue
  catalogue.forEach((value) => {
    console.log(value.titre);
    const li =document.createElement("li");
    li.textContent = value.titre;
    li.classList.add("entree-menu")
    ul.append(li);
    //fonction affichage/masquage du sous menu
    createSubMenu(value,li);
  });
}

export { initMenuPlaylist }