import React,{useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import CardV2 from '../../../../components/CardV2';
import Pagination from 'reactjs-hooks-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../../../../api/productApi';
import categoryApi from '../../../../api/categoryApi';
import colorApi from '../../../../api/colorApi';
import Header from '../../../../components/Header';
import Breadcrumbs from '../../../../components/Breadscrumbs';
import './main.scss';
import { Spinner } from 'reactstrap';

function Main(props) {

    //Att
    const [attribute,setAttribute] = useState({
        category:[],
        "colorProducts.color":[],
        "colorProducts.price":[],
    });

    //category
    const [cate,setCate] = useState([]);
    //color
    const [color,setColor] = useState([]);
    //price
    const [price, setPrice] = useState({min:2,max:100});


    const pageLimit = 9;

    const [params,setParams] = useState({
        limit: pageLimit,
        // VD page = 1 thì skip = 0, page = 2 thì skip = 9
        skip: 0,
        filters:{
            "category": [],
            "colorProducts.color":[],
            "colorProducts.price": []
        }
    });


    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await categoryApi.getAll();
                //console.log(response);
                // Save response cate -> state
                response.data.map(item => setCate(oldArray => [...oldArray, item])) //because cate is a array
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }

        const fetchColor = async () => {
            try {
                const response = await colorApi.getAll();
                response.data.map(item => setColor(oldArray => [...oldArray,item]))
            } catch (error) {
                console.log('Failed to fetch color list: ', error);
            }
        }

        fetchCategory();
        fetchColor();
    },[])

    console.log(cate);
    console.log(color);

    //Attribute
    function addAtt(item,type){  
    
        if (type === "colorProducts.price"){
            // THÊM VÀO STATE FILTERS
            // vd: category: ['_id1', '_id2']
            const newFilters = {...params['filters']};
            const priceFilter = [];
            // item={min:0, max:100}
            priceFilter.push(item.min)
            priceFilter.push(item.max)

            newFilters[type] = priceFilter;


            setParams({
                ...params,
                filters: newFilters
            });
        }

        // THÊM TÊN VÀO MẢNG Attribute
        const newAttributes = {...attribute};
        // Tìm phần tử đó đã có trong mảng hay chưa
        const index = newAttributes[type].indexOf(item);
        if (index === -1){
            newAttributes[type].push(item);
            setAttribute({
                ...attribute,
                newAttributes
            })
        }



        // THÊM VÀO STATE FILTERS
        // vd: category: ['_id1', '_id2']
        const newFilters = {...params['filters']};
        newFilters[type].push(item._id);

        setParams({
            ...params,
            filters: newFilters
        });
    }

    function clearAtt(item, type){

        // Clear STATE FILTERS
        // vd: category: ['_id1', '_id2']
        const newFilters = {...params['filters']};
        const index = newFilters[type].indexOf(item._id);
        if(index > -1){
            newFilters[type].splice(index, 1);
        }

        setParams({
            ...params,
            filters: newFilters
        });

        // Clear STATE ATTRIBUTE
        const newAttributes = {...attribute};
        const index2 = newAttributes[type].indexOf(item);
        if (index2 > -1){
            newAttributes[type].splice(index2, 1);
        }

        setAttribute({
            ...attribute,
            newAttributes
        })
    }

    function clearAll(){
        setAttribute({
            "category":[],
            "colorProducts.color":[],
            "colorProducts.price":[],
        });
        const filters = {
            "category": [],
            "colorProducts.color":[],
            "colorProducts.price": []
        };
        setParams({
            ...params,
            filters: filters
        });
    }

    return (
        <div>
            <Breadcrumbs
                title="Product"
                linkBack="Home"
                active="Product"
            />

            <Container>
                <Row>
                    <Col sm="12" md="3">
                        <div className="layer-navigation">
                            <div className="layer-navigation-panel">
                                <div className="heading">
                                    <h3>
                                        Shop By
                                    </h3>
                                </div>

                                <div className="content">
                                    <div className="content-list">
                                        <div className="content-list-filter-attribute">
                                            {
                                                attribute['category'].map((item,key) => (
                                                    <div className="att" key={key}>
                                                        <div className="att-item">
                                                            {item.name}
                                                        </div>
                                                        <div onClick={() => clearAtt(item,'category')} className="clear">
                                                            <img src="/Assets/images/cancel.png"></img>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            {
                                                attribute['colorProducts.color'].map((item, key) => (
                                                    <div className="att" key={key}>
                                                        <div className="att-item">
                                                            {item.name}
                                                        </div>
                                                        <div onClick={() => clearAtt(item, 'colorProducts.color')} className="clear">
                                                            <img src="/Assets/images/cancel.png"></img>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            <div onClick={()=>clearAll()} className="clear-all">
                                                Clear all
                                            </div>
                                        </div>

                                        <div className="content-list-filter-category">
                                            <h4>
                                                Categories
                                            </h4>

                                            <div className="content-list-filter-category-list-item">
                                                {
                                                    cate.map((item,key)=>(
                                                        <div onClick={()=> addAtt(item,'category')}  className="filter" key={key}>
                                                            <span className="item" href="https://www.youtube.com/">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    ))
                                                
                                                }
                                            </div>
                                        </div>

                                        <div className="content-list-filter-price">
                                            <h4>
                                                Price $
                                            </h4>

                                            <div className="content-list-filter-price-list-item">
                                                <form className="form">
                                                <InputRange
                                                    maxValue={500}
                                                    minValue={0}
                                                    step={50}
                                                    value={price}
                                                    onChange={value => setPrice(value)}
                                                    //onChangeComplete={value =>console.log("price:", value)}
                                                    onChangeComplete={value => addAtt(value,"colorProducts.price")} 
                                                    />
                                                </form>
                                                
                                            </div>
                                        </div>

                                        <div className="content-list-filter-color">
                                            <h4>
                                                Color
                                            </h4>

                                            <div className="content-list-filter-color-item-colors">
                                                {
                                                    color.map((item,key) => (
                                                        <span onClick={()=> addAtt(item,'colorProducts.color')} className="color" color={item.name} key={key}>
                                                            <p>{item.name}</p>
                                                        </span>
                                                        
                                                    ))
                                                }
                                            </div>
                                        </div> 

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;