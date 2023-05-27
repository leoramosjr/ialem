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
        >
            <Image
                src={LogoImage}
            />
            <Flex gap={"40px"} align={"center"}>
                <Link
                    href={"#"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"}
                >
                    Quem Somos
                </Link>
                <Link
                    href={"#"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"}
                >
                    Nossa Ferramenta
                </Link>
                <Link
                    href={"#"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    mr={"48px"}
                >
                    Agende sua Aula
                </Link>
                <Button
                    variant={"solid"}
                    label={"Login"}
                    width={"230px"}
                    height={"60px"}
                    fontSize={"16px"}
                />
                <Button
                    variant={"outline"}
                    label={"Cadastrar-se"}
                    width={"230px"}
                    height={"60px"}
                    fontSize={"16px"}
                />
            </Flex>
        </Flex>
    )
}