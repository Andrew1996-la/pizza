import {FC, ChangeEvent, FormEvent} from "react";
import './addPizzaForm.css'
import InputForm from "./inputForm/InputForm";
import InputBtn from "./inputBtn/InputBtn";

const AddPizzaForm:FC = () => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <InputForm name='title' type='text' placeholder='Название' handleChange={handleChange} value=''/>
                <InputForm name='price' type='text' placeholder='Стоимость' handleChange={handleChange} value='' />
            </div>
            <InputForm name='img' type='text' placeholder='Изображение' handleChange={handleChange} value='' />
            <InputBtn type='submit' content='+'/>
        </form>
    );
}

export default AddPizzaForm;