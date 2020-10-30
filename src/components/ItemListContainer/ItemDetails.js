
    let available = 10; 
    const handleAdd = (counter) => {

        return () => {
            if(counter <= available){
            alert(`se van a agregar ${counter} items a su carrito` );
            }
            else alert("Por favor quite items" );
        }
    }
            <ItemCount onAdd={handleAdd} initial={15} available={available}/>