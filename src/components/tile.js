
import React, { PropTypes } from 'react'

const Tile = ({ title, children }) => {
  if (title) {
    title = <h3>{title}</h3>;
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
