function Showmenu () {
    const arow = document.querySelector(".arow1");
    const arow2 = document.querySelector(".arow2");
    const Ice = document.querySelector(".ourFaciLities__facilities-Ice");
    const textonmenu = document.querySelector(".Textonmenu");
    const Ice__text = document.querySelector(".ourFaciLities__facilities-Ice__text");

    const Showmenu = () =>{
        arow.classList.toggle("hide");
        arow2.classList.toggle("hide");
        arow2.style.rotate="90deg";
        Ice.classList.toggle("Showmenu");
        textonmenu.classList.toggle("hide");
        Ice__text.classList.toggle("active");


        const imgDiv = document.querySelector(".ourFaciLities__facilities-Ice__img");

        if (Ice.classList.contains("Showmenu")) {
            imgDiv.style.width = "500px";
            imgDiv.style.height = "500px";
        } else {
            imgDiv.style.width = "284px";
            imgDiv.style.height = "284px";
        }
    }
    arow.addEventListener("click", Showmenu);
    arow2.addEventListener("click", Showmenu);
}
Showmenu();
