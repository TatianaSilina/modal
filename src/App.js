import React from 'react';
import './index.scss';
import Modal from "./Modal";


function App() {
    const [open, setOpen] = React.useState(false);
  return (
      <div className="App">
        <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
        <Modal open={open} setOpen={setOpen} />
      </div>
  );
}

export default App;
