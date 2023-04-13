import React from 'react';
import {useSelector} from "react-redux";
import FavoritesTable from "./FavoritesTable";

const Favorites = () => {
    const {favorites} = useSelector(state => state)
    return (
        <div className="container py-20 mt-50px w-[100%]">
                    {
                        favorites.map(el => <FavoritesTable product={el}/> )
                    }
        </div>
    );
};

export default Favorites;