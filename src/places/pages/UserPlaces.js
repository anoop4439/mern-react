import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Kollam',
        imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg',
        description: 'Beautiful place in Kerala',
        address: 'Kerala, India',
        location: {
            lat: 8.9040558,
            lng: 76.5250328
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Kollam',
        imageUrl: 'https://cdn.s3waas.gov.in/s39fc3d7152ba9336a670e36d0ed79bc43/uploads/2018/04/2018040320-1024x768.jpg',
        description: 'Beautiful place in Kerala',
        address: 'Kerala, India',
        location: {
            lat: 8.9040558,
            lng: 76.5250328
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;