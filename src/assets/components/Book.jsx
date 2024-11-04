const Book = (props) => {
    const { id, cover, title, author, price, reserved } = props

  return (
    <div className='book'>
      <img src={cover} alt="meow" />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{price}</p>
      {reserved ? <button>grazinti</button> : <button>isduoti</button>}
    </div>
  )
}

export default Book
