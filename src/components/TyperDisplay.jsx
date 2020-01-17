import React, { useContext } from 'react';
import { TyperContext } from '../contexts/TyperContext';


const TyperText = ({ word, wordId, currentId, isWrong, wrongList }) => (
    <span><span className={(wordId === currentId ? isWrong ? 'active danger' : 'active' : '') + (wrongList.includes(wordId) && wordId < currentId ? 'danger' : '') + (!wrongList.includes(wordId) && wordId < currentId ? 'primary' : '')}>{word}</span> </span>
)

const TyperDisplay = () => {
    const { display: { keyword, textId, isWrong, wrongList } } = useContext(TyperContext);
    return keyword.map((word, id) => <TyperText key={id} isWrong={isWrong} wrongList={wrongList} currentId={textId} wordId={id} word={word} />)
}

export default TyperDisplay;
