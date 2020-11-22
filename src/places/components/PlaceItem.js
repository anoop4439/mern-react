import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => setShowConfirmModal(true);

    const cancelDeleteHandler = () => setShowConfirmModal(false);

    const confirmDeleteHandler = () => {
        console.log('Deleting...');
        setShowConfirmModal(false)
    };
    
    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-footer"
                footer={<Button onClick={closeMapHandler}>Close</Button>}>
                <div className="map-container">
                    <h2>THE MAP</h2>
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you Sure?"
                footerClass="place-item__modal-footer"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>Close</Button>
                        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                    </React.Fragment>
                }>
                <p>Do you really want to delete? The operation is not revesible.</p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>View on map</Button>
                        {auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>Delete</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
};

export default PlaceItem;