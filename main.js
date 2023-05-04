const container = document.querySelector("body");

const footerNode = document.createElement("footer");
footerNode.textContent = "Hola footer";
footerNode.classList.add("footer");
container.appendChild(footerNode);


function crearMiNodo(tag, classname, content){
    const footerNode = document.createElement("tag");
    footerNode.textContent = content;
    footerNode.classList.add(classname);

    return Node;
}
function mostrarNodo(elem, parent){
    const container = document.querySelector(parent);
    container.appendChild(elem)
}

    const elementH1 = crearMiNodo("h1", "tittle", "Hola")
    const elementH3 = crearMiNodo("h3", "subtittle", "Este es mi elemento H3")
