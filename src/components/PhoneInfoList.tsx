import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = (props : any) => {
    
    const {data, onRemove, onUpdate} = props;

    if(!data) return null;
 
    const list = data.map(
        (info : any) => (<PhoneInfo 
            onRemove={onRemove} 
            onUpdate={onUpdate}
            info={info} 
            key={info.id}/>)
    )
    console.log("rendering list")
    return (
        <div>
            {list}
        </div>
    );
};
/*
PhoneInfoList.defaultProps = {
    data : []
}*/

export default PhoneInfoList;