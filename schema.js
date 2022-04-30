import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course{
        id:ID
        name:String
        email:String
        category:String
        price:Int
        teachers:[Teacher]
        stack:Stack
    }
    type Teacher{
        firstName:String
        lastName:String
        experience:Int
    }
    enum Stack{
        WEB
        MOBILE
        OTHERS
    }
    type Query{
        getCourse(id:ID):Course
    }

    input CourseInput{
        id:ID
        name:String!
        email:String
        category:String
        price:Int!
        teachers:[TeacherInput]!
        stack:Stack
    }
    input TeacherInput{
        firstName:String
        lastName:String
        experience:Int
    }

    type Mutation{
        createCourse(input:CourseInput):Course
    }
`);
export default schema;
