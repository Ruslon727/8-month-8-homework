import Button from "../Button"
import Input from "../Input"

const ForgotPassword = () => {
    return (
        <>
            <Input extraClass="mt-[15px]" placeholder="almamun_uxui@outlook.com" type="email" name="email" />
            <Button extraStyle="!w-full mt-[27px] " title="Get code" type="submit" />
        </>
    )
}

export default ForgotPassword