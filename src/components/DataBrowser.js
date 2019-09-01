import React from 'react'

const DataBrowser = ({data}) => (
  <ul>
    {
      data.items && data.items.map(
        (item, i) => (
          <li key={i}>{item.title}</li>
        )
      )
    }
  </ul>
)

export default DataBrowser