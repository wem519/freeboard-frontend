import {gql} from '@apollo/client'



const FETCH_BOARDS =gql`
    query{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`
