// model Reminder{
//   id string @id @default(uuid())
//   time DateTime
//   createdAt DateTime
//   updatedAt DateTime

//   userID string
//   user User @relation(fields: [userID],references: [id])
//   applicationID string
//   application Application @relation(fields: [applicationID],references: [id])
//   interviewID string
//   interview Interview @relation(fields: [interviewID],references: [id])
// }

import app from "../app.js";
import BaseEntity from "./base.interface.js";

class Reminder extends BaseEntity{
    time:Date
    userID:string
    applicationID:string
    interviewID:string

    constructor(time:Date,userID:string,applicationID:string,interviewID:string)
    constructor(time:Date,userID:string,applicationID:string,interviewID:string,id:string,createdAt:Date,updatedAt:Date)
    constructor(time:Date,userID:string,applicationID:string,interviewID:string,id?:string,createdAt?:Date,updatedAt?:Date){
        if ((id)&& (createdAt) && (updatedAt)) super(id,createdAt,updatedAt)
        else super()
        
        this.time=time
        this.userID=userID
        this.applicationID=applicationID
        this.interviewID=interviewID
    }

}



export default Reminder;