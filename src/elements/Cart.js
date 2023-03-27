
function Cart(params) {
    return (
        <div id="myCart">
            {params.bookCart.length ? (
                <>
                    <h1><span>Your Cart</span></h1>
                    <ul className="cartlist">
                        {params.bookCart.map((ele) => (<li>{ele}</li>))}
                    </ul>
                </>
            ) : (
                <h1>Your Cart is <span>Empty</span></h1>
            )}
        </div>
    );
}

export default Cart;