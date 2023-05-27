import {
    Flex,
    Image,
    Input,
    Text,
    VStack,
    Spinner,
} from '@chakra-ui/react';
import LogoImage from "/images/logo.png"
import CharIA from "/images/CharIA.png"
import CharUser from "/images/CharUser.png"
import Button from '../../components/base/Button';
import { ChangeEvent, useEffect, useState } from 'react';

interface Message {
    question: string;
    answer: string;
  }

export default function IAChat() {

    const [messages, setMessages] = useState<Message[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentQuestion(event.target.value);
    };

    const handleSendMessage = () => {
        setIsLoading(true);
        const newMessage: Message = {
        question: currentQuestion,
        answer: '',
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        generateAnswer(currentQuestion);
        setCurrentQuestion('');
    };

    const generateAnswer = async (question : string) => {
        const prompt = `${question}`;
      
        try {
          const apiKey = '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';
          const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // URL do endpoint da API da OpenAI
      
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              prompt: prompt,
              temperature: 0.5,
              max_tokens: 1000,
              top_p: 1,
              n: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
              stop: ""
            })
          });
          
          const data = await response.json();
          const answer = data.choices[0].text.trim();
          setIsLoading(false);
          setMessages((prevMessages) =>
            prevMessages.map((message, index) =>
                index === prevMessages.length - 1
                ? { ...message, answer: answer }
                : message
            )
        );
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleKeyPress(event: { key: string; }) {
        if(event.key === 'Enter'){
            handleSendMessage();
        }
    }

    function scrollDown() {
        const chat = document.getElementById('chat');
        if (chat) {
            chat.scrollTop = chat.scrollHeight;
        }
    }

    useEffect(() => {
        scrollDown();
    }, [messages]);

    return (
        <Flex w={'100vw'} h={'100vh'} direction={'column'}>
            <Flex
                w={'100vw'}
                h={'7.5rem'}
                direction={'row'}
                justify={'space-between'}
                align={'center'}
                p={'30px 48px'}
                bg={'transparent'}
                color={'black'}
                position={'fixed'}
                zIndex={2}
                bgColor={'white'}
                boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            >
                <Image src={LogoImage} />
                <Button
                    variant={"solid"}
                    label={"Sair"}
                    width={"230px"}
                    height={"60px"}
                    fontSize={"16px"}
                    onClick={() => {
                        window.location.href = '/';
                    }}
                />
            </Flex>
            <Flex
                id={'chat'}
                flex={1}
                h={"auto"}
                direction={'column'}
                p={'150px 208px 40px'}
                overflowY={'scroll'}
                scrollBehavior={'smooth'}
                bgColor={'#F2F2F2'}
            >
                {messages.map((message, index) => (
                <VStack
                    key={index}
                    spacing={4}
                    my={4}
                    display={'flex'}
                    flexDirection={'column'}
                >
                    {message.question && (
                        <Flex alignSelf={"flex-end"} align={"center"} justify={"flex-end"}>
                            <Text
                                maxW={"80%"}
                                bg={'#FFFFFF'}
                                p={"24px"}
                                borderRadius={'16px 0 16px 16px'}
                                fontFamily={"'Secular One', sans-serif"}
                                fontWeight="400"
                            >
                                {message.question}
                            </Text>
                            <Image
                                src={CharUser}
                                w={'100px'}
                                h={'100px'}
                            />
                        </Flex>
                    )}
                    {message.answer && (
                        <Flex alignSelf={"flex-start"} align={"center"} gap="1rem" justify={"flex-start"}>
                            <Image
                                src={CharIA}
                                w={'100px'}
                                h={'100px'}
                                borderRadius={"50%"}
                            />
                            <Text
                                maxW={"80%"}
                                bg={'#94B0ED'}
                                p={"24px"}
                                borderRadius={'0 16px 16px 16px'}
                                fontFamily={"'Secular One', sans-serif"}
                                fontWeight="400"
                            >
                                {message.answer}
                            </Text>
                        </Flex>
                    )}
                </VStack>
                ))}
            </Flex>
            <Flex
                w={'100vw'}
                h={'10rem'}
                p={'0 48px 24px'}
                bgColor={'white'}
                align={'center'}
                justify={'center'}
                boxShadow={'4px -4px 4px rgba(0, 0, 0, 0.25)'}
            >
                {isLoading && (
                    <Flex
                        left={'15%'}
                        bottom={'20%'}
                        justifySelf={'flex-start'}
                        position={'absolute'}
                        gap="1rem"
                        fontSize={'16px'}
                        fontWeight={'400'}
                    >
                        <Spinner
                            thickness="2px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="#94B0ED"
                            size="md"
                        />
                        Carregando resposta...
                    </Flex>
                )}
                <Flex
                    w="80%"
                    align={'center'}
                    justify={'center'}
                    gap={"2rem"}
                >
                    <Input
                        flex={1}
                        placeholder={'Digite sua pergunta...'}
                        boxShadow={'0px 1px 1px rgba(0, 0, 0, 0.25)'}
                        value={currentQuestion}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <Button
                        variant={"solid"}
                        label={"Enviar"}
                        width={"180px"}
                        height={"40px"}
                        fontSize={"16px"}
                        onClick={() => handleSendMessage()}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}