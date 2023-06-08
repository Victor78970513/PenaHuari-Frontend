import React from 'react'
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'


const BreakfastScreen = () => {
  return (
    <div className='Break-container'>

     

      <ListMenu titulo ="Breakfast"/>

      <DishCard title="LLAUCHA" url="https://quebuenasazon.com/wp-content/uploads/2020/09/llauchas.jpg" descrip="Llaucha o llauch'a es el nombre de una empanada boliviana, muy popular en la ciudad de La Paz. Las llauchas se acompañan con diferentes bebidas calientes como api, tojorí, té o café​ y suelen consumirse durante la mañana como parte del desayuno." price="7 Bs"/>
      
      <DishCard title="SALTEÑA" url="https://1.bp.blogspot.com/-ibF8NMv_aog/X00-WmrmXWI/AAAAAAAAGGI/ROv7NddrT1IZfYwF84bR700xTq1BKox7ACLcBGAsYHQ/s1600/IMG-20180628-WA0015.jpg" descrip="La salteña es un tipo de empanada de origen boliviano, ​ comido como una merienda jugosa y rellena con carne, pollo u otras carnes, huevo duro, especias, y otros ingredientes, cocida al horno." price="5 Bs"/>

      <DishCard title="CUÑAPE" url="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p1nt66.jpg" descrip="Similar a una galleta de queso, los cuñapés son deliciosas bolas de masa con queso hechas de yuca o harina de yuca. Es común que se sirvan como una especie de merienda “pre-desayuno” con una taza de café solo o mate de coca." price="10 Bs"/>

      <DishCard title="BUÑELOS" url="https://www.recetas.com.bo/sites/default/files/2020-02/bunuelos-0514.jpg" descrip="Los buñuelos, un esponjoso buñuelo de rosquilla, se espolvorean con azúcar y canela y luego se empapan en miel tibia y derretida. También verá buñuelos salados en algunas regiones, que generalmente están rellenos de queso suave y pegajoso." price="5 Bs"/>

      <DishCard title="HUMITAS" url="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/fw10px.jpg" descrip="Las humintas son la respuesta de Bolivia a los tamales. Al igual que el platillo mexicano, la huminta es una mezcla suave pero densa de masa de harina hervida u horneada en hojas de maíz." price="7 Bs"/>
    </div>
  )
}

export default BreakfastScreen
