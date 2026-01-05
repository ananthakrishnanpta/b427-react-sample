import { Link, useParams } from "react-router-dom";
import { products_list } from "../../data/products";

function ProductDetail() {

    // fetching the id from url
    const {id} = useParams();

    // fetching the product using the id
    const product = products_list.find((product) => product.id == id)

    if (!product) {
        return <h2>Product Not Found</h2>
    }

    return (
        <>
        <div className="row">
            <div className="col-6">
                <img src={product.img_src} alt=""  className="w-100"/>
            </div>
            <div className="col-6">
                <div className="row">
                    {product.title}
                </div>
                <div>
                    Rs. {product.price}
                </div>

                <button className="btn btn-primary"> 
                Add To Cart
            </button>
            </div>
            

        </div>
        </>
    )
}

export default ProductDetail;