import React from "react";
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import { AiFillFileText, AiOutlineUser, AiOutlineTwitter} from 'react-icons/ai'
import './index.css'



const R4 = () => {
  
    const [testimonials, setTestimonials] = useState("")
    const [items, setItems] = useState()


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [testimonials])


    return (
        <div className="wrapper">
            <header>Testimonials</header>
            <div className="allButtons">
                <button onClick={() => setTestimonials("Posts")}><AiFillFileText />Posts</button>
                <button onClick={() => setTestimonials("Users")}><AiOutlineUser />Users</button>
                <button onClick={() => setTestimonials("Comments")}><AiOutlineTwitter />Comments</button>
            </div>
            <footer className="list">{!testimonials ? "select from above" : testimonials} 
            </footer>
            <div> {!items ? null : items.map((item) => {
                return (<div key={item.id}>
                    {item.title}
                    {item.name}
                </div>
            )})}</div>
        </div>
    )
}

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(<R4 />)