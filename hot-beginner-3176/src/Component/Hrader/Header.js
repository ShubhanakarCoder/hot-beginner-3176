import React from 'react'
import "./Header.css";

const Header = ({ size, setShow }) => {
   
    return (
        <>
            <div className='whiteline'></div>

            <nav>
                <div className="nav_box">
                    <span className="my_shop" onClick={() => setShow(true)}>
                        My Shopping
                    </span>
                    <div className="cart" onClick={() => setShow(false)} >
                        {/* <button>
                            <Link to="/CartPage">Route Name</Link>
                        </button> */}
                        <span>
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        <span>{size}</span>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header