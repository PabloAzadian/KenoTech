import React from 'react'
import {data} from "../ItemData"

function ItemList() {
    return (
      <div className="item-list">
        {data.map((category, index) => (
          <div className="category" key={index}>
            <h2>{category[0].category}</h2>
            <div className="cards">
              {category.map((computer, idx) => (
                <div className="card" key={idx}>
                  <img src={computer.imgSrc} alt={computer.name} />
                  <h3>{computer.name}</h3>
                  <p>Price: ${computer.price}</p>
                  <p>Processor: {computer.processor}</p>
                  {/* Add more details here if needed */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

export default ItemList