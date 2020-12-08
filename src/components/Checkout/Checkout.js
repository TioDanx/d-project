import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Checkout.css';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';

function useTextInput(defaultValue) {
    const [val, setVal] = useState(defaultValue);

    return {
        onChange: evt => setVal(evt.target.value),
        value: val,
    };
}

export default function Checkout() {
    const [checked, setChecked] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [orderID, setOrderID] = useState();
    const [loading, setLoading] = useState(false);
    const { cart, clearCart } = useCartContext();

    const name = useTextInput("");
    const lastName = useTextInput("");
    const email = useTextInput("");
    const emailRepeat = useTextInput("");
    const phoneNumber = useTextInput("");

    let total = 0;

    useEffect(() => { cart.length === 0 ? setEmpty(true) : setEmpty(false); }, []);

    async function createOrder() {
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
            ...total
        };
        const db = getFirestore();
        const orders = db.collection("orders");
        if (document.getElementById("email").value == document.getElementById("email-repeat").value) {
            try {
                await orders.add(newOrder).then(id => {
                    setOrderID(id.id);
                    setChecked(true);
                    setLoading(false);
                    clearCart();
                });
            }
            catch (err) {
                console.log("No se pudo añadir la compra a la base de datos, intente nuevamente. Error:", err)
            }
        }
        else {
            alert("Los emails no coinciden");
            setLoading(false);
        }
    }

    return <>
        {loading && <Loading />}
        {empty && <Error text="¡Ups! El carro esta vacio" />}
        {
            !checked && !loading && !empty && <>
                {cart.map(obj => <div className="cart-item">
                    <img src={obj.item.photo} alt={obj.item.name} />
                    <div className="cart-item-midpart">
                        <h1>{obj.item.name} x{obj.cant}</h1>
                        <p style={{ marginTop: '20px' }}>{obj.item.description}</p>
                    </div>
                    <div className="cart-item-rightpart">
                        <h2>${obj.item.price}</h2>
                    </div>
                </div>)}
                <div className="cart-bottom">
                    {cart.map(obj => { total = obj.item.price * obj.cant + total })}
                    <h1>Total: ${total}</h1>
                </div>
                <div className="checkout-container">
                    <div className="checkout-form">
                        <h1>Para terminar su compra, por favor rellene este formulario</h1>
                        <br />
                        <div className="top-form">
                            <div className="input-label">
                                <label for="fname">Nombre</label>
                                <input {...name} className="input" type="text" id="fname" name="fname" />
                            </div>
                            <div className="input-label">
                                <label for="sname">Apellido</label>
                                <input {...lastName} className="input" type="text" id="sname" name="sname" />
                            </div>
                        </div>
                        <div className="bot-form">
                            <div className="input-label">
                                <label for="pnumber">Numero de telefono</label>
                                <input {...phoneNumber} className="input" type="number" id="pnumber" name="pnumber" />
                            </div>
                            <div className="input-label">
                                <label for="email">Email</label>
                                <input {...email} className="input" type="mail" id="email" name="email" />
                            </div>
                        </div>
                        <div className="email-confirmation">
                            <div className="input-label">
                                <label for="email-repeat">Repita el Email</label>
                                <input {...emailRepeat} className="input" type="mail" id="email-repeat" name="email-repeat" />
                            </div>
                        </div>
                        <button className="button" disabled={!name.value || !lastName.value || !phoneNumber.value || !email.value || !emailRepeat.value} onClick={createOrder}>Comprar</button>
                    </div>
                </div></>
        }
        {
            checked && <div className="succesfull-bought">
                <h3>¡Gracias por su compra!</h3>
                <img src="https://media1.tenor.com/images/e33ea4fca3906f8099b5a7385883b1a1/tenor.gif?itemid=14541086" alt="" width="400" height="400" />
                <h4>ID de su compra: {orderID}</h4>
                <br />
                <Link to="/">Volver a la pagina principal</Link>
            </div>
        }
    </>;

};
