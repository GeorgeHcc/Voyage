import React from "react";
import { Avatar } from "antd";
import type { AvatarProps } from "antd";
function ContactAvatar(props: { nick_name?: string; avatarImage?: string,...avatarProps:AvatarProps[] }) {
  return (
    <>
      {props.avatarImage ? (
        <Avatar size={40} src={props.avatarImage} {...avatarProps}/>
      ) : (
        <Avatar size={40}>{props.nick_name}</Avatar>
      )}
    </>
  );
}

export default ContactAvatar;
