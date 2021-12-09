import {
    gql
} from '@apollo/client'

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
        _id
        }
    }
}`;

export const ADD_USER = gql `
    mutation addUser(
        $username: String!,
        $email: String!,
        $password: String!,
    ) {
        addUser(
            username: $username,
            email: $email,
            password: $password,
        ) {
            token
            user {
            _id
            }
            username
            email
        }
    }`;

export const ADD_ORDER = gql `
    mutation addOrder($userID: ID!, $name: String!, $table: Int!, $totalPrice: Int!, $description: String!) {
        addOrder(userID: $userId, name: $name, table: $table, totalPrice: $totalPrice, description: $description) {
            _id
            userID {
                username
            }
            name
            table
            totalPrice
            description
            }
        }`;

export const ADD_ITEM = gql `
        mutation addItem($name: String!, $price: Int!, $description: String!, $imageId: ID!, $categoryId: ID!) {
            addItem(name: $name, price: $price, description: $description, imageId: $imageId, categoryId: $categoryId) {
        name
        price
        description
        imageId
        categoryId
    }
}
`

export const REMOVE_ITEM = gql `
    mutation removeItem($name: String!, $price: Int!, $description: String!, $imageId: ID!, $categoryId: ID!) {
        removeItem(name: $name, price: $price, description: $description, imageId: $imageId, categoryId: $categoryId) {
            name
            price
            description
            imageId
            categoryID
        }
    }
`




export const REMOVE_USER = gql`
    mutation removeUser(
        $_id: ID!
    ) {
        removeUser (
        _id: $_id
    ){
        _id
        username
    }
    }
`;

export const REMOVE_ORDER = gql `
    mutation removeOrder($_id: ID!, $name: String!, $table: Int!, $totalPrice: Int!, $description: String!) {
        removeOrder(_id: $ID, name: $name, table: $table, totalPrice: $totalPrice, description: $description) {
            _id
            name
            table
            totalPrice
            description
        }
    }
`