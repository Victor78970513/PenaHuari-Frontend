import React from 'react'
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'

const DessertScreen = () => {
  return (
    <div>
   

    
   <ListMenu titulo ="Dessert"/>

   <DishCard title="GAZNATES DULCES" url="https://blog.amigofoods.com/wp-content/uploads/2022/12/gaznates-dulces.jpg" descrip="Gaznates dulces es uno de los postres más populares en toda Bolivia. Es similar (pero no tan famoso) al cannoli italiano. Sin embargo, la corteza de los gaznates dulces está hecha de harina de maíz frita con un toque de coñac. Luego, las costras se suelen rellenar con algún tipo de crema dulce." price="20 Bs"/>

   <DishCard title="LECHE ASADA" url="https://blog.amigofoods.com/wp-content/uploads/2022/12/Leche-asada.jpg" descrip="Es similar al flan y popular en otros países sudamericanos como Perú y Colombia. Este postre está hecho de Leche" price="15 Bs"/>
   
   <DishCard title="BUDIN DE QUINOA" url="https://blog.amigofoods.com/wp-content/uploads/2022/12/budin-de-quinoa-1024x683.jpg" descrip="El budín de quinoa, o budín de quinoa, es uno de los postres bolivianos más icónicos. Está hecho con quinua, huevos y pasas. Tiene un sabor y consistencia muy delicioso debido a la quinoa incluida. " price="20 Bs"/>

   <DishCard title="ALFAJORES" url="https://blog.amigofoods.com/wp-content/uploads/2022/12/bolivian-alfajores-1152x2048.jpg" descrip="Puede encontrar alfajores bolivianos que se venden en las panaderías y pastelerías de la mayoría de los países. Los diferentes países tienen versiones ligeramente diferentes, pero el ingrediente clave siempre es el dulce y delicioso dulce de leche." price="25 Bs"/>

   <DishCard title="T'ANTA WAWA" url="https://blog.amigofoods.com/wp-content/uploads/2022/12/tantawawas-bolivian-bread-babies-1024x683.jpg" descrip="T’anta wawa, también conocido como pan baby, es un tipo de panecillo dulce en forma y decorado con la forma de un niño pequeño o infante. Están hechos de trigo y, a veces, contienen un relleno dulce." price="25 Bs"/>


    </div>
  )
}

export default DessertScreen
