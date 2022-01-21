import React, { useState, useEffect, useRef }  from 'react';
import { isThisTypeNode } from 'typescript';

interface Props{
    onCreate(): void;
}

const PhoneForm = (props : any) => {
    //const [name, setName] = useState("");
    const nameInput = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name : '',
        phone : ''
    });
    const {name, phone} = form;

    const handleChange = (e: any) => {
        // e 값을 무엇으로 설정해야할까요?
        // 일단 모를떄는 any 로 설정합니다.
        //e.target.name(e.target.value);
        //setName(e.target.value);

        const {name, phone} = e.target;
        setForm({
            ...form,         // 기존의 input 객체를 복사한 뒤
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        props.onCreate(form);
        setForm({
            name : '',
            phone : ''
        });
        nameInput.current.focus();
     
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name ="name"
            placeholder= "이름" 
            onChange={handleChange} 
            value={name}
            ref={nameInput}
            />
            <input name ="phone"
            placeholder= "전화번호" 
            onChange={handleChange} 
            value={phone}/>
            <button type="submit">등록</button>
            {/*<div>{name} {phone}</div>*/}
        </form>
    );
};
export {}

//export default PhoneForm;

export default React.memo(PhoneForm);