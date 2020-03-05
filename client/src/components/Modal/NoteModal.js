import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NoteModal extends React.Component { 
    
  render() {
      const { isOpen, toggle, bookNote } = this.props;
      console.log("PROPS FROM NOTEMODAL", bookNote)
      return (
        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>CARS</ModalHeader>
            <ModalBody>              
              <p><b>Authors :</b>CARS</p>
              <p><b>Published Date :</b> DATE</p>
            </ModalBody>
            <ModalFooter>                
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );

  }
}

export default NoteModal;