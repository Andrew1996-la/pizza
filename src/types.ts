import React from "react";

export type InputProps = {
    name: string,
    type: string,
    placeholder: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export type BtnProps = {
    content: string,
    type: 'submit' | 'button',
}