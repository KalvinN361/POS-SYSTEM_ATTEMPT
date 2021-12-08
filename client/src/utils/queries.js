import {gql} from "@apollo/client"

export const QUERY_ITEM = gql `
    query Item {
        item{
            _id
            name
            price
            image
            category
            description
            dateCreated
            createdBy
        }
    } 
`

export const QUERY_USER = gql`
    query User($_id: String) {
        users(_id: $_id) {
            _id
            name
            email
            password
            order
        }
    }
`

export const QUERY_ORDER = gql`
    query Order(_id: String) {
        orders(_id: String) {
            _id
            name
            description
            totalPrice
            isPaid
            table
            dateCreated
            createdBy
        }
    }
`

export const QUERY_CATEGORY = gql`
    query Category {
        name
        item
        date
    }
`

export const ALL_USER = gql`
    query allUsers {
        _id
        username
        email
    }
`
export const ALL_ORDER = gql`
    query allOrders {
        _id
        username
        email
    }
`