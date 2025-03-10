import LoginForm from "@/app/login/page";
import RegisterFrom from "@/app/register/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <LoginForm />
     <RegisterFrom />
    </div>
  );
}
