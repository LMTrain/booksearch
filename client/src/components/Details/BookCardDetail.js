import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class BookCardDetail extends React.Component { 
    
    render() {
      console.log("CARD DETAL PROPS", props);
        const { isOpen, toggle, book } = props;
        return (
          <div>
            {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
            <Modal isOpen={isOpen} toggle={toggle}>
              <ModalHeader toggle={toggle}>{book.title}</ModalHeader>
              <ModalBody>
                <p><b>Title: </b>{book.title}</p>
                <p><b>Authors: </b>{book.authors}</p>
                <p><b>Published Date: </b>{book.publisheddate}</p>
                <p><b>Description: </b>{book.description}</p>
                <p><b>Note: </b>{book.note}</p>
                <p><b>Date added to Fav: </b>{moment(book.date).format('MMMM YYYY')}</p>                
              </ModalBody>
              <ModalFooter>                
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );

    }
}

export default BookCardDetail;