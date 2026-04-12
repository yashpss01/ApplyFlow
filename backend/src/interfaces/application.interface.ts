// model Application{
//   id string @id @default(uuid())
//   name string 
//   position string
//   createdAt DateTime
//   updatedAt DateTime

//   interview Interview[]
//   reminders Reminder[]

//   userID string
//   user User @relation( fields: [userID], references: [id],onDelete: Cascade)
// }

import BaseEntity from "./base.interface.js";
import User from "./user.interface.js";
import Interview from "./interview.interface.js";
import Reminder from "./reminder.interface.js";


class Application extends BaseEntity{
    name:string;
    position:string;
    userID:string;
    interviews:Interview[]|undefined;
    reminders:Reminder[]|undefined;
    
    constructor(name:string,position:string,userID:string)
    constructor(name:string,position:string,userID:string,id:string,createdAt: Date,updatedAt: Date,interviews:Interview[],reminders:Reminder[])
    constructor(name:string,position:string,userID:string,id?:string,createdAt?: Date,updatedAt?: Date,interviews?:Interview[],reminders?:Reminder[]){
        if ((id)&&(createdAt)&&(updatedAt)) super(id,createdAt,updatedAt)
        else super()
        if (interviews) this.interviews=interviews
        if (reminders) this.reminders = reminders
        this.name = name
        this.position=position
        this.userID=userID
    }

}
export default Application;