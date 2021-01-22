import React from 'react';
import './Backdrop.css';

interface Props {
    onClick: () => void
}

const Backdrop: React.FC<Props> = props => {
    return <div className="backdrops" onClick={props.onClick}></div>
};

export default Backdrop;
