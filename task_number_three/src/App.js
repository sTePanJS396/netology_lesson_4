import React from 'react';
import './App.css';
import SelectFile from './components/SelectFile';
import ViewFile from './components/ViewFile';

function App() {
  const [state, setState] = React.useState([]);

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    let isRender = urls[0] !== undefined ? false : true
    if (!isRender) {
      setState(prev => [
        ...prev,
        {
          id: state.length + 1,
          src: urls[0],
          alt: 'Картинка'
        }
      ]);
    }
  }

  const removeElem = (id) => {
    setState(state.filter(el => el.id !== id))
  }
  

  return (
   <div className="container">
    <SelectFile change={handleSelect}/>
    <ViewFile 
      array={state} 
      remove={removeElem}
    />
   </div>
  );
}

export default App;
