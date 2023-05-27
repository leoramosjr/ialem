import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import OurToolImage from '/images/OurTool.png';

export default function OurTool() {

    return (
        <Flex
            w={"100vw"}
            h={{base: "auto", sm: "710px"}}
            backgroundColor={"white"}
            direction={{base: "column", sm: "row"}}
            align={"center"}
            justify={{base: "center", sm: "space-between"}}
            padding={{base: "2rem 16px", sm: "0 100px"}}
            id='nnossa-ferramenta'
            textAlign={{base: "center", sm: "left"}}
        >
            <Flex
                w={{base: "100%", sm: "50%"}}
                h={{base: "auto", sm: "100%"}}
                direction={"column"}
                justify={"center"}
                gap={"2rem"}
            >
                <Text
                    color="#2B8EAD"
                    fontSize={{base: "24px", sm: "64px"}}
                    fontWeight={"700"}
                    w={"100%"}
                    lineHeight={"1.25"}
                    fontFamily={"'Fira Sans', sans-serif"}
                >A ferramenta <Text as="span" color={"#94B0ED"}>IAlém:</Text></Text>
                <Text
                    fontSize={{base: "24", sm: "32px"}}
                    fontWeight={"400"}
                    w={"100%"}
                    lineHeight={"1.25"}
                    fontFamily={"'Fira Sans', sans-serif"}
                >
                    O IAlém é um sistema inovador baseado em Inteligência Artificial (IA) projetado para ajudar estudantes a aprimorar seu aprendizado. Utilizando um vasto banco de dados de sites educacionais confiáveis e conteúdos desenvolvidos por professores devidamente formados na área, o IAlém oferece suporte personalizado e adaptativo para estudantes em diversas disciplinas.
                </Text>
            </Flex>
            <Image
                src={OurToolImage}
            />
        </Flex>
    )
}