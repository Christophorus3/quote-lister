import React from 'react'

const Quotes = (props) => {
  let { quotes } = props

  let quoteList = quotes.map(item => {
    return (
      <blockquote className="blockquote border rounded p-3" key={item._id}>
        <p className="mb-0">{item.quote}</p>
        <footer className="blockquote-footer">Someone famous called <cite title="Source Title">{item.name}</cite>
        </footer>
      </blockquote>
    )})

  return (
    <div>
      {quoteList}
    </div>
  )
}

export default Quotes