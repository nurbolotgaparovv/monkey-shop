import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCart from "./ProductCart";


const Product = () => {
    const data = [
        {
            id:1,
            title: 'DANIEL',
            description: 'БЕСПЛАТНО',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Macaca-fascicularis_flk18447014.jpg/1200px-Macaca-fascicularis_flk18447014.jpg'
        },
        {
            id:2,
            title: 'ARLEN',
            description: '99$',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://st2.depositphotos.com/2927537/7025/i/600/depositphotos_70254469-stock-photo-funny-monkey-with-a-red.jpg'
        },
        {
            id:3,
            title: 'NURBOLOT',
            description: '1000$',
            price: 4000,
            countInStock: 2,
            rating: 100,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VVWLDzThD0xgEM01kG-FOGkcIMjOBMhgOg&usqp=CAU'
        },
        {
            id:4,
            title: 'BAYAMAN',
            description: '90%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://nkj.ru/upload/iblock/64a/64a3faf328e3cd5ba7f17a6658e368c4.jpg'
        },
        {
            id:5,
            title: 'BARSBEK',
            description: 'В ПОДАРОК',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzacALLiToI-cRM-QLqZxbTnxN8LjfRFCteQ&usqp=CAU'
        },
        {
            id:6,
            title: 'CHYNGYZ',
            description: '75$',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCC0JhcQI9Lp9RixoOCz8OjIz8FSgf3vVuA&usqp=CAU'
        },

    ]
    const {product} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"GET_PRODUCT", payload:data})
    },[])
    return (
        <div className="container">
           <div className="flex flex-wrap">
               {
                   product.map(el => <ProductCart product={el}/>)
               }
           </div>
        </div>
    );
};
export default Product;