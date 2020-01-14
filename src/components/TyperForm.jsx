import React, { useContext } from 'react';
import { TyperContext } from '../contexts/TyperContext';

const TyperForm = () => {
    const { type: { text, setText, checkKeyword, nextKeyword } } = useContext(TyperContext);

    React.useEffect(() => checkKeyword(), [checkKeyword, text])

    const changeHandler = e => {
        if ( e !== ' ' ) {
            setText(e)
        }
    }

    const keyHandler = ({keyCode}) => {
        return keyCode === 32 && text.trim().length > 0 ? nextKeyword() : null
    }

    return (
        <input type="text" value={text} className="input" onKeyDown={keyHandler} onChange={e => changeHandler(e.target.value)} />
    )
}

export default TyperForm