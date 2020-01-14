import React, { createContext, useState } from "react";

export const TyperContext = createContext();

const TyperContextProvider = ({ children }) => {
  const [text, setText] = useState("");

  const [textId, setTextId] = useState(0);

  const [isWrong, setIsWrong] = useState(false);

  const checkKeyword = () => {
    setIsWrong(!keyword[textId].includes(text));
    console.log(keyword[textId], isWrong)
  };

  const nextKeyword = () => {
    setText('')
    setTextId(textId + 1);
  }

  const keyword = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"
  ];

  let value = {
    type: {
      text,
      setText,
      checkKeyword,
      nextKeyword
    },
    display: {
      keyword,
      textId,
      isWrong
    }
  };

  return (
    <TyperContext.Provider value={value}>{children}</TyperContext.Provider>
  );
};

export default TyperContextProvider;
