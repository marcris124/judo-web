import instagramLogo from "../assets/images/logoInstagram.webp";
import whatsappLogo from "../assets/images/whatsapp.webp";
import gmailLogo from "../assets/images/gmail.webp";
const ContactMe = () => {
  return (
    <div className="grid gap-12">
     <h2 className="app-h2 text-center"> Contact Me </h2>
      <div
        className=" grid items-center justify-center justify-items-center grid-cols-1 sm:grid-cols-3 gap-4"
        id="contact-me"
      >
        <a
          target={"_blank"}
          href="https://www.instagram.com/randorireto?igsh=MTZsNG1pcjg5bXZyZw=="
          className="card instagram"
        >
          <div className="overlay"></div>
          <div className="circle">
            <img className="logo" src={instagramLogo} width={75} alt="" />
          </div>
          <p>Instagram</p>
        </a>
        <a
          target={"_blank"}
          href="https://wa.me/+573145445530"
          className="card whatsapp"
        >
          <div className="overlay"></div>
          <div className="circle">
            <img className="logo" src={whatsappLogo} width={100} alt="" />
          </div>
          <p>whatsapp</p>
        </a>
        <a
          target={"_blank"}
          href="darioalejandroocampohenao@gmail.com"
          className="card gmail"
        >
          <div className="overlay"></div>
          <div className="circle">
            <img className="logo" src={gmailLogo} width={60} alt="" />
          </div>
          <p>gmail</p>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
