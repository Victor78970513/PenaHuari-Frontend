import React from 'react'
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'

const LunchScreen = () => {
  return (
    <div>
    
      
    <ListMenu titulo ="Lunch"/>

   <DishCard title="CHARQUEKAN" url="https://gastronomiabolivia.com/wp-content/uploads/charquekan-boliviano.jpg" descrip="El charquekan es un plato originario del departamento de Oruro. Consiste en carne de llama o res desmenuzada, acompañada de papa, mote, queso y su infaltable llajwa (salsa picante)." price="25 Bs"/>
   
   <DishCard title="PIQUE MACHO" url="https://recetasespeciales.com/wp-content/uploads/pique-macho.jpg" descrip="El pique macho o pique a lo macho es un plato típico de Bolivia.​ Consiste en trozos de carne de vaca y patatas fritas. También se le añade cebolla, locoto, huevos duros, queso cortado, mostaza, mayonesa y kétchup." price="25 Bs"/>
   
   <DishCard title="SAJTA DE POLLO" url="https://patujutricolor.org/wp-content/uploads/2020/11/sajta-de-pollo-receta.jpg" descrip="La Sajta es un plato típico de la región occidental de Bolivia, particularmente, de la ciudad de La Paz. Consumido principalmente en las festividades de todos santos, y el carnaval." price="20 Bs"/>

   <DishCard title="SILPANCHO COCHABAMBINO" url="https://patujutricolor.org/wp-content/uploads/2020/11/silpancho-cochabambino-receta.jpg" descrip="El silpancho es uno de los platos mas conocidos de cochabamba, pues su receta consta de una carne (apanada) grande, que cubre todo el plato, acompañado de un huevo, y por debajo, arroz, papas en rodajas, ensalada y por supuesto para acompañar esta delicia no puede faltar el limón." price="30 Bs"/>

   <DishCard title="MAJADITO" url="https://patujutricolor.org/wp-content/uploads/2020/11/receta-majadito-cruceno.jpg" descrip="La receta del majadito varia por los ingredientes que contiene, los cuales pueden ser majadito con charque y o yuca. Este plato es muy parecido al arroz a la valenciana, solo que este contiene plátanos de freír, carne de charque y claro el huevo. Un plato emblema del oriente." price="20 Bs"/>
  

    </div>
  )
}

export default LunchScreen
