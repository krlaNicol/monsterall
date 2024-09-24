const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos
 let products = [ 
    {
      id: 1,
      name: "Suculenta",
      price: 20000,
      img: "../public/img/plantsImg/suculenta.webp",
      description: "Las suculentas son plantas con hojas, tallos o raíces engrosados que almacenan agua. Son resistentes a la sequía, tienen formas variadas y son populares por su fácil cuidado y atractiva apariencia.",
      cantidad: 1,
    },
    {
      id: 2,
      name:"Margarita",
      price: 14000,
      img: "../public/img/plantsImg/margarita.webp",
      description: "La margarita es una planta perenne con flores blancas y un centro amarillo. Simboliza pureza e inocencia, crece en diversos climas y es conocida por su belleza simple y facilidad de cultivo.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Pino de agujas",
        price:32000,
        img:"../public/img/plantsImg/pinoDeAgujas.webp",
        description: "El pino de agujas es un árbol perenne con hojas delgadas y aciculares. Conocido por su durabilidad y altura, es común en climas templados y fríos, y se utiliza en la industria maderera y decorativa.",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Aspidistra",
        price: 25000,
        img: "../public/img/plantsImg/aspidistra.webp",
        description: "Ideal para entornos con poca luz, no requiere de muchos cuidados. Toma en cuenta si hace mucha calor dale abundante agua.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Planta del dinero",
        price: 32000,
        img: "../public/img/plantsImg/plantaDelDinero.webp",
        description: "Se dice que si cuidas esta planta y se mantiene sana, nunca faltara dinero en tu casa. Para ello, debes darle agua una vez a la semana y evitar que esten expuestas de manera directa al sol, y agregale fertilizante cada 15 días.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "El Caballero de la Noche",
        price: 45000,
        img: "../public/img/plantsImg/caballeroDeLaNoche.webp",
        description: "Es un arbusto tropical con flores blancas verdosas que emiten una fragancia intensa y dulce por la noche. Es conocido por su perfume nocturno y hojas perennes.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Monstera obliqua",
        price: 15000,
        img: "../public/img/plantsImg/monstera.webp",
        description: "Originaria de pero iene alta demanda hidrica y necesita menor luz.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Monstera adasonii",
        price: 18000,
        img: "../public/img/plantsImg/monsteraAdansonii.webp",
        description: "Es trepadora y tiene en las hojas muchos agujeros de tamaño mediano y forma redondeada.",
        cantidad: 1,
    },
    {   
        id:9,
        name:"Venus Atrapa Moscas",
        price:50000,
        img:"../public/img/plantsImg/venusAtrapaMoscas.webp",
        description: "La Venus atrapamoscas es una planta carnívora con trampas de hojas dentadas que se cierran rápidamente al contacto. Captura insectos para suplir nutrientes en suelos pobres. Es nativa de Carolina del Norte y del Sur, EE. UU.",
        cantidad: 1,
    }, 
    {   
        id:10,
        name: "Gardenia",
        price: 48000,
        img:"../public/img/plantsImg/gardenia.webp",
        description: "Es un arbusto de hojas perennes con flores blancas, fragantes y cerosas. Es popular en jardines y arreglos florales por su aroma dulce y belleza elegante.",
        cantidad: 1,
    }
];
 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//Recorrer productos 
products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p> 
    `;
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.className = "comprar";
    comprar.innerText = `Agregar`;

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        //Buscar producto repetido
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
        carrito.push({
            id: product.id,
            img: product.img,
            name: product.name,
            price: product.price,
            cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    }
    
    });
});

//Local storage
//SETITEMS
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

}








