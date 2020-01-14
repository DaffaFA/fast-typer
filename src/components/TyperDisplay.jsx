import React, {useContext} from 'react';
import { TyperContext } from '../contexts/TyperContext';


const TyperText = ({word, wordId, currentId, isWrong}) => (
    <span className={wordId === currentId ? isWrong ? 'active danger' : 'active' : ''}>{ word } </span>
)

const TyperDisplay = () => {
    const { display: { keyword, textId, isWrong } } = useContext(TyperContext);
    return keyword.map((word, id) => <TyperText key={id} isWrong={isWrong} currentId={textId} wordId={id} word={word} />)
}

export default TyperDisplay;
