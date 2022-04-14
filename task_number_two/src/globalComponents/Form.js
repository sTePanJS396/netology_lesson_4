import React from 'react';
import FormButton from './elementComponents/FormButton';
import FormElem from './elementComponents/FormElem';
const Form = ({ valueInput, setValueInput, fetchingData }) => {
    return (
        <div className="form">
            <FormElem label="Дата (ДД.ММ.ГГГГ)" name='date' value={valueInput.date} setValue={setValueInput}/>
            <FormElem label="Расстояние (в км.)" name='distance' value={valueInput.distance} setValue={setValueInput}/>
            <FormButton label="OK" sending={fetchingData}/>
        </div>
    )
}

export default Form