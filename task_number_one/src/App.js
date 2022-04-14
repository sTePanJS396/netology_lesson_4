import './App.css';
import React from 'react'

function App() {
  const [value, setValue] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : null;
  }
  const {red, green, blue} = {...hexToRgb(value)}

  function checkingErrors() {
    if (value.length >= 7) {
      if (red === undefined && green === undefined && blue === undefined) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    } else {
      setIsError(false)
    }
  }

  React.useEffect(() => checkingErrors(), [value]) //Использую "useEffect" для того, чтобы при каждом изменении "value" проверять возможные недочеты.

  return (
    <div className="container">
      <div className={!isError ? 'container-wrap' : 'container-wrap warning'} style={{backgroundColor: value.length >= 7 && value}}>
        <div className="container-block">
          <input 
            className="container-input block" 
            type='text' 
            onChange={(event) => setValue(event.target.value)}
            placeholder="Введите HEX-код..."
            value={value}
          />
          <div className="container-result block">
            {!isError ? `rgb(${red || 0}, ${green || 0}, ${blue || 0})` : 'Ошибка!'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
