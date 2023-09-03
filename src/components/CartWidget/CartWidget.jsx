import classes from './CartWidget.module.css'
import cart from './assetsCartWidget/cart4.svg'

const CartWidget = () => {
    return (
        <button className={classes.buttonCartWidget}>
            <img className={classes.imgCart} src={cart}/>
            0
        </button>
    )
}
export default CartWidget