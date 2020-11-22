import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const [isLoading, setIsLoading] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true);
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace])

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (isLoading) {
        return <div className="center">
            <h2>Loading...</h2>
        </div>
    }

    if (!identifiedPlace) {
        return <div className="center">
            <Card>
                <h2>Could not find place</h2>
            </Card>
        </div>
    }
    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title." onInput={inputHandler} initialValue={formState.inputs.title.value} initialValid={formState.inputs.title.isValid} />
        <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid description (min. 5 characters)." onInput={inputHandler} initialValue={formState.inputs.description.value} initialValid={formState.inputs.description.isValid} />
        <Button type="submit" disabled={!formState.isValid}>Update Place</Button>
    </form>
};

export default UpdatePlace;