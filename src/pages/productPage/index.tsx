import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { proContext } from "../../App"


const ProductPage = () => {

    const ProListContext = useContext(proContext)
const params = useParams()


const [prodData , setProdData]= useState<any>(null)

useEffect(()=>{

    if(params.id){
        let temp = ProListContext.productList.find((item: any)=>item.id== +(params?.id ?? 0))

setProdData(temp)
    }

},[params])


    return (

        <>
{/* {console.log(ProListContext.productList)} */}

        <p>title :{prodData?.title?? "-"}</p>

            {/* <div className="flex">

                <div className="flex">

                </div>






                <div className="flex flex-col">

                    <p></p>


                </div>



            </div> */}




        </>




    )







}

export default ProductPage