import {BtnProps} from "../../../types";

const InputBtn = ({content, type}: BtnProps) => {
    return (
        <button type={type}>{content}</button>
    );
}

export default InputBtn;