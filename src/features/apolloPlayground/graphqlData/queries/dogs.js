import { gql } from 'apollo-boost'

export const GET_DOG_INFO = gql`
  {
    dogs {
      id
      breed
    }
  }
`

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
    dogs {
      id
      breed
    }
  }
`
