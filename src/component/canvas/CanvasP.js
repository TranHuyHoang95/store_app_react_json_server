import React from 'react';
import  ItemCanvas  from "./ItemCanvas";

const CanvasP = ({products}) => {
    const loadItem = () =>{
        return  (
            products.map(wine =>
                <ItemCanvas key={wine.id} wine={wine} />
            )
        )
    }
    return (
        <div className="newproduct -product">
            {loadItem()}
        </div>

    );
}

export default CanvasP;