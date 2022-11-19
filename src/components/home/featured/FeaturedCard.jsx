import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
           {items.topImg && <img style={{width:'100%',height:"auto"}} className="card-img" src={items.topImg} alt =''/>}
            <img src={items.cover} alt='' />
            <h4 style={{margin:'5px'}}>{items.name}</h4>
            <p>{items.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
