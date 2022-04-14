import React from 'react'

const FormButton = ({ label, sending }) => {
  return (
    <div className='form-elem'>
        <button className="form-button" name="form-button" id="form-button" onClick={sending}>{label}</button>
    </div>
  )
}

export default FormButton