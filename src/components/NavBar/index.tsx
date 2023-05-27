import {
    Flex,
    Link,
    Image,
} from "@chakra-ui/react";
import Button from "../base/Button";

import LogoImage from "/images/logo.png"

export default function NavBar() {
    return (
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
                w={{base: "150px", sm: "300px"}}
            />
            <Flex gap={"40px"} align={"center"}>
                <Link
                    href={"#quem-somos"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"}
                    display={{base: "none", sm: "block"}}
                >
                    Quem Somos
                </Link>
                <Link
                    href={"#nossa-ferramenta"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"} 
                    display={{base: "none", sm: "block"}}
                >
                    Nossa Ferramenta
                </Link>
                {/* <Link
                    href={"#"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"}
                >
                    Agende sua Aula
                </Link> */}
                <Button
                    variant={"solid"}
                    label={"Acessar"}
                    width={{base: "80px", sm: "230px"}}
                    height={{base: "40px", sm: "60px"}}
                    fontSize={"16px"}
                    onClick={() => {
                        window.location.href = '/iachat';
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
    )
}