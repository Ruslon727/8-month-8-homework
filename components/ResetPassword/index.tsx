import Button from "../Button"
import Input from "../Input"

const ResetPassword = () => {
    return (
        <>
            <Input extraClass="mt-[15px]" placeholder="Enter new password" type="password" name="password" />
            <Input extraClass="mt-[15px]" placeholder="Enter code" type="text" name="otp" />
            <Button extraStyle="!w-full mt-[27px] " title="Update Password" type="submit" />
        </>
    )
}

export default ResetPassword