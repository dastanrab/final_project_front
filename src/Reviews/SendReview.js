import {useContext, useState} from "react";
import {postReview} from "../Helper/Helpers";
import ShowReviews from "./ShowReviews";
import {authContext} from "../Auth/useAuth";
import {toast} from "react-toastify";


export default function SendReview(props)
{
    const [formStatus, setFormStatus] = useState('ثبت نظر')
    const [flag, setFlag] = useState(false)
    const {token} = useContext(authContext);
    const onSubmit = (e) => {
        e.preventDefault()

        const { p_id, rate, message } = e.target.elements
        let conFom = {
            p_id: p_id.value,
            vote: rate.value,
            body: message.value,
        }
        console.log('start post')
        console.log(token)
        if (token == null)
        {
            toast.info('شما باید لاگین کنید', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            postReview('http://127.0.0.1:8000/api/review/add',conFom,token,flag,setFlag)
            setFormStatus('نظر ارسال شد')
        }




    }
    return (
        <>
            <div className="d-flex justify-content-start">
                <div className="col-6 mt-5  p-6 mx-5 bg-dark bg-gradient rounded-2 text-white" style={{direction:"rtl",width:'500px'}} >

                    <div className=" col-10 mb-3 ">
                        <h4 className="mb-3 mt-3">نظر خود را در مورد این محصول برای ما ارسال کنید</h4>
                    </div>
                    <form onSubmit={onSubmit}>

                        <div className=" col-4 mb-3 mx-2">
                            <input className="form-control" type="hidden" id="p_id" value={props.id} />
                        </div>
                        <div className="col-4 mb-3 mx-2">
                            <label className="form-label" htmlFor="rate">
                                امتیاز
                            </label>
                            <select id="rate" className="form-control">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>

                            </select>
                        </div>
                        <div className="col-4 mb-3 mx-2">
                            <label className="form-label" htmlFor="message">
                                نظر
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <div className="col-4 mb-3 mx-2">
                            <button className="btn btn-primary mt-1" type="submit">
                                {formStatus}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <ShowReviews flag = {flag} id ={39}/>

        </>



    );
}