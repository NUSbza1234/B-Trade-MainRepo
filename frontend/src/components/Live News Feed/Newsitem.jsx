import React from 'react'
import image from './image.jpg'

const Newsitem = ({title, description, src, url}) => {
    //style={{height:"200px", width:"360px"}}
    //{description?description.slice(0, 90):"News for something that happened recently"}
    //{title.slice(0, 50)}
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">{description?description.slice(0, 90):"News for something that happened recently"}</p>
            <a href={url} class="btn btn-primary">Read More here</a>
        </div>
    </div>
  )
}

export default Newsitem