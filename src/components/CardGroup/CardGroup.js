import React from 'react'
import Card from '../Card/Card'

const CardGroup = () => {
    const products = [
        { id: 1, name: 'laptop pro', price: 125000 },
        { id: 2, name: 'laptop cro', price: 1344343 },
        { id: 3, name: 'laptop gro', price: 234423 }
    ]
    return (
        <div>
            <h1>This is my card</h1>
            <div className="card-group">
                {
                    products.map(product => <Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    )
}

export default CardGroup