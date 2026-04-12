// model User{
//   id string @id @default(uuid())
//   name string 
//   email string  @unique
//   password string 
//   role ROLE @default(USER)
//   createdAt DateTime
//   updatedAt DateTime
  
//   applications Application[]
//   interviews Interview[]
//   reminders Reminder[]
  
// }
// enum ROLE{
//   USER
//   ADMIN
// }

import BaseEntity from "./base.interface.js";
class User extends BaseEntity{

    name: string ;
    email: string;
    password: string;
    role:"USER"|"ADMIN";

    constructor(name: string ,email: string,password: string,role:"USER"|"ADMIN")
    constructor(name: string ,email: string,password: string,role:"USER"|"ADMIN",id:string,createdAt: Date,updatedAt: Date)
    constructor(name: string ,email: string,password: string,role:"USER"|"ADMIN",id?:string,createdAt?: Date,updatedAt?: Date){
        // while sending to DB we wont pass id amd date
        // while quering well receive those
        if ((id)&&(createdAt)&&(updatedAt)) super(id,createdAt,updatedAt)
        else super()
        this.name=name
        this.email=email
        this.password=password
        this.role=role

    }
}
export default User;