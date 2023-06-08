import React from 'react'
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'

const DinnerScreen = () => {
  return (
    <div>
   

    
   <ListMenu titulo ="Dinner"/>

   <DishCard title="SALCHIPAPA" url="https://elmen.pe/wp-content/uploads/2023/02/SALCHIPAPA-scaled.jpg" descrip="La salchipapa es una comida rápida que consiste en rodajas fritas de salchicha y papas fritas, popular en Hispanoamérica." price="10 Bs"/>

   <DishCard title="HAMBURGUESA" url="https://resizer.glanacion.com/resizer/aDuSrK-kFy1v27LtOHPRYl4QlRs=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RHVGX3MHVRB7VGEXBEVCCZHW5I.jpg" descrip="Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger." price="7 Bs"/>
   
   <DishCard title="CALDO DE POLLO" url="https://i.blogs.es/716419/caldodepollo/1366_2000.jpg" descrip="El caldo de pollo (denominado a veces como sopa de pollo o caldo de gallina) es una sopa.1​ A menudo se sirve con trozos de carne o con granos de arroz o cebada, pasta, zanahoria, papa amarilla, apio, cebolla blanca, etc." price="10 Bs"/>

   <DishCard title="CALDO DE RES" url="https://recetasdebolivia.com/wp-content/uploads/2022/02/Receta-%E2%80%98calentita-Caldo-de-la-Tarde-boliviano-1-500x375.jpg" descrip="El caldo de res o cocido es un platillo guatemalteco, es un caldo hecho con hueso de res y carne magra de res. Se dice que es uno de los platillos más baratos, ya que se ajusta al bolsillo y se puede modificar con ingredientes que se pueden obtener fácilmente." price="10 Bs"/>

   <DishCard title="BISTE" url="https://gastronomiabolivia.com/wp-content/uploads/falso-conejo-bolivia.jpg" descrip="El Falso Conejo es un popular plato boliviano, con un sabor fuerte en la sarza." price="15 Bs"/>



    </div>
  )
}

export default DinnerScreen
