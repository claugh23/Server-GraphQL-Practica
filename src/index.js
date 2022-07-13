const { response } = require('express');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schemas/Users/userSchema');

const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');


//servidor basico de graphql con express 
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql:true

}))
app.listen(4000, () => {

  console.log('server running on port 4000');
});
