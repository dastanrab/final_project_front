import {useLocation, useNavigate,Navigate} from "react-router-dom";
import {authContext, useAuth} from "../Auth/useAuth";
import {useContext, useRef, useState} from "react";
import {check_otp, get_otp} from "../Helper/Helpers";
import {ToastContainer} from "react-toastify";
import {BsFillPhoneFill} from  "react-icons/bs";
import {BsChatLeftTextFill} from  "react-icons/bs";

export default function Login() {

    const navigate = useNavigate();
    const {login} = useContext(authContext);
    const [flag, setFlag] = useState(true)
    const input_value = useRef(null)
    const otp_value = useRef(null)
    const location = useLocation();
    const handleLogin = () => {
        login().then(() => {
            navigate("/");
        });
    };
    const first = () => {

        get_otp(setFlag, input_value.current.value)

    }
    const second = () => {
        let data = {
            token: otp_value.current.value
        }
        check_otp(data, handleLogin)
    }
    return flag ? (<div className='container w-100 justify-content-md-center my-auto ' dir='rtl'>
        <div className='container w-50 my-5 bg-transparent bg-opacity-75 bg-gradient shadow-sm rounded-3'>
            <div className="col-md-6 my-3 mx-auto" align="center">
                <div className='d-flex justify-content-center '>
                    <div className='  my-2 bg-secondary bg-opacity-30 bg-gradient text-white shadow-sm rounded-3 p-2 '><h3><b>شماره همراه خود را وارد کنید</b></h3></div>
                </div>
            </div>
            <div className="col-md-6 my-4 mx-auto" align="center">
                <div className='row'>

                    <div className='col-md-8'><label htmlFor="inputPassword2" className="visually-hidden">شماره همراه</label>
                        <input ref= {input_value} type="text" className="form-control"  placeholder="شماره همراه"/></div>
                    <div className='col-md-2'><BsFillPhoneFill size={40}/></div>
                </div>


            </div>
            <div className="col-md-6 my-2 mx-auto" align="center">
                <button onClick={first} className="btn btn-lg btn-secondary btn-lg mb-3 bg-secondary bg-opacity-30 bg-gradient shadow-sm rounded-1">ارسال پیامک</button>
            </div>
        </div>
        <ToastContainer /></div>): (<div className='container w-100 justify-content-md-center my-auto ' dir='rtl'>
        <div className='container w-50 my-5 bg-transparent bg-opacity-75 bg-gradient shadow-sm rounded-3'>
            <div className="col-md-6 my-3 mx-auto" align="center">
                <div className='d-flex justify-content-center '>
                    <div className='  my-2 bg-secondary bg-opacity-30 bg-gradient text-white shadow-sm rounded-3 p-2 '><h3><b>شماره همراه خود را وارد کنید</b></h3></div>
                </div>
            </div>
            <div className="col-md-6 my-4 mx-auto" align="center">
                <div className='row'>

                    <div className='col-md-8'>
                        <label htmlFor="inputPassword2" className="visually-hidden">کد پیامکی</label>
                        <input ref={otp_value} type="text" className="form-control" id="inputPassword2" placeholder="کد پیامکی"/>
                    </div>
                    <div className='col-md-2'><BsChatLeftTextFill size={60}/></div>
                </div>


            </div>
            <div className="col-md-6 my-2 mx-auto" align="center">
                <button onClick={second} className="btn btn-lg btn-secondary btn-lg mb-3 bg-secondary bg-opacity-30 bg-gradient shadow-sm rounded-1">ثبت کد پیامکی</button>
            </div>

        </div>
        <ToastContainer />
    </div>)
}



