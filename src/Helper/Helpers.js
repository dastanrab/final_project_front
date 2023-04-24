import axios from "axios";
import {toast} from "react-toastify";


export function get(url,setData,setStatus,store=true) {
    axios
        .get(url)
        .then((response) => {
            if (store)
            {
                localStorage.setItem('tags',JSON.stringify(response.data.data));
                console.log('here')
                console.log(setData)
                console.log(response.data.data)

            }
            else {
                console.log(response.data.data)
                setData(response.data.data);
                setStatus(response.data.status);

            }

        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_tag_products(url,setData,setTag)
{
    axios
        .get(url)
        .then((response) => {

            console.log(response.data.data)
            setData(response.data.data);
            setTag(response.data.tag.name);



        })
        .catch((error) => {
            console.log(error);
        });
}
export function post(address,bodyParameters,token,with_callback = false,calback,calback_data){

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post(
        address,
        bodyParameters,
        config
    ).then(( response ) => {
        console.log( response )
        console.log('im here')
        calback_data.setStatus(prevState => {
            return {count: prevState.count + 1}
        })
        // calback(calback_data.url,calback_data.setReview,calback_data.setStatus,calback_data.store)
    }).catch((error) => {

        console.log(error);
    });
}
export function postReview(address,bodyParameters,token,flag,setFlag){

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post(
        address,
        bodyParameters,
        config
    ).then(( response ) => {

        console.log( response )
        setFlag(!flag)
        if (response.data.status == true)
        {
            toast.success('نظر ارسال شد', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error(response.data.data, {
                position: toast.POSITION.TOP_RIGHT
            });
        }


    }).catch((error) => {

        console.log(error);
    });
}
export function show_cart(setData) {
    axios
        .get('http://127.0.0.1:8000/api/cart/show')
        .then((response) => {
            console.log(response.data.data)
            setData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function inc_cart(url,setCart) {

    axios
        .get(url)
        .then((response) => {
            console.log(response.data.data)
            show_cart(setCart)
        })
        .catch((error) => {
            console.log(error);
        });
}
export function dec_cart(url,setCart) {

    axios
        .get(url)
        .then((response) => {
            console.log(response.data.data)
            show_cart(setCart)
        })
        .catch((error) => {
            console.log(error);
        });
}
export function del_cart(url,setCart) {

    axios
        .get(url)
        .then((response) => {
            console.log(response.data.data)
            show_cart(setCart)
        })
        .catch((error) => {
            console.log(error);
        });
}
export function useDec(url) {

    axios
        .get(url)
        .then((response) => {

            console.log(response.data.data)
            //show_cart(setCart())
        })
        .catch((error) => {
            console.log(error);
        });
}
export function useDel(url) {
    //  const {setCart} = useCart()
    axios
        .get(url)
        .then((response) => {
            console.log(response.data.data)
            //   show_cart(setCart())



        })
        .catch((error) => {
            console.log(error);
        });
}
export function useFlush(url) {
    //  const {setCart} = useCart()
    axios
        .get(url)
        .then((response) => {


            console.log(response.data.data)
            //             show_cart(setCart())



        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_otp(setData,mobile){

    axios
        .get('http://127.0.0.1:8000/api/login/'+mobile)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
                setData(false)
                toast.success('ارسال شد !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            toast.error(response.data.data, {
                position: toast.POSITION.TOP_RIGHT
            });

        })
        .catch((error) => {
            console.log(error);
        });
}
export function check_otp(otp,login){
    axios
        .post('http://127.0.0.1:8000/api/KCheck',otp)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
                toast.success('خوش امدید', {
                    position: toast.POSITION.TOP_RIGHT
                });
                localStorage.setItem('token', response.data.data);
                login()

            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_countries_cdn(setData)
{
    console.log('at get cdn')
    axios
        .get('https://flagcdn.com/en/codes.json')
        .then((response) => {
            console.log(response.data)
                setData(response.data)


        })
        .catch((error) => {
            console.log(error);
        });
}
export function post_country(data,token,setFlag){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios
        .post('http://127.0.0.1:8000/api/country/add',data,config)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
                get_countries(setFlag)
                toast.success('کشور اضافه شد', {
                    position: toast.POSITION.TOP_RIGHT
                });

            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
export function post_price(data,token,setFlag){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios
        .post('http://127.0.0.1:8000/api/price/add',data,config)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
                get_prices(setFlag)
                toast.success('برچسب قیمت', {
                    position: toast.POSITION.TOP_RIGHT
                });

            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
export function post_credit(data,token,setFlag){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios
        .post('http://127.0.0.1:8000/api/credit/add',data,config)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
                get_tag(setFlag)
                toast.success('برچسب اعتبار اضافه شد', {
                    position: toast.POSITION.TOP_RIGHT
                });

            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
export function post_product(data,token,setFlag,flag){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios
        .post('http://127.0.0.1:8000/api/product/add',data,config)
        .then((response) => {
            console.log(response.data.data)
            if (response.data.status === true)
            {
              //  get_products(setFlag)
                setFlag(!flag)
                toast.success('محصول اضافه شد', {
                    position: toast.POSITION.TOP_RIGHT
                });

            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_countries(setCountry)
{
    axios
        .get('http://127.0.0.1:8000/api/country')
        .then((response) => {
            console.log(response.data.data)
            setCountry(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_credit(setCredit)
{
    axios
        .get('http://127.0.0.1:8000/api/credit')
        .then((response) => {
            console.log('creditssssss')
            console.log(response.data.data)
            setCredit(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_tag(setTag)
{
    axios
        .get('http://127.0.0.1:8000/api/tag')
        .then((response) => {
            console.log('tags')
            console.log(response.data.data)
            setTag(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_products(setProduct)
{
    axios
        .get('http://127.0.0.1:8000/api/product')
        .then((response) => {
            console.log('get products')
            console.log(response.data.data)
            setProduct(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function get_prices(setPrice)
{
    axios
        .get('http://127.0.0.1:8000/api/price')
        .then((response) => {
            console.log(response.data.data)
            setPrice(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
export function del_country(id,setCountry) {

    axios
        .delete('http://127.0.0.1:8000/api/country/delete/'+id)
        .then((response) => {
            if (response.data.status == true)
            {

                toast.success('کشور حذف شد', {
                    position: toast.POSITION.TOP_RIGHT
                });
                get_countries(setCountry)
            }
            else {
                toast.error(response.data.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
export async function addTag(form_data) {
    try {
        const response = await axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/tag/add",
            data: form_data,
            headers: {"Content-Type": "multipart/form-data"},
        });
        console.log(response.data)
        if (response.data.status == true)
        {
            toast.success('دسته بندی اضافه شده', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error(response.data.data, {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    } catch (error) {
        console.log(error)
    }
}
export function get_blogs(setData){

        axios
            .get('http://127.0.0.1:8000/api/blog?limit=3')
            .then((response) => {
                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
}
