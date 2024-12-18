"use client"
import { BasketIcon, LoginIcon, SearchIcon } from "@/public/icon/Icon"
import Button from "./Button"
import { FormEvent, useContext, useState } from "react"
import Modal from "./Modal"
import LoginInput from './LoginInput'
import { instance } from "@/hook/instance"
import RegisterInputs from "./RegisterInputs"
import VerifyRegister from "./RegisterInputs/VerifyRegister"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import LogoGreenShop from '../public/images/LogoGreenShop.png'
import Image from 'next/image';
import { Context } from "@/context/AuthContext"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Badge } from "@nextui-org/badge"


const Header = () => {
    const { token } = useContext(Context)
    const queryClient = useQueryClient()
    const [registerEmail, setRegisterEmail] = useState<string>("")
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "reset-password">("login")
    const { setToken } = useContext(Context)

    function loginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin == "login") {
            const data = {
                password: (e.target as HTMLFormElement).password.value,
                usernameoremail: (e.target as HTMLFormElement).email.value
            }
            instance().post("/login", data).then((res) => {
                setLoginModal(false)
                setToken(res.data.access_token)
                queryClient.invalidateQueries({ queryKey: ['products'] })
            })
        }
        else if (isLogin == "register") {
            const data = {
                firstName: (e.target as HTMLFormElement).username.value,
                lastName: (e.target as HTMLFormElement).username.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            if ((e.target as HTMLFormElement).password.value == (e.target as HTMLFormElement).confirm_password.value) {
                instance().post("/register", data).then(() => {
                    setRegisterEmail(data.email)
                    setIsLogin("verifyRegister")
                })
            }
            else {
                alert("Password must be same!")
            }
        }
        else if (isLogin == "verifyRegister") {
            const data = {
                email: registerEmail,
                code: (e.target as HTMLFormElement).code.value
            }
            instance().post("/users/verify", {}, {
                params: data
            }).then(() => setIsLogin("login"))
        }
        else if (isLogin == "forgotPassword") {
            const email = (e.target as HTMLFormElement).email.value
            instance().post(`/forgot/${email}`, {}).then(() => {
                setRegisterEmail(email)
                setIsLogin("reset-password")
            })
        }
        else if (isLogin == "reset-password") {
            const data = {
                email: registerEmail,
                new_password: (e.target as HTMLFormElement).password.value,
                otp: (e.target as HTMLFormElement).otp.value
            }
            instance().put(`/reset-password`, data).then(() => setIsLogin("login"))
        }
    }

    const { data: BasketProducts = [] } = useQuery({
        queryKey: ['basket_list'],
        queryFn: () => token ? instance().get(`/basket`, {
            headers: { "Authorization": `Bearer ${token}` },
            params: { page: 1, limit: 100000 }
        }).then(res => res.data.ProductId) : []
    })
    

    return (
        <header className="px-[120px] pt-[25px] flex items-center">
            <Image src={LogoGreenShop} alt="Logo Green Shop" priority />
            <nav className="flex items-center gap-[50px] ml-[230px]">
                <span className="text-[#3D3D3D] font-normal leading-[20px] text-[16px] cursor-pointer">Home</span>
                <span className="text-[#3D3D3D] font-normal leading-[20px] text-[16px] cursor-pointer">Shop</span>
                <span className="text-[#3D3D3D] font-normal leading-[20px] text-[16px] cursor-pointer">Plant Care</span>
                <span className="text-[#3D3D3D] font-normal leading-[20px] text-[16px] cursor-pointer">Blogs</span>
            </nav>
            <div className="flex items-center gap-[30px] ml-[260px]">
                <span className="cursor-pointer"><SearchIcon /></span>
                <button className="text-green-500 ">
                    <Badge color="success" className="text-white" content={token ? BasketProducts.length ? BasketProducts.length : "" : ""}>
                        <BasketIcon />
                    </Badge>
                </button>
            </div>

            <Button extraStyle="ml-[50px]" onClick={() => setLoginModal(true)} type='button' title="Login" leftIcon={<LoginIcon />} />
            <Modal isOpen={loginModal} setIsOpen={setLoginModal} width={500}>
                <ul className="flex items-center justify-center gap-2.5 mb-[53px]">
                    <li onClick={() => setIsLogin("login")} className={`${isLogin == "login" && "text-[#46A358]"} font - medium text - [20px] cursor - pointer`}>Login</li>
                    <li className="w-[1px] h-[16px] bg-black"></li>
                    <li onClick={() => setIsLogin("register")} className={`${isLogin == "register" && "text-[#46A358]"} font - medium text - [20px] cursor - pointer`}>Register</li>
                </ul>
                <form onSubmit={loginSubmit} className="w-[300px] mx-auto">
                    {isLogin == "login" && <LoginInput setIsLogin={setIsLogin} />}
                    {isLogin == "register" && <RegisterInputs />}
                    {isLogin == "verifyRegister" && <VerifyRegister registerEmail={registerEmail} />}
                    {isLogin == "forgotPassword" && <ForgotPassword />}
                    {isLogin == "reset-password" && <ResetPassword />}
                </form>
            </Modal>
        </header>
    )
}

export default Header