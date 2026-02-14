function initMenu() {

    const facilities = document.querySelectorAll('[class*="ourFaciLities__facilities-"]');

    facilities.forEach((item) => {

        const arow1 = item.querySelector(".arow1");
        const arow2 = item.querySelector(".arow2");
        const textOnMenu = item.querySelector(".Textonmenu");
        const titleText = item.querySelector('[class*="__text"]');

        const toggleAction = () => {

            item.classList.toggle("Showmenu");


            if (arow1) arow1.classList.toggle("hide");
            if (arow2) {
                arow2.classList.toggle("hide");
                arow2.style.rotate = item.classList.contains("Showmenu") ? "90deg" : "0deg";
            }


            if (textOnMenu) textOnMenu.classList.toggle("hide");


            if (titleText) titleText.classList.toggle("active");

        };


        if (arow1) arow1.addEventListener("click", toggleAction);
        if (arow2) arow2.addEventListener("click", toggleAction);
    });
}

initMenu();