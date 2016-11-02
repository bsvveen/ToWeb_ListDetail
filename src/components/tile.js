
import React, { PropTypes } from 'react'

const Tile = ({ title, children }) => {
  if (title) {
    title = <div><h3>{title}</h3><hr /></div>
  }

  return (
    <div className="tile">
        <div>
          {title}
          {children}
      </div>
    </div>
  )
}

Tile.propTypes = {
    title: PropTypes.string
}

export default Tile
