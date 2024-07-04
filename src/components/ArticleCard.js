import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ArticleCard = ({ title, link }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" href={link}>Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
