import { StyledForm, Wrapper, Input, Button, Info, Link, Bar, ErrorText } from "./styled";
import { useForm } from "react-hook-form";

export const Form = () => {

    const onSubmit = (data) => {
        console.log(data);
    };

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <Wrapper>
            <Bar>Try it free 7 days then $20/mo. thereafter</Bar>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                />
                {errors.firstName && <ErrorText>First Name cannot be empty</ErrorText>}

                <Input
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && <ErrorText>Last Name cannot be empty</ErrorText>}

                <Input
                    placeholder="Email adress"
                    {...register("email", { required: true })}
                />
                {errors.email && <ErrorText>Looks like this is not an email</ErrorText>}

                <Input
                    placeholder="Password" type="password"
                    {...register("password", { required: true, minLength: 8, })}
                />
                {errors.password && <ErrorText>Password must be at least 8 characters length</ErrorText>}

                <Button>CLAIM YOUR FREE TRIAL</Button>

                <Info>By clicking the button you are agreeing to our
                    <Link href=""> Terms and Services</Link>
                </Info>
            </StyledForm>
        </Wrapper>
    )
};