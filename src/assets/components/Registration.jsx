import { useState } from "react"
import axios from "axios"

const Registration = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        price: 0,
        cover: "",
        reserved: false
    })

    const handleChange = (event) => {
        setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://mondayexam.onrender.com/api/v1/books", formData).then(response => console.log(response)).catch(error => console.log(error.response.data))
    }

  return (
    <div className="registration">
      <form className="bookForm" action="POST" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required/>
        <label>Author</label>
        <input type="text" name="author" onChange={handleChange} required/>
        <label>Category</label>
        <input type="text" name="category" onChange={handleChange} required/>
        <label>Price</label>
        <input type="number" name="price" onChange={handleChange} required/>
        <label>Cover</label>
        <input type="url" name="cover" onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Registration
