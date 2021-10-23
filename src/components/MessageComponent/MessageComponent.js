import React, {useState} from "react";

const MessageComponent = (props) => {
    const {message} = props;

    return (
        <div id='messages-container'>
            {message}
        </div>
    );
};

export default MessageComponent;
