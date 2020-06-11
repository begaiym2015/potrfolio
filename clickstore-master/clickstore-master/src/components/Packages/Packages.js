import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/url';

import { Link } from 'react-router-dom';


import './Show.css';



class Packages extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        console.log("hello ")
        this.fetchData();
    }
    // componentDidUpdate(){
    //     this.fetchData();
    // }

    fetchData = async () => {
        const { data } = await axios({
            method:"GET",
            url:`${API_URL}/packages/${this.props.match.params.id}`
        });
        this.setState({ data });
    }

    handleUpdate = async () => {
        this.fetchData();
    }


    render() {
        // console.log(this.props)
        const id = this.props.match.params.id;
        const data = this.state.data;
        console.log(data);
        return (
            // <div>
            //     <h2>This page id is {id}</h2>
            //     <h1>{data.model}</h1>
            // </div>

            <div className="show-model">
                
                    {/* {phone.map((item,index) =>( */}
                    <div className="container">
                    
                        
                        <div>
                        <h1>  {data.model}</h1>
                        </div>
                        <div className="main">
                        
                        <div className="info">
                            <div className="first-block">
                            <img src={data.img}/>
                            <span>Память:  {data.memory}</span>
                            <span>Цвет:  {data.color}</span>
                            </div>
                        </div>

                        <div className="contacts">
                            <h2>Цена  {data.price} СОМ</h2>
                            {/* <button>КУПИТЬ</button> */}
                            <span>{data.description}</span>
                        {/* <div/>   */}
                        </div>
                       
                        

                        </div>
                        <div className="paginate">
                        <Link  to={`/packages/${parseInt(id-1)}`}>
                        <button className="paginate-btn" onClick={this.handleUpdate}>предыдущий
                            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD5CAMAAABRVVqZAAAAZlBMVEX39/cAAAD6+vr////y8vI9PT1FRUVWVlYmJiZISEhXV1dDQ0MpKSnx8fEjIyNAQEDMzMxtbW2enp6JiYmzs7MwMDCYmJjS0tLAwMC6urqoqKjZ2dmHh4dMTEwQEBBkZGQdHR17e3sJMgXXAAADn0lEQVR4nO2di1LqMBiEkz8cjgdFKwW5KF7e/yWlVMYLFNpkMm727PcE/WZ3aYpjcU4IIYTgxUKD/fZlJGNhuprVT/VsNS3bxsJ86w9s51auTFg/+688r8NvX1Ic5l78T16KDMZGN0cm3i+m5bnY6OqEife3xbl0mXj/WpiLTW87TErLxUbdJt5fFeTS3a7ScrlkUs5ezu2krFzO76SkvVxuVym59GlXyw24Sn+T3XkM+mzZbycHVsC59N3JB6+4sQxp1545aizD2tXwFzSWge3aM/rtiz5JjImvEBs2eCd7NoANG76TPQ94KlHt2lHDqcSa4KUSt5OGDdjsI3fSsMRSiW7XDh6Te6ipxO/Eg90hE3bi/RgplJR2ef8IFEqaCdJNJaldUM/DaSYTKJOUdvGYID0/MploJ3iZyITLBGsnp/4e//9lIpMcaCdsmcgkB9oJWyYyyYF2wpaJTHKQ1i7tJAdM7dKnMJcJT7t4TNSuHDCZaCcN2kkOmEx4dqLTClcmMsmBdsKWiUxyIBOZ5EMmiCYLGhOeTGSCZ6KdyCQXTCbaiUxyQWTitBOZ5ILpU5jHhKVdzlgyceGexcRWLCbOEv7lDMxkzWLiwoTFxDkaE6tYTJxtWExceGAxcaGOUwF8E3GYxan8w3OJ3gqeiy0jVQBd4u8rYzSXcPx28VJzSTkYo7mEhAcvsI7FH13wXMJbggtYx8KYxsXcnwQXrI6Zu5PLHqaOMbmMoX7jxkx7aWHqGJMLWMe0lw+YOsbkwtQxJhemjjG5MHUMzUUd43NB65j20qKO5YKrYzrD8LkwdYzJBaxjpr20MHWMyYWpY0wuTB1jcmHqGJMLU8fkkguujqW4XIO5pHQMzUUd43NB65j20sLUMSYXtI5pLy1MHWNyQeuYzvxyyYv2wpiLXHKhvTDmwuSC1jG5tDB1bIykkuiyhXqrQprLE5HLkqdjd1CxpLlUULEkudxjxZLkgpVKkssjj8saTSXeZQY2FhfvAqgS64KoEukyh9tKQ5QL3CdYS4wLpkmMC9rd/pPBLmBnsK8MdAE7GX9nmAvW88pPhrhgPUUe098F69n+FH1drqHb1dLPBet7sC76uNwVYdLHpRSTyy5Y3xif57xLGTs5cM6lnHa1dLuUZtLtUla7WsydevfgtkCTncuJd0K+wZ9WOgjV95+uWFSlmjTBrD7fZD9ZQb20bjAWRtWmrutNNSpbZI9ZCKHItQshhCDjHazaTH0y7DzaAAAAAElFTkSuQmCC" /> */}
                        </button>
                         </Link>
                        <Link  to={`/packages/${parseInt(Number(id)+1)}`}>
                        <button className="paginate-btn" onClick={this.handleUpdate}>следующий
                            {/* <img src="https://image.flaticon.com/icons/png/512/130/130884.png" /> */}
                         </button>
                        </Link>
                       
                    </div>
                    </div>
                    
                  

            </div>
        );
    }
}

export default Packages;