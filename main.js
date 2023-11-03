let gnb = document.querySelectorAll("#gnb > li");
let gnbElement = document.querySelector("#gnb");
let headerElement = document.querySelector("#header");

// 마우스가 gnb 메뉴에 진입할 때
for (let i = 0; i < gnb.length; i++) {
    gnb[i].addEventListener("mouseover", () => {
        gnbElement.classList.add("on");
    });
}

// gnb 메뉴를 벗어날 때
headerElement.addEventListener("mouseleave", (e) => {
    if (e.relatedTarget.id !== "gnb") {
        gnbElement.classList.remove("on");
    }
});
