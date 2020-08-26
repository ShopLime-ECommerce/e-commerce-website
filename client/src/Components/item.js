import React ,{Component} from 'react';
import './item.css'

class Item extends Component{
    render(){
        return(
            <div className="col-md-4  item-wrapper">
                <div className=" img">
                    <img src={this.props.imageUrl} className="image" />
                </div>
                <div className=" justify-content-center">
                    <h5>{this.props.name}</h5>
                    <h5>{this.props.description}</h5>
                    <h4>$ {this.props.price}</h4>
                </div>
            </div>
        )
    }
}
 export default Item;