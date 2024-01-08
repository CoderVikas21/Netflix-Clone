import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = ({data}) => {

    let id  = data.id;
    let header = data.header;
    let body  = data.body;
  return (
    <>
    <div className='faq'>
      <Accordion.Item eventKey={id} className='accordian'>
        <Accordion.Header className='accordian'>{header}</Accordion.Header>
        <Accordion.Body className='accordian'>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </div>
   
    </>
  )
}

export default Faq
