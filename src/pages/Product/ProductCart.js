import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {RiDislikeFill} from 'react-icons/ri'
import {BsBasket3} from 'react-icons/bs'
const ProductCart = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) =>{
        dispatch({type:'ADD_TO_BASKET', payload: product})
    }
    const addToFavorite = (product) => {
        dispatch({type:'ADD_TO_FAVORITES', payload: product})
    }
    const [heart, setHeart]= useState(false)
    return (
            <div style={{
                margin:"100px 50px",

            }}
                 className="basis-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="src/pages/Product/ProductCart#">
                    <img className="rounded-t-lg w-[800px] h-[200px]" src={product.image} alt=""/>
                </a>
                <div className="p-5" style={{
                    display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"
                }}>
                    <a href="src/pages/Product/ProductCart#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                        <button onClick={() => addToBasket(product)}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            ДОБАВИТЬ В
                            <h1><BsBasket3 onClick={() =>{
                                setHeart(!heart)
                            }} style={{
                                display:heart ? "block" : "none",
                                fontSize:"20px",
                                margin:"0 10px"
                            }}/></h1>
                            <h1 onClick={() => addToFavorite(product)}><RiDislikeFill onClick={() => setHeart(!heart) }  style={{
                                display: heart ? "none" : "block",
                                margin:"0 4px",
                                fontSize:"25px",
                            }} className="hover"/></h1>
                        </button>
                </div>
            </div>
    );
};
export default ProductCart;