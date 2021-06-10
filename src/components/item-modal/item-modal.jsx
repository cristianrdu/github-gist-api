import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ItemModal = ({show, handleClose, fileContent, fileName}) => {
    return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>File {fileName} Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>{fileContent}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ItemModal
