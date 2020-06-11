import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/url';
import Card from '../Home/Card';

class FilterCategory extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        // console.log("mount")
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps)
        if(prevProps!==this.props){
            this.fetchData();
        }
    }

    fetchData = async () => {
        // const q = new URLSearchParams(this.props.location.search).get("q");
        const params = {};
        // if(this.props.match.params.category !== 'all') params.type=this.props.match.params.category;

        if(this.props.match.params.category !== 'all'){
            const category = this.props.match.params.category;
            if(category === 'mobile'|| category === 'laptop' || category === 'tablet' || category === 'computer' || category === 'accessories' || category === 'medical' )
                params.type=category;
            else params.q=category;
        }

        const { data } = await axios({
            method:"GET",
            url:`${API_URL}/packages`,
            params
        });
        this.setState({ data });
        // console.log(params)
    }

    render() {
        
        return (
            <>
                {this.state.data.length ? (
                    <ul className="list">
                        {this.state.data.map(item => (
                            <Card
                                key={item.id}
                                url={item.img}
                                model={item.model}
                                price={item.price}
                                id={item.id}
                                data={item}
                            />
                        ))}
                    </ul>
                ) : 
                (
                    <div className="empty-list">
                        <h2>Ничего не найдено!</h2>
                    </div>
                )}
            </>
        );
    }
}

export default FilterCategory;