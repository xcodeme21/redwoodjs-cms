export const schema = gql`
  type Category {
    id: Int!
    category: String!
    createdAt: DateTime!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    category: String!
  }

  input UpdateCategoryInput {
    category: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
