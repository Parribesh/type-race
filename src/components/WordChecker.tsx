import { Box } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Text.module.css";

export const WordChecker = ({
  word_prop,
  typed_array,
  toCheck,
  setTextArray,
}: {
  word_prop: [string, boolean];
  typed_array: string;
  toCheck: string;
  setTextArray: Dispatch<SetStateAction<any[]>>;
}) => {
  const [word, setWord] = useState(word_prop);
  let word_color: string = "red";

  const matched = { color: "green" };

  useEffect(() => {
    console.log("word", word);
    console.log("word-to-check", toCheck);
    toCheck;
  }, [typed_array]);

  useEffect(() => {
    if (!word[1] && typed_array.replace(/\s/g, "") === word[0]) {
      setTextArray((prevState) =>
        prevState.map((e) => {
          if (e[0] === word[0]) {
            e[1] = true;
          }
          return e;
        })
      );
    } else {
    }
  }, [typed_array]);

  return (
    <Box
      fontWeight={200}
      fontSize={"3xl"}
      className={
        (toCheck === typed_array.replace(/\s/g, "") && toCheck === word[0]) ||
        word[1]
          ? styles.matched
          : ""
      }
    >
      {word}
      {/* {word[0].split("").map((e) => (
        <Box>{e}</Box>
      ))} */}
      <>&nbsp;</>
    </Box>
  );
};
