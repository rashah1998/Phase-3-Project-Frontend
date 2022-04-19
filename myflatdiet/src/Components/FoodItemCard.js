import React from 'react'
function FoodItemCard({title,imageUrl,body }) {
    return (
        <div className="card-container">
          <div className="image-container">
           <img src={imageUrl} alt="pineapple" /> 
          </div>
          <div className="card-title">
              <h3>{title}</h3>
        </div>
        <div className="card-body">
           <p>{body}</p> 
        </div>
        <button>
            {/* <a>

            </a> */}
        </button>
        </div>
        )
    }


export default FoodItemCard