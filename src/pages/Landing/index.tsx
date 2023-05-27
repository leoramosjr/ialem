import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import HeroImage from '/images/HeroImage.png';
import Button from '../../components/base/Button';
import WhoWeAreCarrousel from '../../components/WhoWeAreCarrousel';
import OurTool from '../../components/OurTool';
import Footer from '../../components/Footer';
  
export default function Landing() {
  
    return (
        <Flex
            w={"100vw"}
            direction={"column"}
        >
            <NavBar />
            <Flex
                w={"100%"}
                h={{base: "auto", sm: "100vh"}}
                position={"relative"}
                zIndex={1}
                direction={"column"}
                justify={"center"}
                pl={{base: "48px", sm: "8rem"}}
                pr={{base: "48px", sm: "0"}}
                gap="2rem"
                mb={{base: "5rem", sm: "0"}}
            >
                <Image
                    position={"absolute"}
                    src={HeroImage}
                    w={"69rem"}
                    h={"39rem"}
                    top={"20%"}
                    left={"35%"}
                    zIndex={-1}
                    overflow={"hidden"}
                    display={{base: "none", sm: "block"}}
                />
                <Text
                    w={{base: "100%", sm: "58rem"}}
                    fontSize={{base: "24px", sm: "60px"}}
                    fontWeight={"500"}
                    lineHeight={"auto"}
                    fontFamily={"'Secular One', sans-serif"}
                    textAlign={{base: "center", sm: "left"}}
                >
                    A melhor ferramenta para você <Text as="span" color={"#94B0ED"}>ir além</Text> nos seus estudos
                </Text>
                <Flex
                    w={{base: "100%", sm: "600px"}}
                    direction={"column"}
                    align={"center"}
                    gap={"6rem"}
                >
                    <Text
                        fontSize={{base: "16px", sm: "28px"}}
                        fontWeight={"400"}
                        w={"100%"}
                        lineHeight={"1.25"}
                        fontFamily={"'Fira Sans', sans-serif"}
                        textAlign={{base: "center", sm: "left"}}
                    >
                        Nossa Inteligência Artificial irá ajudar-lhe com suas dúvidas nos conteúdos de Ensino Fundamental ao Ensino Médio, incluindo Matemática, Química, Biologia, entre outras competências
                    </Text>
                    <Button
                        width={{base: "200px", sm: "297px"}}
                        height={{base: "50px", sm: "82px"}}
                        label={'Acessar'}
                        fontSize={{base: "24px", sm: '32px'}}
                        onClick={() => {
                            window.location.href = '/iachat';
                        }}
                    />
                </Flex>
            </Flex>
            <WhoWeAreCarrousel />
            <OurTool />
            <Footer />
        </Flex>
    )
}