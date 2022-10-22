import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCarSummery from '../Shared/NewsCarSummery/NewsCarSummery';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <h1>From Home</h1>
            {
                allNews.map(news => <NewsCarSummery
                key = {news._id}
                news = {news}
                ></NewsCarSummery>)
            }
        </div>
    );
};

export default Home;