import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({product}) => {
    const dispatch = useDispatch()
    return (
        <tr className="bg-white mt-[100px] dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} width={50} alt=""/>
            </td>
            <td className="px-6 py-4">
                {product.description}
            </td>
            <td className="px-6 py-4">
               <button onClick={() => dispatch({type:'GET_QUANTITY', payload:1})}>-</button>
                &nbsp; {product.quantity} &nbsp;
                <button onClick={() => dispatch({type:'ADD_QUANTITY', payload:1})}>+</button>
            </td>
            <td className="px-6 py-4">
                {product.price}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#"
                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default BasketTable;