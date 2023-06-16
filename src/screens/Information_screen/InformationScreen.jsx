import React from 'react'
import Info from '../../components/molecules/Info'
import AddCard from '../../components/molecules/AddCard'

function InformationScreen() {
  return (
    <div>
      <Info url="https://media-cdn.tripadvisor.com/media/photo-s/05/00/5b/00/el-charquekan.jpg" titulo="CHARQUEKAN" description="El Charquekan es un plato originario del departamento de Oruro. Consiste en carne (de res o de llama) desmenuzada y deshidratada, mediante su exposición al sol con sal, acompañada con queso fresco de vaca, patatas con cáscara, mote (granos de maíz) y llajwa (salsa picante boliviana)." />
      <AddCard/>
    </div>
  )
}

export default InformationScreen
