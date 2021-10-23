const MyMessageComponent = (props) => {
    const {message} = props;

    return (
        <div id='messages-container' style={{textAlign:"right"}}>
            {message}
        </div>
    );
};

export default MyMessageComponent;
