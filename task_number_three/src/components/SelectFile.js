import React from 'react'

const SelectFile = ({ change }) => {
  return (
    <div className="select-file-block">
        <input className='select-file-block-input' type='file' id="file" accept=".jpg, .jpeg, .png" onChange={(e) => change(e)}/>
        <label className="select-file-block-title" htmlFor="file">
            <span>Нажмите для выбора</span>
        </label>
    </div>
  )
}

export default SelectFile