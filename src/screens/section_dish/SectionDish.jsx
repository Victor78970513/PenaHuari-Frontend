import React, { useState } from 'react'
// import MapTopBar from '../../molecules/MapTopBar'
import "./SectionDish.css"
// import SectionDishList from '../../molecules/SectionDishList';
import MapTopBar from '../../components/molecules/MapTopBar';
import SectionDishList from '../../components/molecules/SectionDishList';
const SectionDish = () => {
    const [tab,setTab] = useState(1)
    const handleTab = (index)=>{
        setTab(index);
    }
  return (
    <div className='section-dish-container'>
        <MapTopBar text={'BreakFast'} css={'section-dish-title'}/>
        <div className="tabBar">
            <span className={tab===1 ? "tab-active":"tab-deactive"} onClick={()=>handleTab(1)}>Breakfast</span>
            <span className={tab===2 ? "tab-active":"tab-deactive"} onClick={()=>handleTab(2)}>Lunch</span>
            <span className={tab===3 ? "tab-active":"tab-deactive"} onClick={()=>handleTab(3)}>Dinner</span>
            <span className={tab===4 ? "tab-active":"tab-deactive"} onClick={()=>handleTab(4)}>Drinks</span>
            <span className={tab===5 ? "tab-active":"tab-deactive"} onClick={()=>handleTab(5)}>Desserts</span>
        </div>
        <div className="tab-content">
            <div className={tab===1? "content active":"content"}>
                <SectionDishList endPoint={"/breakfast"}/>
            </div>
            <div className={tab===2? "content active":"content"}>
                <SectionDishList endPoint={"/lunch"}/>
            </div>
            <div className={tab===3? "content active":"content"}>
                <SectionDishList endPoint={"/dinner"}/>
            </div>
            <div className={tab===4? "content active":"content"}>
                <SectionDishList endPoint={"/drink"}/>
            </div>
            <div className={tab===5? "content active":"content"}>
                <SectionDishList endPoint={"/dessert"}/>
            </div>
        </div>
    </div>
  )
}

export default SectionDish