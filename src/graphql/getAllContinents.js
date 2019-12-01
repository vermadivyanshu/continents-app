import gql from 'graphql-tag'

const getAllContinents = gql`{
  continents {
    code
    name
  }
}
`

export default getAllContinents;

