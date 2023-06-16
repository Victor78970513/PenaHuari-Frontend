import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/molecules/CustomInput';
import IconButton from '../../components/atoms/IconButton';
import "./Payment.css";
import Button from '../../components/atoms/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [id, setId] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setId(res.data.id_cliente);
        } else {
          alert("error")
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleConfirm = () => {
    const newCard = {
      cardholderName: cardholderName,
      cardNumber: cardNumber,
      expireDate: expireDate,
      cvv: cvv
    };

    axios.post('http://localhost:3000/tarjeta', newCard)
      .then(res => {
        console.log(res.data);
        res.data.Status === "Success" ? navigate('/') : alert("Error")
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='payment-container'>
      <IconButton icon={"material-symbols:arrow-back"} css={"payment-arrow-back"} onClick={()=>navigate(-1)}/>
      <img src="../../../src/assets/tarjeta.png" alt="" />
      <CustomInput placeholder={"Cardholder name"} value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
      <CustomInput placeholder={"Card number"} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <CustomInput placeholder={"Expire date"} value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
      <CustomInput placeholder={"Cvv"} value={cvv} onChange={(e) => setCvv(e.target.value)} />
      <Button text={"Confirmar"} css={"tarjet-button"} onClick={handleConfirm} />
    </div>
  );
};

export default Payment;


// import React from 'react'
// import CustomInput from '../../components/molecules/CustomInput'
// import IconButton from '../../components/atoms/IconButton'
// import "./Payment.css"
// import Button from '../../components/atoms/Button'
// const Payment = () => {
//   return (
//     <div className='payment-container'>
//       <IconButton icon={"material-symbols:arrow-back"} css={"payment-arrow-back"}/>
//       <img src="../../../src/assets/tarjeta.png" alt="" />
//       <CustomInput placeholder={"Cardholder name"}/>
//       <CustomInput placeholder={"Card number"}/>
//       <CustomInput placeholder={"Expire date"}/>
//       <CustomInput placeholder={"Cvv"}/>
//       <Button text={"Confirmar"} css={"tarjet-button"} onClick={()=>{}}/>
//     </div>
//   )
// }

// export default Payment