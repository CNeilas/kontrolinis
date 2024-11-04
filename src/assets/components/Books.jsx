import { useEffect, useState } from "react"
import axios from "axios"
import Book from "./Book"

const Books = () => {

    const [booksData, setBooksData] = useState()

    useEffect(() => {
        axios
        .get("https://mondayexam.onrender.com/api/v1/books")
        .then((response) => setBooksData(response.data))
        .catch(error => console.log(error))
    }, [])

  return (
    <div className="bookContainer">
        {booksData?.map((book) => {
           return <Book key={book.id} cover={book.cover} title={book.title} author={book.author} price={book.price} reserved={book.reserved}  />
        })}
    </div>
  )
}

export default Books
