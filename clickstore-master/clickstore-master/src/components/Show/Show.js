import React, { Component } from 'react';
import './Show.css';
// import './images';

class Show extends Component {
    render() {
        const phone = this.props.phone;
        return (
            <div className="show-model">

                    {phone.map((item,index) =>(
                    <div className="container">
                        <div>
                        <h1>  {item.model}</h1>
                        </div>
                        <div className="main">
                        <div className="info">
                            <div className="first-block">
                            <img src={item.img}/>
                            <span>Память:  {item.memory}</span>
                            <span>Цвет:  {item.color}</span>
                            </div>
                            {/* <div className="btn-social">
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2015/11/twitter-logo.png" /> 
                                </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2016/06/Instagram-logo.png" />
                                    </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2013/02/youtube-button-vector.png"/>
                                    </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2015/09/google-plus-new-icon-logo.png" />
                                </button>
                            
                            </div> */}
                        </div>

                        <div className="contacts">
                            
                                <h2>Цена  {item.price} USD</h2>
                                <button>КУПИТЬ</button>
                                <span>{item.description}</span>
                            <div/>
                            {/* <div className="reklama">
                                <img src="https://st4.depositphotos.com/13324256/28597/i/450/depositphotos_285970824-stock-photo-cropped-view-woman-holding-loudspeaker.jpg" />
                            </div> */}
                           
                        </div>
                        </div>
                    </div>
                    ))}

            </div>
        );
    }
}

export default Show;