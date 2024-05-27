// import { LineAndCharacter } from "typescript"

interface productsList {
    title: string,
    price: number,
    images: string,
    id: number


}



const HomPage = ({ title, images, price }: productsList) => {

    return (
        <>


            <div className="flex justify-center gap-4 my-3 border border-gray-500 mx-2">

                <div className="flex flex-col gap-2 m-1 text-[12px] sm:text-[18px] md:text-[22px] lg:text-[25px]">
                    <p className="mx-2 my-2">
                        title :  {title}
                    </p>

                    <p className="mx-2">
                        price:  {price}
                    </p>




                </div>



                <div className="w-[30%]  m-2">
                    <img src={images} alt="clothes" className="w-full" />
                </div>




            </div>



        </>


    )






}






export default HomPage