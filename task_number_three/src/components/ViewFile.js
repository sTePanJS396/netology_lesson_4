import React from 'react'

const ViewFile = ({ array, remove }) => {
  return (
    <div className="view-file-block">
        <div className="view-file-block-view_elem" style={!array.length ? {height: '140px'} : {}}>
            <div className={`view-file-block-not_elem ${array.length && 'display'}`}>Тут будут ваши фото!</div>
            <div className="view-file-block-wrap">
                {array.map(el => (
                    <div key={el.id}>
                        <span className='view-file-block-view_item_span' onClick={() => remove(el.id)}>&nbsp; X &nbsp;</span>
                        <img className='view-file-block-view_item' src={el.src} alt={el.alt}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ViewFile