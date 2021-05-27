import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div>
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}
