import React from "react";
import { Avatar } from "antd";
function ContactAvatar(props: { nick_name?: string; avatarImage?: string }) {
  return (
    <>
      {props.avatarImage ? (
        <Avatar size={40} src={props.avatarImage} />
      ) : (
        <Avatar size={40}>{props.nick_name}</Avatar>
      )}
    </>
  );
}

export default ContactAvatar;
