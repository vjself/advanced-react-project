import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Products from './Components/HOC/products';
import DataFetcher from './Components/RenderProps/dataFetcher';
import ProductsRender from './Components/RenderProps/producsRender';


export default <Switch>
    <Route exact path='/' />
    <Route path='/hoc' component={Products}/>
    <Route path='/render-props' render={() => {
        return (
            <DataFetcher 
            url='/api/products'
            render={(data) => {
                return <ProductsRender data={data} />
            }}
            />
        )
    }}/>
</Switch>