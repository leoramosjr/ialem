import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import LogoImage from "/images/logo.png"
import Button from '../../components/base/Button';

export default function IAChat() {
    return (
        <Flex
            w={"100vw"}
            h={"100vh"}
            direction={"column"}
        >
            <Flex
                w={"100vw"}
                h={"7.5rem"}
                direction={"row"}
                justify={"space-between"}
                align={"center"}
                p={"30px 48px"}
                bg={"transparent"}
                color={"black"}
                position={"fixed"}
                zIndex={2}
                bgColor={"white"}
            >
                <Image
                    src={LogoImage}
                />
                <Flex gap={"40px"} align={"center"}>
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
                    {/* <Button
                        variant={"outline"}
                        label={"Cadastrar-se"}
                        width={"230px"}
                        height={"60px"}
                        fontSize={"16px"}
                    /> */}
                </Flex>
            </Flex>
        </Flex>
    )
}