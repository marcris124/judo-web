import { useState } from "react";
import yudoLogo3D from "../assets/images/judoLogo3D.png"

const NavComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
  const dynamicClasses = isOpen ? "opacity-100" : "opacity-0 -translate-x-full";

  return (
    <div>
    <header className="relative ">
      <div className="container px-6 py-4 mx-auto lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between ">
          <a className="flex items-center -mx-1" href="#">
            {/* <svg
              className="w-8 h-8 mx-1 sm:h-10 sm:w-10"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.116 49C37.4348 49 48.2319 38.031 48.2319 24.5C48.2319 10.969 37.4348 0 24.116 0C10.7971 0 0 10.969 0 24.5C0 31.504 2.89291 37.8215 7.53104 42.2866C8.12815 41.9063 8.7211 41.5216 9.30948 41.1326C9.36842 40.7967 9.4391 40.3897 9.51815 39.9268C9.55946 39.6905 9.60387 39.4402 9.6559 39.179C9.69621 38.9688 9.74244 38.7526 9.79041 38.5283L9.81046 38.4345C10.0092 37.512 10.2176 36.4754 10.3882 35.389H10.3156C8.41217 35.4247 6.66631 34.9024 5.65798 33.749C5.19742 33.2236 4.87146 32.5661 4.77507 31.7779C4.67255 30.9354 4.83169 29.9421 5.3045 28.7934L5.3779 28.5804L5.69926 28.6519C6.92793 28.8944 8.50088 29.2177 9.57195 30.6292C10.0653 31.2779 10.4526 32.16 10.6454 33.3789C10.6633 33.1917 10.6793 33.0042 10.6933 32.8167C10.7762 31.711 10.7956 30.6075 10.7067 29.5693C8.63504 28.7398 6.97307 26.2773 6.49035 23.5906C6.30368 22.5507 6.28682 21.4765 6.4995 20.4707C6.82388 18.9365 7.65019 17.5577 9.05176 16.6313L9.19866 16.5255L9.42971 16.7229C11.2505 18.2323 12.164 20.3712 12.4118 22.6858C12.6459 24.887 12.2696 27.2467 11.4984 29.3732L11.3781 29.6908C11.5291 30.7021 11.5868 31.7757 11.5777 32.8555C11.5593 34.912 11.3115 36.9873 11.0009 38.6801C10.9535 38.9443 10.9014 39.1993 10.8448 39.4434C10.782 39.7092 10.7148 39.961 10.6459 40.1973L10.6316 40.2459C14.7321 37.4554 18.5897 34.4468 22.0602 31.2055C22.0508 31.0741 22.0361 30.8187 22.0331 30.4693C22.0315 30.3029 22.0316 30.1195 22.0469 29.9175C22.0618 29.7405 22.088 29.5526 22.1156 29.3551C22.1333 29.2282 22.1516 29.0974 22.1677 28.963C22.2279 28.473 22.2896 27.9462 22.3226 27.4117C21.0645 26.552 19.9959 25.3354 19.3003 24.0463C18.9606 23.4183 18.7096 22.7732 18.5628 22.1545C18.4052 21.4876 18.3531 20.8502 18.4357 20.2906C18.5933 19.2149 19.1458 18.3988 20.1893 18.133C20.9314 17.8455 21.7209 18.1253 22.4095 18.7938C23.1011 19.4653 23.6856 20.544 23.9962 21.783C24.4316 23.531 24.3003 25.5835 23.202 27.2651C23.2317 27.5264 23.2543 27.7884 23.271 28.0474C23.3 28.4796 23.3138 28.8993 23.3046 29.291C23.2975 29.5664 23.2891 29.8258 23.2586 30.0617C25.5089 27.8662 27.5801 25.5667 29.4294 23.1587C29.9268 22.5124 30.3353 21.9081 30.6982 21.2861L30.5366 20.973C29.6614 19.3268 29.1395 17.1755 29.1656 15.1547C29.1778 14.2453 29.3003 13.3623 29.542 12.5695C29.7914 11.7535 30.1555 11.0259 30.6513 10.4617C31.4271 9.57561 32.4844 9.05184 33.8523 9.14666C34.723 9.12801 35.3243 9.65181 35.6732 10.513C36.1674 11.7317 36.1183 13.6841 35.5966 15.5945C34.9527 17.9482 33.572 20.198 31.7152 21.0378C31.2708 21.9351 30.7656 22.7653 30.1011 23.6764C29.7506 24.1567 29.3917 24.6331 29.0247 25.1058C29.2302 25.0086 29.4436 24.9139 29.6635 24.8219C30.0145 24.6755 30.3805 24.538 30.757 24.4162C31.4576 23.0278 32.6907 21.7957 34.0642 20.9946C34.6961 20.6262 35.3571 20.3496 35.9982 20.1864C36.6745 20.0138 37.3294 19.9547 37.9093 20.0418C38.9865 20.2034 39.8234 20.7786 40.1111 21.8901C40.4125 22.6829 40.4079 23.3404 40.206 23.8782C39.8831 24.7441 39.014 25.3161 37.8863 25.6348C35.7029 26.2535 32.5386 25.9052 30.9733 25.257L30.9723 25.2565C30.9059 25.2895 30.8399 25.3229 30.7744 25.3566C30.0903 25.7088 29.4783 26.1243 28.9343 26.4937L28.9343 26.4937L28.9343 26.4937L28.9343 26.4938L28.9342 26.4938L28.9342 26.4938L28.9342 26.4938L28.9342 26.4938L28.9342 26.4938L28.9342 26.4938L28.9341 26.4938L28.9341 26.4938L28.9341 26.4939L28.9341 26.4939C28.7603 26.6119 28.5934 26.7252 28.4333 26.8302C28.1471 27.0185 27.8816 27.1721 27.6529 27.3044L27.6528 27.3045L27.6422 27.3106C27.2478 27.5371 26.9717 27.6797 26.8707 27.7308C24.3148 30.6854 21.445 33.4826 18.3425 36.1258C18.439 36.1119 18.5393 36.0987 18.6436 36.0869C18.8124 36.0679 18.9899 36.0507 19.1743 36.0327C19.8073 35.9711 20.5225 35.9014 21.2523 35.7293C21.4687 35.6779 21.6863 35.6211 21.9033 35.5574L21.987 35.372C22.9816 33.0947 24.7564 31.8122 26.7547 31.2324C27.5688 30.9977 28.4195 30.878 29.2641 30.864C30.5708 30.8438 31.8531 31.0661 32.964 31.3755L33.2684 31.4469L33.1323 31.8231C32.2065 34.5341 30.5218 35.8896 28.7041 36.4741C26.5136 37.1779 24.1071 36.7377 22.5258 36.1342C21.949 36.4308 21.3516 36.6668 20.7688 36.8547C20.293 37.0086 19.8324 37.1314 19.3979 37.2154C19.0658 37.2806 18.7522 37.3351 18.4645 37.3522C18.1662 37.3677 17.9014 37.3522 17.6765 37.332C17.3689 37.3036 17.1421 37.265 17.0113 37.239C14.3914 39.3898 11.6201 41.4355 8.74331 43.378C12.9167 46.8895 18.2737 49 24.116 49ZM11.0114 27.9892C11.5521 26.2913 11.8163 24.4779 11.6835 22.7543C11.5259 20.7024 10.8098 18.7795 9.31951 17.3447C8.2821 18.2215 7.74964 19.4075 7.54155 20.6713C7.39466 21.5574 7.40991 22.4853 7.56751 23.3932C7.93341 25.5055 9.03789 27.5171 10.5605 28.4423C10.4449 27.7963 10.2752 27.1887 10.0384 26.6376C9.98946 26.535 10.0323 26.4107 10.1333 26.3609C10.2358 26.3112 10.3583 26.3547 10.4072 26.4573C10.6511 26.9261 10.8507 27.4408 11.0114 27.9892ZM22.5488 24.6524C22.688 24.9504 22.8034 25.2783 22.8986 25.6249C23.3896 24.4456 23.4313 23.1334 23.2005 21.9664C22.9389 20.6435 22.3391 19.4948 21.6001 18.9321C21.2099 18.6352 20.786 18.5015 20.3622 18.6383C19.7808 18.9087 19.5145 19.4062 19.4289 20.0108C19.3523 20.5534 19.4548 21.1767 19.6614 21.8451C19.8251 22.3705 20.0608 22.9162 20.3545 23.4587C20.8522 24.3784 21.5208 25.2891 22.3316 26.0244C22.3079 25.5917 22.2543 25.1786 22.1524 24.8032C22.1126 24.6928 22.1677 24.5685 22.2764 24.5265C22.3865 24.4861 22.5075 24.5421 22.5488 24.6524ZM24.2238 34.9941C24.0152 35.1778 23.7965 35.3485 23.5703 35.5071C24.9526 35.9643 26.7796 36.2323 28.4914 35.7466C30.069 35.2974 31.5394 34.2014 32.4773 32.0298C31.293 31.8433 29.9481 31.82 28.6215 31.9942C27.7203 32.1123 26.8236 32.3174 25.9943 32.6921C24.9176 33.1785 23.9512 33.9275 23.2443 35.0524C23.4936 34.9332 23.737 34.7995 23.9714 34.6489C24.0647 34.579 24.1978 34.5993 24.2667 34.6941C24.3371 34.7889 24.3171 34.9226 24.2238 34.9941ZM32.451 24.636C33.9671 25.0596 36.1014 25.2538 37.6996 24.8871C39.1532 24.5513 40.1478 23.729 39.6138 22.0704C39.3292 21.4408 38.8151 21.147 38.1984 21.0522C37.6354 20.9652 36.9897 21.0755 36.3103 21.2994C35.7671 21.4766 35.2102 21.7346 34.6639 22.0548C33.7895 22.5663 32.9487 23.2386 32.3103 24.0291C32.7445 23.9552 33.1842 23.9113 33.6234 23.9063C33.7397 23.897 33.8422 23.984 33.8514 24.1021C33.8605 24.2203 33.7749 24.3244 33.6586 24.3337C33.2491 24.3997 32.8456 24.5043 32.451 24.636ZM33.1537 17.4958C32.915 18.1685 32.6929 18.7712 32.471 19.3278C33.5347 18.3933 34.3315 16.8876 34.8132 15.3568C35.3549 13.6375 35.5002 11.8669 35.0978 10.7399C34.8729 10.1135 34.4766 9.6969 33.8523 9.68291C32.9312 9.74975 32.2396 10.1352 31.7087 10.7042C31.1869 11.2638 30.8533 12.0224 30.6391 12.8836C30.4631 13.5924 30.3789 14.3681 30.3682 15.1702C30.3499 16.8413 30.6621 18.618 31.294 20.0621C31.3158 20.0536 31.3376 20.0449 31.3593 20.0359C31.7483 19.2256 32.1117 18.3337 32.5264 17.2564C32.5906 17.0792 32.7849 16.9906 32.9578 17.0558C33.1323 17.1227 33.2195 17.3201 33.1537 17.4958ZM5.92115 29.2597C5.69776 30.1784 5.69469 30.9525 5.82169 31.6085C5.93033 32.1681 6.15218 32.633 6.47962 33.0138C7.22631 33.8843 8.46259 34.3304 9.85651 34.4315C9.82897 32.8786 9.49543 31.8137 8.98285 31.0691C8.17496 29.8939 6.95091 29.5193 5.92115 29.2597Z"
                fill="#0a3e8d"
              />
            </svg> */}
            <img className="w-8 h-8 mx-1 sm:h-10 sm:w-10"src={yudoLogo3D} alt="main page" />
            <div className="mx-1 text-white ">
              <h3 className="uppercase tracking-[0.15em] font-semibold ">
              judo
              </h3>
              <p className="text-xs italic "> Domingo iruita</p>
            </div>
          </a>

          <button
            className="text-gray-600 lg:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={` absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#475F45] ${dynamicClasses}`}
        >
          <nav className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4 ">
            <a
              href="#home"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Home
            </a>

            <a
              href="#programs"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Programs & Events
            </a>

            <a
              href="#mision-vision"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
               Mision y Vision
            </a>

            <a
              href="#contact-me"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Contact Me
            </a>
            <a
              href="/all-flowers"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Registrarse
            </a>
          </nav>
        </div>
      </div>
    </header>
  </div>
  )
}

export default NavComponent