import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

const App = () => {

    const [selectedImg, setSelectedImg] = useState('');

    return (
        <div className='app'>
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg}/>
            {
                selectedImg !==''&&<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
            }
            
        </div>
    )
};

export default App;