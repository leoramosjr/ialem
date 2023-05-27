import {
    Flex,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
  
export default function WhoWeAreCarrousel() {
  
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Flex
            w={"100vw"}
            h={"801px"}
            backgroundColor={"#94B0ED"}
            direction={"column"}
        >
            <Flex
                w={"100%"}
                direction={"row"}
                align={"flex-start"}
                justify={"flex-start"}
                pl="128px"
            >
                <Flex
                    h="270px"
                    w="412px"
                    bgColor={currentSlide !== 0 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={currentSlide !== 0 ? "translateY(0)" : "translateY(-35px)"}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(0)}
                    cursor="pointer"
                    direction="column"
                    pt={currentSlide !== 0 ? "50px" : "85px"}
                    pl="64px"
                    gap="1rem"
                >
                    <Text
                        color={currentSlide !== 0 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize="32px"
                        fontWeight="700"
                    >Quem Somos</Text>
                    <Text
                        w="221px"
                        color={currentSlide !== 0 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Conheça a nossa equipe</Text>
                </Flex>
                <Flex
                    h="270px"
                    w="412px"
                    bgColor={currentSlide !== 1 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={currentSlide !== 1 ? "translateY(0)" : "translateY(-35px)"}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(1)}
                    cursor="pointer"
                    direction="column"
                    pt={currentSlide !== 1 ? "50px" : "85px"}
                    pl="64px"
                    gap="1rem"
                >
                    <Text
                        color={currentSlide !== 1 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize="32px"
                        fontWeight="700"
                    >Nossa História</Text>
                    <Text
                        w="221px"
                        color={currentSlide !== 1 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Veja de onde viemos e para onde queremos ir</Text>
                </Flex>
                <Flex
                    h="270px"
                    w="412px"
                    bgColor={currentSlide !== 2 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={currentSlide !== 2 ? "translateY(0)" : "translateY(-35px)"}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(2)}
                    cursor="pointer"
                    direction="column"
                    pt={currentSlide !== 2 ? "50px" : "85px"}
                    pl="64px"
                    gap="1rem"
                >
                    <Text
                        color={currentSlide !== 2 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize="32px"
                        fontWeight="700"
                    >Nosso propósito</Text>
                    <Text
                        w="221px"
                        color={currentSlide !== 2 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Veja o que nos motivou a criar o IAlém e o que nos move para melhora-lo</Text>
                </Flex>
            </Flex>
            <Flex
                w={"100%"}
                h={"500px"}
                direction={"row"}
                bgColor="white"
                transform={"translateY(-35px)"}
            >
            </Flex>
        </Flex>
    )
}