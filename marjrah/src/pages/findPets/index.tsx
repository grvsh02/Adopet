import React from 'react';
import Banner from './Banner';
import Footer from './';
import ProductCard from "../../components/petCard";
import SortBar from "./sortBar";
import FilterBar from "../../components/filterBar";


const FindPetsPage = () => {
    return (
        <div className="flex flex-col items-center border-2 border-b-blue-800">
            <Banner/>
            <SortBar/>
            <div className="flex w-11/12">
                <div className="w-1/6">
                    <FilterBar/>
                </div>
                <div className="mt-6 w-5/6 items-center flex flex-wrap">
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                    <ProductCard brand="Apple" name="Golden Retriver"/>
                </div>
            </div>
        </div>
    )
}

export default FindPetsPage;