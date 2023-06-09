import React from 'react';
import Plato from './Platos';
import All from "../../assets/All.json";
import "./AllConteiner.css";

const AllConteiner = () => {
  return (
    <div className='All-conteiner'>
        {All.map((All) => {
            return <Plato All={All} key={All.id} />;
        })}

    </div>
  );
};

export default AllConteiner;