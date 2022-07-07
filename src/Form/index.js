import {StyledForm, Wrapper, Input, Button, Info, Link, Bar } from "./styled";


export const Form = () => {
    return (
        <>
            <Wrapper>
                <Bar>Try it free 7 days then $20/mo. thereafter</Bar>
                <StyledForm>
                    <Input placeholder="First Name" />
                    <Input placeholder="Second Name" />
                    <Input placeholder="Email adress" />
                    <Input placeholder="Password" type="password" />
                    <Button>CLAIM YOUR FREE TRIAL</Button>
                    <Info>By clicking the button you are agreeing to our
                        <Link href=""> Terms and Services</Link>
                    </Info>
                </StyledForm>
            </Wrapper>
        </>
    )
};