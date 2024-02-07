import { ReactNode } from "react";
import { TouchableHighlightProps, TouchableOpacity, Text } from "react-native";


type ButtonPros = TouchableHighlightProps & {
    children: ReactNode
}

type ButtonTextProps={
    children: ReactNode
}

type ButtonIconProps={
    children: ReactNode
}


function Button({children, ...res}: ButtonPros){
    return(
        <TouchableOpacity  
            className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
            activeOpacity={0.7}
            {...res}
        >
            {children}
        </TouchableOpacity>
    )
}

function ButtonText({children}: ButtonTextProps) {
    return (
        <Text className="text-black font-heading text-base mx-2">
            {children}
        </Text>
    )
}

function ButtonIcon({children}: ButtonIconProps){
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export {Button}