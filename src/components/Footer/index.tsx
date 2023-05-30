import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import Creatus from '/images/Creatus.png';
import Globo from '/images/Globo.webp';
import Eldorado from '/images/Eldorado.svg';

export default function Footer() {

    return (
        <Flex
            w={"100vw"}
            h={{base: "200px", sm: "350px"}}
            backgroundColor={"#94B0ED"}
            direction={"column"}
            align={"center"}
            justify={"center"}
            padding={{base: "0", sm: "0 100px"}}
        >
            <Text
                color="white"
                fontSize={{base: "24px", sm: "64px"}}
                fontWeight={"600"}
                lineHeight={"1.25"}
                fontFamily={"'Fira Sans', sans-serif"}
            >Apoiadores</Text>
            <Flex
                w={"100%"}
                direction={"row"}
                align={"center"}
                justify={"center"}
                gap={{base: "2rem", sm: "10rem"}}
                padding={"2rem 0"}
            >
                <Image
                    h="auto"
                    w="20%"
                    src={Globo}
                    filter={"brightness(0) invert(1);"}
                />
                <Image
                    h="auto"
                    w="20%"
                    src={Creatus}
                />
                <Image
                    h="auto"
                    w="20%"
                    src={Eldorado}
                    filter={"brightness(0) invert(1);"}
                />
            </Flex>
        </Flex>
    )
}