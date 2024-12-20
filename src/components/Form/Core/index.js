import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";  

import { 
    FormInput, 
    FormWrapper,
    FormSeparator,
    ContentFormHeader,
    ContentForm, 
} from "./styled";

import Input, { CurrencyInput, MaskedInput } from "components/Form/Input";
import Select from "components/Form/Select";
import PasswordValidation from "components/Form/PasswordValidation";

export default forwardRef(function FormCore({ formItems, register, disabled, title }, ref){   
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }); } 
    
    const [ nextBlur, setNextBlur ] = useState(null)
    const [ nextPrint, setNextPrint ] = useState([])

    const scheduleBlur = (item) => {
        setTimeout(() => { setNextBlur(item); },1)
    }

    const safeBlur = (item) => {
        if(typeof item?.onBlur === "function"){ 
            item.onBlur()
        }
    }

    useEffect(() => {
        if( register ){
            setForm({ ...register })
        }
    }, [register])
    
    useEffect(() => {
        if( nextBlur ){
            safeBlur(nextBlur)
        }
    }, [nextBlur])
    
    useEffect(() => {
        setNextPrint([...formItems])
    }, [formItems])

    useImperativeHandle(ref, useCallback( () => ({
        getForm(){ return form ; }
    }),[form]))

    return ( 
        <>
            <ContentForm active={!!title}>
                <ContentFormHeader active={!!title}>{ title }</ContentFormHeader>
                <FormWrapper>
                    {
                        nextPrint.map((item, key) => <>
                                {
                                    item.separator ? <FormSeparator /> : <FormInput full={item.full} half={item.half} quarter={item.quarter} twenty={item.twenty} key={key}>
                                        {
                                            item.custom ? item.custom : item.options ? 
                                                <Select placeholder={item.placeholder} options={item.options} value={formValue(item.ref)} onChange={val => { changeForm(val, item.ref); scheduleBlur(item); }} disabled={item.disabled || disabled} />
                                            :  item.mask ?
                                                <MaskedInput mask={item.mask} type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null } disabled={item.disabled || disabled} />
                                            :  item.type === 'money' ?
                                                <CurrencyInput mask={item.mask} type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null } disabled={item.disabled || disabled} />
                                            :  item.passwordValidation ?
                                                <PasswordValidation password={form.password} />
                                                    :
                                                <Input type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} disabled={item.disabled || disabled} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null } />
                                        }
                                    </FormInput>
                                }
                            </>
                        )
                    }
                </FormWrapper>
            </ContentForm>
        </>
    );
})