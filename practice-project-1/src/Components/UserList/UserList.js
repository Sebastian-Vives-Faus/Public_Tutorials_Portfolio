import React from "react";
import { Wrapper } from "./styles";
import {UserItem} from "./UserItem";

export const UserList = (props) => {
  
const renderUsers = props.users.map(user => {
    return <UserItem user={user} key={user.id}/>
})

 return (
    <div>
      <Wrapper>{renderUsers}</Wrapper>
    </div>
  );
}
