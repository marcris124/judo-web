import instagramLogo from "../assets/images/logoInstagram.png"
import whatsappLogo from "../assets/images/whatsapp.png"
import gmailLogo from "../assets/images/gmail.png"
const ContactMe = () => {
  return (
    <div className=" grid items-center justify-center justify-items-center grid-cols-1 sm:grid-cols-3 gap-4">
        <a target={"_blank"} href="https://www.instagram.com/randorireto?igsh=MTZsNG1pcjg5bXZyZw==" className="card instagram">
            <div className="overlay"></div>
            <div className="circle">
            <img className="logo" src={instagramLogo}  alt="" />
            </div>
            <p>Instagram</p>

        </a>
        <a target={"_blank"} href="" className="card whatsapp">
            <div className="overlay"></div>
            <div className="circle">
            <img className="logo" src={whatsappLogo} width={100} alt="" />
            </div>
            <p>whatsapp</p>

        </a>
        <a target={"_blank"} href="darioalejandroocampohenao@gmail.com" className="card gmail">
            <div className="overlay"></div>
            <div className="circle">
            <img className="logo" src={gmailLogo} width={60}  alt="" />
            </div>
            <p>gmail</p>

        </a>
    </div>
  )
}

export default ContactMe