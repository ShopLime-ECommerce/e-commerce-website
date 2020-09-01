/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as SingleProduct} from './single-product'
export {default as CheckOut} from './checkOut'
export {default as Home} from './home'
export {default as Cart} from './Cart'
export {default as CartItem} from './cart-item'
export {default as PaymentForm} from './payment-form'
export {default as addItem_Cart} from './addItem_Cart'
export {default as Admin} from './admin'
export {default as StarRating} from './star-rating'
export {default as Reviews} from './reviews'
export {default as ReviewForm} from './review-form'
export {Login, Signup} from './auth'