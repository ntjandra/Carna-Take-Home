import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CourseCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5"> {props.title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> {props.date} </CardSubtitle>
        </CardBody>
        {/* Optional Image */}
        <img width="100%" src="data:image/png;base64,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" alt="Card image cap" /> 
        {/* <img width="100%" src="/src/assets/logo.svg" alt="Card image cap" />  */}
        
        <CardBody>
          <CardText> {props.detail} </CardText>
          {/* Add Route to Course Page */}
          <CardLink href= {props.link}>Take Course </CardLink> 
        </CardBody>
      </Card>
    </div>
  );
};

export default CourseCard;
CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rating: PropTypes.number,
    detail: PropTypes.string, 
};