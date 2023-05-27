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
                h={"100vh"}
                position={"relative"}
                zIndex={1}
                direction={"column"}
                justify={"center"}
                pl={"8rem"}
                gap="2rem"
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
                />
                <Text
                    w={"58rem"}
                    fontSize={"60px"}
                    fontWeight={"500"}
                    lineHeight={"auto"}
                    fontFamily={"'Secular One', sans-serif"}
                >
                    A melhor ferramenta para você <Text as="span" color={"#94B0ED"}>ir além</Text> nos seus estudos
                </Text>
                <Flex
                    w={"640px"}
                    direction={"column"}
                    align={"center"}
                    gap={"6rem"}
                >
                    <Text
                        fontSize={"28px"}
                        fontWeight={"400"}
                        w={"100%"}
                        lineHeight={"1.25"}
                        fontFamily={"'Fira Sans', sans-serif"}
                    >
                        Nossa Inteligência Artificial irá ajudar-lhe com suas dúvidas nos conteúdos de Ensino Fundamental ao Ensino Médio, incluindo Matemática, Química, Biologia, entre outras competências
                    </Text>
                    <Button
                        width={'297px'}
                        height={'82px'}
                        label={'Acessar'}
                        fontSize={'32px'}
                    />
                </Flex>
            </Flex>
            <WhoWeAreCarrousel />
            <OurTool />
            <Footer />
        </Flex>
    )
}