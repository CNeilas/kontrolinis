import { useState } from "react"
import axios from "axios"

const Registration = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        price: "",
        cover: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://mondayexam.onrender.com/api/v1/books", {formData}).then(response => console.log(response)).catch(error => console.log(error.response.data))
    }

  return (
    <div className="registration">
      <form className="bookForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required/>
        <label>Author</label>
        <input type="text" name="author" onChange={handleChange} required/>
        <label>Category</label>
        <input type="text" name="category" onChange={handleChange} required/>
        <label>Price</label>
        <input type="text" name="price" onChange={handleChange} required/>
        <label>Cover</label>
        <input type="url" name="cover" onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Registration
