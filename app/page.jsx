import LoginForm from "@/app/login/page";
import RegisterFrom from "@/app/register/page";
import Image from "next/image";
import landing_page from "@/app/landing_page/page";
import resume_uploader from "@/app/resume_uploader/page";

export default function Home() {
  
  return (
    <div>
     <LoginForm />
     <RegisterFrom />
     < landing_page />
     <resume_uploader />
    </div>
  );
}
