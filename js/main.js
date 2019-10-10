window.addEventListener("load", () => {
    let iconBar = document.querySelector(".icon-bar");
    let iconStatus = true;
    iconBar.addEventListener("click", () => {
        let navBar = document.querySelector("nav");
        if (iconStatus) {
            navBar.className = "animate-right-custom";
            navBar.style.display = "flex";
        } else {
            navBar.className = "animate-right-close";
            setTimeout(() => {
                navBar.style.display = "none";
            }, 850)
        }
        iconStatus = !iconStatus;
    })
})