import {gql} from '@apollo/client';

export const GET_PROPERTIES = gql`
    query GetProperties {
        properties {
            id
            title
            description
            price
            location
            image
            rating
            reviews
            host
        }
    }
`;

export const GET_PROPERTY = gql`
    query GetProperty($id: Int!) {
        property(id: $id) {
            id
            type
            title
            details
            price
            location
            image
            rating
            host
        }
    }
`;

export const ADD_PROPERTY = gql`
    mutation AddProperty($property: PropertyInput!) {
        addProperty(property: $property) {
            id
            title
            details
            price
            location
            image
            rating
            host
        }
    }
`;