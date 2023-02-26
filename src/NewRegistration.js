import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
const NewRegistration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("exampleRequired", { required: true })} />
            <TextField />
            <TextField />
            <Button type="submit">asd</Button>
        </form>
    )

}


export default NewRegistration