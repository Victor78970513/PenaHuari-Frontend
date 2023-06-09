import React from 'react'
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'


const DrinksScreen = () => {
  return (
    <div>
    

    
    <ListMenu titulo ="Drinks"/>

   <DishCard title="MOCOCHINCHI" url="https://tipsparatuviaje.com/wp-content/uploads/2019/12/mocochinchi-bebida.jpg" descrip="El mocochinchi se elabora con duraznos deshidratados o secos y un jarabe dulce a punto de caramelo." price="5 Bs"/>

   <DishCard title="LINAZA" url="https://tipsparatuviaje.com/wp-content/uploads/2019/12/jugo-de-linaza.jpg" descrip="Bebida típica de Bolivia que se elabora con semillas de linaza, una abundante fuente en antioxidantes y fibra, con un alto contenido en ácidos grasos omega 3." price="7 Bs"/>

   <DishCard title="MATE DE COCA" url="https://tipsparatuviaje.com/wp-content/uploads/2019/12/mate-de-coca.jpg" descrip="El mate de coca es una de las bebidas más antiguas y de mayor tradición en Bolivia, elaborada en las zonas de los andes bolivianos y peruanos." price="6 Bs"/>
   
   <DishCard title="SUCUMBE" url="https://tipsparatuviaje.com/wp-content/uploads/2019/12/sucumbe-bebida.jpg" descrip="Se cree que el sucumbé fue inventado accidentalmente por una familia de la Paz, capital de Bolivia, que añadió a su leche caliente un poco de pisco, licor peruano." price="9 Bs"/>

   <DishCard title="VINO" url="https://tipsparatuviaje.com/wp-content/uploads/2019/12/vinos-bolivianos.jpg" descrip="Son conocidos como “vinos de altura” y se han producido en tierras bolivianas por siglos. Son exportados por todos el mundo como a países europeos, a Norteamérica y Japón, por su excelente calidad." price="20 Bs"/>


    </div>
  )
}

export default DrinksScreen
