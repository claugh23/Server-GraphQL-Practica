const _ = require('lodash')
const graphql = require('graphql')
//tipo de objeto de graphql 
const {GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLSchema} = require('graphql'); 

const userInfo =[
    {id:"1",nombre:"Claudio Josue",apellidos:"Gonzalez Hernandez",telefono:87987690,correo:"claudio@hotmail.com",password:"admin123."},
    {id:"2",nombre:"Carlos",apellidos:"morales Hernandez",telefono:67678787,correo:"carlos@hotmail.com",password:"admin123."},
    {id:"3",nombre:"Jose",apellidos:"galvan Hernandez",telefono:23234545,correo:"jose@hotmail.com",password:"admin123."},
    {id:"4",nombre:"Michael",apellidos:"de santa Hernandez",telefono:56342323,correo:"michael@hotmail.com",password:"admin123."},
    {id:"5",nombre:"Smith",apellidos:"montana Hernandez",telefono:44455555,correo:"smith@hotmail.com",password:"admin123."},
    {id:"6",nombre:"John",apellidos:"deep Hernandez",telefono:34343434,correo:"john@hotmail.com",password:"admin123."},
    {id:"7",nombre:"Marcos",apellidos:"saenz Hernandez",telefono:23232323,correo:"marcos@hotmail.com",password:"admin123."},
    {id:"8",nombre:"Marisela",apellidos:"Gonzalez ortiz",telefono:45454545,correo:"marisela@hotmail.com",password:"admin123."}
]

//schema basico para una peticion query en graphql, ES COMO UN DTO
const UserType = new GraphQLObjectType({
    name:'User',
    fields:() =>({
        id:{type:GraphQLString},
        nombre:{type:GraphQLString},
        apellidos:{type:GraphQLString},
        telefono:{type:GraphQLInt},
        correo:{type:GraphQLString},
        password:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    //propiedades para acceder al query User
    fields:{
        //definimos el nombre del query
        User:{
            //el tipo sera donde esta localizado el DTO
            type:UserType,
            //el parametro args sirve para enviar en la peticion algun id para obtener la info de un documento en particular
            args:{id:{type:GraphQLString}},
            //resolve, genera la logica necesaria para obtener informacion a travez del query
            resolve(parent,args){
                
                //busca en el array userInfo, cualquier parametro que haga match con id
                return _.find(userInfo,{id:args.id});
                
            }
            
        }
    }
})


module.exports = new GraphQLSchema({
    query:RootQuery

})

