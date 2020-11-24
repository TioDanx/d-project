import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Checkout.css';
import {Link} from 'react-router-dom';

export default function Checkout() {
    const [checked, setChecked] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [orderID, setOrderID] = useState();
    const [loading, setLoading] = useState(false);
    const { cart } = useCartContext();
    let total = 0;


    useEffect(() => {
        cart.length === 0 ? setEmpty(true) : setEmpty(false);
        console.log(empty);
        ;
        console.log("total", total);
    }, []);

    function createOrder() {
        setLoading(true);
        const buyer = {
            name: document.getElementById("fname").value,
            lastName: document.getElementById("sname").value,
            number: document.getElementById("pnumber").value,
            email: document.getElementById("email").value
        };

        const newOrder = {
            ...buyer,
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: total
        };

        console.log(newOrder);

        const db = getFirestore();

        const orders = db.collection("orders");

        orders.add(newOrder).then(id => {
            console.log('Order created with id: ', id.id);
            setOrderID(id.id);
            setChecked(true);
            setLoading(false);
        });
    }


    return <>
        {loading && <Loading />}
        { empty && <div className="succesfull-bought">
            <h3>¡Ups! El carro esta vacio</h3>
            <img src="https://media.tenor.com/images/5bcb10b227fc02ea17809549df02663e/tenor.gif" width="400" height="400" alt=""/>
            <Link to="/">¡Empeza a comprar aca!</Link>
        </div>
        }
        {!checked && !loading && !empty && <> <div className="checkout-container">
            <h3>Para terminar su compra, por favor rellene este formulario</h3>
            <br />
            <div className="checkout-form">
                <div className="top-form">
                    <div className="input-label">
                        <label for="fname">Nombre</label>
                        <input className="input" type="text" id="fname" name="fname" />
                    </div>
                    <div className="input-label">
                        <label for="sname">Apellido</label>
                        <input className="input" type="text" id="sname" name="sname" />
                    </div>
                </div>
                <div className="bot-form">
                    <div className="input-label">
                        <label for="pnumber">Numero de telefono</label>
                        <input className="input" type="number" id="pnumber" name="pnumber" />
                    </div>
                    <div className="input-label">
                        <label for="email">Email</label>
                        <input className="input" type="mail" id="email" name="email" />
                    </div>
                </div>
                {cart.map(obj => { total = obj.item.price * obj.cant + total })}
                <p>total: {total}</p>
                <button className="button" onClick={createOrder}>Comprar</button>
            </div>


        </div>
        </>}
        {checked && <div className="succesfull-bought">
            <h3>¡Gracias por su compra!</h3>
            <img src="https://media1.tenor.com/images/e33ea4fca3906f8099b5a7385883b1a1/tenor.gif?itemid=14541086" alt="" width="400" height="400"/>
            <h4>ID de su compra: {orderID}</h4>
            <br/>
            <Link to="/">Volver a la pagina principal</Link>
        </div>}
    </>;

};
