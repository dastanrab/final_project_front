import AddCountry from "../Country/AddCountry";
import {CountryProvider} from "../Country/useCountry";
import AddTag from "../Tag/AddTag";
import {PriceProvider} from "../Price/usePrice";
import AddPrice from "../Price/AddPrice";
import {CreditProvider} from "../Credit/useCredit";
import AddCredit from "../Credit/AddCredit";
import AddProduct from "../Product/AddProduct";
import {TagContext, TagProvider} from "../Tag/useTag";
import {ProductProvider} from "../Product/useProduct";

export default function Products()
{
    return <>
        <CountryProvider>
            <CreditProvider>
         <PriceProvider>
         <TagProvider>
             <ProductProvider>

            <div className='container'>
                <div className='row' dir='rtl'>
                    <div className='col-md-6 justify-content-center my-3 align-self-center border-2 border-success shadow-sm ' style={{height:'500px',overflow:'scroll'}}>
                        <h3>اضافه کردن کشور</h3>
                        <br/>
                        <AddCountry/>
                    </div>
                    <div className='col-md-6 justify-content-center my-3 align-self-center border-2 border-success shadow-sm ' style={{height:'500px'}}>
                        <h3>اضافه کردن دسته بندی</h3>
                        <br/>
                        <AddTag/>
                    </div>
                    <div className='col-md-6 justify-content-center my-3 align-self-center border-2 border-success shadow-sm ' style={{height:'500px',overflow:'scroll'}}>
                        <h3>اضافه کردن برچسب قیمت</h3>
                        <br/>
                        <AddPrice/>
                    </div>
                    <div className='col-md-6 justify-content-center my-3 align-self-center border-2 border-success shadow-sm ' style={{height:'500px',overflow:'scroll'}}>
                        <h3>اضافه کردن برچسب اعتبار</h3>
                        <br/>
                        <AddCredit/>
                    </div>
                    <div className='col-md-12 justify-content-center my-3 align-self-center border-2 border-success shadow-sm ' style={{height:'500px',overflow:'scroll'}}>
                        <h3>اضافه کردن محصول</h3>
                        <br/>
                        <AddProduct/>
                    </div>
                </div>
            </div>
             </ProductProvider>
         </TagProvider>
         </PriceProvider>
            </CreditProvider>
        </CountryProvider>
    </>
}