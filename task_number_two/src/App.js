import React from 'react';
import './App.css';
import Form from './globalComponents/Form';
import Table from './globalComponents/Table';

function App() {
  const [formInput, setFormInput] = React.useState({date: '', distance: ''});
  const [data, setData] = React.useState([]);
  // Решил все основные операции проводить в App.js, поэтому буду использовать основные стейты в App.js
  
  function ggg() {
    let isset = false;
    let newData = [];

    data.forEach((el) => {
      if (el.date === formInput.date) {
        isset = true;
      }
    })

    if (isset) {
      newData = data.map(el => {
        if (el.date === formInput.date) {
          return {...el, distance: el.distance + Number(formInput.distance)}
        }
        return el
      })
    } else {
      newData = [
          ...data,
        {
          id: data.length + 1,
          date: formInput.date,
          distance: Number(formInput.distance)
        }
      ]
    }
    newData.sort((a, b) => a.date < b.date ? 1 : -1)
    setData(newData)
    setFormInput({date: '', distance: ''});
  }

  function removeElement(id) {
    setData(data.filter(el => el.id !== id))
  }

  function changeElement(id) {
    setData(data.map(el => {
      if (el.id === id) {
        return {...el, distance: Number(window.prompt('Новая дистанция...'))}
      }
      return el
    }))
  }
  

  return (
    <div className="app">
      <div className="app-form-block">
        <Form valueInput={formInput} setValueInput={setFormInput} fetchingData={ggg}/>
      </div>
      <div className="app-table-block">
        <Table data={data} remove={removeElement} change={changeElement}/>
      </div>
    </div>
  );
}
export default App;