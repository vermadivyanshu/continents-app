import gql from 'graphql-tag'

const getContinent = gql`
  query getContinent($code: String!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        native
        phone
      }
    }
  }
`

export default getContinent;
