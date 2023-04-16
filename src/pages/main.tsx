import { Box, Container, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextGenerator from "../components/TextGenerator";
import { WordChecker } from "../components/WordChecker";

export default function () {
  const [text, setText] = useState(TextGenerator);
  const [typedText, setTypedText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [textElements, setTextElements] = useState([]);
  const [wordToCheck, setWordToCheck] = useState();

  let spaceCounter = 0;

  useEffect(() => {
    let boxArray = [];
    text.props.children
      .split(" ")
      .map((e: string) => boxArray.push([e, false]));
    setTextArray(boxArray);
  }, []);

  useEffect(() => {
    let currentArray = textArray.find((e) => e[1] == false);
    if (currentArray != null) {
      setWordToCheck(currentArray[0]);
      setTypedText("");
    }
  }, [textArray]);

  const handleChange = (e: any) => {
    setTypedText(e.target.value);
  };
  return (
    <Flex flexDirection={"column"} width={"100%"}>
      <Flex
        fontWeight={"200"}
        color={"white"}
        fontSize="3xl"
        justifyContent={"center"}
        bgColor="grey"
      >
        Type-Race
      </Flex>

      {/* test */}
      {/* <Flex>
        <WordChecker word_prop="Loren" typed_array={typedText} completed={false} />
        <>&nbsp;</>
        <WordChecker word_prop="Fruit" typed_array={typedText} completed={false}/>
      </Flex> */}

      <Flex
        height={"50%"}
        fontSize="3xl"
        justifyContent={"center"}
        alignItems={"center"}
        mt="100px"
        fontWeight={300}
        backgroundColor={"gray.200"}
      >
        <Flex width={"75%"} flexWrap={"wrap"}>
          {textArray.map((e: [string, boolean], k: any) => {
            return (
              <Box key={k}>
                <WordChecker
                  word_prop={e}
                  toCheck={wordToCheck}
                  typed_array={typedText}
                  setTextArray={setTextArray}
                ></WordChecker>
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <Flex justifyContent={"center"} mt={"50px"}>
        <Input
          width={"75%"}
          fontSize={"3xl"}
          height={"50px"}
          onChange={handleChange}
          value={typedText}
          type={"text"}
          placeholder={"start typing"}
          fontWeight={"300"}
        ></Input>
      </Flex>
    </Flex>
  );
}
