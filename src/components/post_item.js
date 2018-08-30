import React from 'react';

const PostItem = (props) =>{
    return (
        <div>
            This is Post Number {props.match.params.id}
        </div>
        )
};

export default PostItem;