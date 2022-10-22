import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCarSummery from '../../Shared/NewsCarSummery/NewsCarSummery';

const Category = () => {

    const categoryNews = useLoaderData()

    return (
        <div>
            {
                categoryNews.map(news => <NewsCarSummery
                key = {news._id}
                news = {news}
                ></NewsCarSummery>)
            }

        </div>
    );
};

export default Category;