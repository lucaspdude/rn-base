import React from 'react';

import { FormInputContainer, LabelText, FormInputItem, FormInputError, FormInputHelp  } from './styles';

interface InputProps {
    name: string,
    label?: string,
    help?: string,
}

const Input: React.FC<InputProps> = ({name, label, help, type, error, ...rest}) => {

    return (
        <FormInputContainer>

            {label && <LabelText>{label}</LabelText>}

            <FormInputItem
                name={name}
                id={name}
                type={type}
                secureTextEntry={type === "password" ? true : false}
                {...rest}
            />



            {help && <FormInputHelp>{help}</FormInputHelp>}
            {error && <FormInputError>{error}</FormInputError>}


        </FormInputContainer>
    )
}

export default Input;