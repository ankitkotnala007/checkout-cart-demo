import React, { useState } from 'react';
import './index.css';

const Dialog = ({ message }) => {
    const [className , setclassName] = useState('message-dialog');
    return <div className="message-dialog">
        { message }
    </div>
}

export default Dialog;