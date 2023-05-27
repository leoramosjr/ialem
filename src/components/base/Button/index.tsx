import {
    Button as ChakraButton,
} from '@chakra-ui/react'

export default function Button(
    {
        variant = "solid",
        width,
        height,
        label,
        fontSize,
        onClick,
    } : {
        variant?: "outline" | "solid" | undefined,
        width?: string | object,
        height?: string | object,
        label: string,
        fontSize?: string | object,
        onClick?: () => void,
    }
) {
    
    return (
        <ChakraButton
            height={height ? height : "48px"}
            width={width ? width : "130px"}
            borderRadius={"50px"}
            border={"2px solid #94B0ED"}
            bgColor={variant === "outline" ? "white" : "#94B0ED"}
            color={variant === "outline" ? "black" : "white"}
            fontSize={fontSize ? fontSize : "16px"}
            fontWeight={"400"}
            _hover={{
                bgColor: variant === "outline" ? "#94B0ED" : "white",
                color: variant === "outline" ? "white" : "black",
            }}
            onClick={onClick}
        >
            {label}
        </ChakraButton>
    )
}