/* eslint-disable react/prop-types */
import Button from "../Element/Button"

const CardProduct = ({children}) => {
    return (
        <div className="w-full my-2 max-w-xs bg-blue-950 border border-slate-700 rounded-lg shadow mx-3 flex flex-col justify-between">
            {children}        
        </div>
    )
}

const Header = ({imageURL}) => {
    return (
        <a href="#">
            <img src={imageURL} alt="menu" className="p-8 rounded-t-lg" />
        </a>
    )
}

const Body = ({children, name}) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white mb-3">{name}</h5>
                <p className="text-s text-white">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = ({price, HandleAddToCart, id}) => {
    return (
        <div className="flex items-center px-5 pb-5 justify-between">
            <span className="text-xl font-bold text-gray-300">Rp {price.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</span>
            <Button className="bg-red-600 border border-blue-950" onClick={() => HandleAddToCart(id)}>Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct