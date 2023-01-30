function openNext(headingID){
    let heading = document.getElementById(headingID);
    let headingBtn = heading.getElementsByClassName("accordion-button")[0];
    let body = heading.nextElementSibling;

    headingBtn.setAttribute("aria-expanded","true");
    headingBtn.classList.remove("collapsed");
    body.classList.add("show");
}