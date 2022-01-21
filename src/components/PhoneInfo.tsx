import React, { useState, Fragment, useEffect } from 'react';

const PhoneInfo = (props : any) => {
    const [editing, setEditing] = useState(false);
    //const {name, phone, id} = props.info;
    const style = {
        border : '1px solid black',
        padding : '8px',
        margin : '8px',
    }
    
    const [form, setForm] = useState({
        name : props.info.name,
        phone : props.info.phone
    });

    const handleRemove = () =>{
        const {info, onRemove} = props;
        onRemove(info.id);
    }
    const handleToggleEdit = () => {
        /*
        true -> false
        onUpdate
        false -> true
        const에 값 넣어주기
        */
        const {info, onUpdate} = props;
        //console.log("editing : " + editing)
        //console.log(props)
        if(editing){
            onUpdate(info.id, form);
        }else{
            setForm({
                name : info.name,
                phone : info.phone
            });
        }
        setEditing(!editing);
    }

    const handleChange = (e : any) => {
        /*const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
          };
        setForm(nextForm);
        */
        setForm({
            ...form,         // 기존의 input 객체를 복사한 뒤
            [e.target.name]:e.target.value
        });
    }
    useEffect(() => {
        console.log(props.info.name);
    }, []) 
    
    return (
        
        <div style={style}>
           {
               editing ?
                (   <Fragment>
                        <div>
                            <input 
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                        />
                        </div>
                        <div>
                            <input 
                                name="phone"
                                onChange={handleChange}
                                value={form.phone}
                            />
                        </div> 
                </Fragment>
                  
               ) : (
                   <Fragment>
                    <div><b>{props.info.name}</b></div>
                    <div>{props.info.phone}</div>
                   </Fragment>
               )
           }
            
            <button onClick={handleRemove}>삭제</button>
            <button onClick={handleToggleEdit}>
                {
                    editing ? '적용' : '수정'
                }
            </button>
        </div>
    );
};


//export default PhoneInfo ;

export default React.memo(PhoneInfo);

//export const PhoneInfo = React.memo(PhoneInfo);