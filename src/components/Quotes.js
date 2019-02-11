import React from 'react'

const Quotes = (props) => {
  let { quotes } = props

  let quoteList = quotes.map(item => {return <li key={item._id}>{item.name}</li>})

  return (
    <div>
      <ul>
        {quoteList}
      </ul>
    </div>
  )
}

export default Quotes