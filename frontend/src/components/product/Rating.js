import React from 'react'

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/* loop throw the rating stars to fill them with value given */}
      {new Array(5)
        .fill('')
        .map((_, i) => i + 1)
        .map((currentStar) => (
          <span key={currentStar}>
            <i
              style={{ color }}
              className={
                value >= currentStar
                  ? 'fas fa-star'
                  : value >= currentStar - 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        ))}
      <span> {text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f0e786',
}

export default Rating
