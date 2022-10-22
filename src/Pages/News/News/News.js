import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();

  console.log(news);

  const { image_url, details, title, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to= {`/category/${category_id}`}><Button variant="primary">All Category News</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
