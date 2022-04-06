window.onload = function () {
    console.log("Saludo desde Javascript");
    console.log(document);
    console.log(document.head);
    console.log(document.body);

    /* 
    
    
        document.getElementById(id) <>
        document.getElementsByClassName(class) [<>,<>,<>]
        document.getElementsByTagName(tagName) [<>,<>,<>]
        document.getElementsByName(name) [<>,<>,<>]
    
    
        document.querySelector(selector)
        document.querySelectorAll(selector)

        document.createElement(elemento)
        document.createTextNode(texto);
    */

    console.log(typeof (document));
    //console.log(document.getElementById('inicio').innerHTML = "<h1>Hola desde Javascript con DOM</h1>")


    console.log(document.getElementsByTagName('h1'))
    console.log(document.getElementsByName('op'));

    console.log(document.querySelectorAll('.col-md-12'));
    console.log(document.querySelector('#fin'));


    let div = document.createElement('div'); // creando un elemento DIV
    //div.innerHTML = "Creando un elemento DIV con el DOM";
    let texto = document.createTextNode("Creando un elemento DIV con el DOM") // Creando el texto que sera contenido dentro del div
    div.appendChild(texto); // asigno el texto al elemento div

    div.style.backgroundColor = "red"; // modificando el css directamente y asignado un color de fondo rojo

    div.style.color = "white";


    let foto = document.createElement('img');
    foto.src = "https://picsum.photos/id/237/200/300";


    console.log(div);
    document.body.appendChild(div);
    document.body.appendChild(foto);


    let divAlert = document.createElement('div');
    divAlert.classList.add('alert', 'alert-danger');
    divAlert.innerHTML = "A simple primary alert—check it out!";
    divAlert.setAttribute("role", "alert");

    console.log(divAlert)
    document.body.appendChild(divAlert);

    console.log(window.document);


    let h1 = document.querySelector('#inicio h1');
    h1.style.color = "blue";


}