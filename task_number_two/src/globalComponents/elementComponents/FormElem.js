import React from 'react'

const FormElem = ({ label, name, value, setValue }) => {
  return (
    <div className='form-elem'>
        <label className="form-label">{label}
            <input className="form-input" type="text" name={name} value={value} onChange={(e) => setValue(prev => ({...prev, [e.target.name]: e.target.value}))}/>
        </label>
    </div>
  )
}

export default FormElem