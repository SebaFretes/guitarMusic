import React from 'react';
import { db } from '../data/db';

export const Guitar = ({handleAddToCart}) => {

    return (
        <div className="row">
            {db.map((item) =>
                <div key={item.id} className="col-md-6 col-lg-4 my-4">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <img className="img-fluid" src={`/img/${item.image}.jpg`} alt="guitar img" />
                        </div>
                        <div className="col-8">
                            <h3 className="text-black fs-4 fw-bold text-uppercase">{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="fw-black text-primary fs-3">${item.price}</p>
                            <button
                                type="button"
                                className="btn btn-dark w-100"
                                onClick={() => handleAddToCart(item)}
                            >Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
