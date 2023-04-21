import { Box, Flex } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Text.module.css";

export const WordChecker = ({
  word_prop,
  typed_array,
  toCheck,
  index,
  setTextArray,
}: {
  word_prop: [string, boolean, Number];
  typed_array: string;
  toCheck: string;
  index: Number;
  setTextArray: Dispatch<SetStateAction<any[]>>;
}) => {
  const [word, setWord] = useState(word_prop);
  let word_color: string = "red";

  const matched = { color: "green" };

  useEffect(() => {
    console.log("word: ", word);
  }, [toCheck]);

  useEffect(() => {
    if (
      !word[1] &&
      typed_array.replace(/\s/g, "") === word[0] &&
      index == word[2]
    ) {
      let flag = true;
      setTextArray((prevState) =>
        prevState.map((e) => {
          if (!e[1] && flag && e[0] === word[0]) {
            e[1] = true;
            flag = false;
          }
          return e;
        })
      );
    }
  }, [typed_array]);

  return (
    <Box
      fontWeight={200}
      fontSize={"3xl"}
      className={
        (index == word[2] &&
          toCheck === typed_array.replace(/\s/g, "") &&
          toCheck === word[0]) ||
        word[1]
          ? styles.matched
          : ""
      }
    >
      <Flex>
        {word[0].split("").map((e, key) => (
          <Box
            className={
              index == word[2]
                ? toCheck === word[0] && typed_array.split("")[key] == e
                  ? styles.matched_letter
                  : styles.unmatched_letter
                : ""
            }
          >
            {e}
          </Box>
        ))}
        <>&nbsp;</>
      </Flex>
    </Box>
  );
};
