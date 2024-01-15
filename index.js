let f = document.querySelector("input").value;


document.querySelector("input").onblur = () => {
    if (!document.querySelector("input").value.includes('@')) { // not email
        document.querySelector("input").classList.add("error");
        document.querySelector(".vd").classList.add("visible");
    }
    else {
        document.querySelector("input").classList.remove("error");
        document.querySelector(".vd").classList.remove("visible");
    }
};

document.querySelector("input").onfocus = () => {
    document.querySelector("input").classList.remove("error");
    document.querySelector(".vd").classList.remove("visible");
};


document.querySelector('button').addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector("input").value.includes('@')) {
        document.querySelector("input").classList.remove("error");
        document.querySelector(".vd").classList.remove("visible");
        document.querySelector(".success").classList.remove("invisible")
        document.querySelector(".success").classList.add("visible")
        document.querySelector(".princ").classList.add("invisible")
        document.querySelector("span").innerHTML = document.querySelector("input").value;
    }
    else {
        document.querySelector("input").classList.add("error");
        document.querySelector(".vd").classList.add("visible");
        return false;
    }
})

document.querySelector(".btn").addEventListener("click", () => {

    document.querySelector(".success").classList.remove("visible")
    document.querySelector(".success").classList.add("invisible")
})