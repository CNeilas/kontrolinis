import { useState } from "react"
import Toast from 'react-bootstrap/Toast';

const Reviews = () => {
    const [showA, setShowA] = useState(false);
    
    

    const [formData, setFormData] = useState({
        name: "", 
        title: "",
        text: ""
    })

    const handleChange = (event) => {
        setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowA(true)
    }

    const toggleShowA = () => setShowA(!showA);

  return (
    <div>
         <Toast className="toast" show={showA} onClose={toggleShowA} autohide={true} delay={2000}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Review posted</strong>
          </Toast.Header>
          <Toast.Body>Thank you {formData.name}, we got your review</Toast.Body>
        </Toast>
      <form className="bookForm" action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required />
        <label>Text</label>
        <textarea type="text" name="text" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Reviews
