// model Interview{
//   id string @id @default(uuid())
//   name string
//   scheduledFor DateTime
//   type INTERVIEWTYPE
//   address string?
//   status INTERVIEWSTATUS @default(SCHEDULED)
//   createdAt DateTime
//   updatedAt DateTime
    
//   reminders Reminder[]
  
//   userID string
//   user User @relation(fields: [userID],references: [id])
//   applicationID string
//   application Application @relation(fields: [applicationID],references: [id])
// }
enum INTERVIEWTYPE{
  ONLINE="ONLINE",
  OFFLINE="OFFLINE"
}
enum INTERVIEWSTATUS{
  SCHEDULED="SCHEDULED",
  ATTEMPTED="ATTEMPTED",
  REJECTED="REJECTED",
  CLEARED="CLEARED",
}

import BaseEntity from "./base.interface.js";
import User from "./user.interface.js";
import Reminder from "./reminder.interface.js";
import Application from "./application.interface.js";

class Interview extends BaseEntity{
    name:string;
    scheduledFor:Date;
    type:INTERVIEWTYPE
    address:string|undefined
    status:INTERVIEWSTATUS
    userID:string;
    applicationID:string
    reminders:Reminder[]|undefined;
    
    constructor(name:string,scheduledFor:Date,type:INTERVIEWTYPE,address:string,status:INTERVIEWSTATUS,userID:string,applicationID:string)

    constructor(name:string,scheduledFor:Date,type:INTERVIEWTYPE,address:string,status:INTERVIEWSTATUS,userID:string,applicationID:string,id:string,createdAt: Date,updatedAt: Date,reminders:Reminder[])

    constructor(name:string,scheduledFor:Date,type:INTERVIEWTYPE,address:string,status:INTERVIEWSTATUS,userID:string,applicationID:string,id?:string,createdAt?: Date,updatedAt?: Date,reminders?:Reminder[]){
        if ((id)&&(createdAt)&&(updatedAt)) super(id,createdAt,updatedAt)
        else super()

        if (reminders) this.reminders = reminders

        this.name = name
        this.scheduledFor=scheduledFor
        this.type = type
        this.address=address
        this.status=status
        this.userID=userID
        this.applicationID=applicationID
    }

}



export default Interview;