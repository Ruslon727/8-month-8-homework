import React, { SetStateAction } from "react"
import Button from "../Button"
import Input from "../Input"

interface LoginType {
    setIsLogin: React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" | "reset-password">>
}

const LoginInput: React.FC<LoginType> = ({ setIsLogin }) => {
    return (
        <>
            <p className="text-[13px] mb-[14px] ">Enter your username and password to login.</p>
            <Input extraClass="mt-[15px]" placeholder="almamun_uxui@outlook.com" type="email" name="email" />
            <Input extraClass="mt-[15px]" placeholder="***********" type="password" name="password" />
            <p onClick={() => setIsLogin("forgotPassword")} className="text-[#46A358] leading-[16px] text-[14px] font-normal mt-[14px] text-end cursor-pointer">Forgot Password?</p>
            <Button extraStyle="!w-full mt-[27px] " title="Login" type="submit" />
        </>
    )
}

export default LoginInput