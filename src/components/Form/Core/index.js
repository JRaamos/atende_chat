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
import { toast } from "react-toastify";
import { FormSpacer, Text } from "ui/styled";
import PhoneInputComponent from "../Phone";

export default forwardRef(function FormCore({ formItems, register, disabled, title, space, mediumSpace }, ref) {

    const [form, setForm] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : ''; }
    const changeForm = (value, ref) => { setForm({ ...form, [ref]: value }); }

    const [nextBlur, setNextBlur] = useState(null)
    const [nextPrint, setNextPrint] = useState([])

    const scheduleBlur = (item) => {
        setTimeout(() => { setNextBlur(item); }, 1)
    }

    const safeBlur = (item) => {
        if (typeof item?.onBlur === "function") {
            item.onBlur()
        }
    }

    useEffect(() => {
        if (register) {
            setForm({ ...register })
        }
    }, [register])

    useEffect(() => {
        if (nextBlur) {
            safeBlur(nextBlur)
        }
    }, [nextBlur])

    useEffect(() => {
        setNextPrint([...formItems])
    }, [formItems])


    const valid = (payload, array) => {
        for (let item of array) {
            if (item?.ref && !payload?.[item?.ref] && item?.required) {
                toast.error(`O campo ${item?.label || item?.placeholder || item?.ref} é obrigatório.`)
                return false;
            }
            if (item?.ref && item?.validate && !item?.validate(payload)) {
                return false;
            }
        }
        return true;
    };

    useImperativeHandle(ref, useCallback(() => ({
        getForm(skip = false) {
            if (!valid(form, formItems) && !skip) { return; }
            return form;
        }
    }), [form]))

    return (
        <>
            <ContentForm active={!!title}>
                <ContentFormHeader active={!!title}>{title}</ContentFormHeader>
                <FormWrapper space={space} mediumSpace={mediumSpace}>
                    {
                        nextPrint.map((item, key) => <>
                            {
                                item.separator ? <FormSeparator /> : <FormInput full={item.full} half={item.half} quarter={item.quarter} twenty={item.twenty} key={key}>
                                    {
                                        item.custom ? item.custom : item.options ?
                                            <Select placeholder={item.placeholder} options={item.options} value={formValue(item.ref)} onChange={val => { changeForm(val, item.ref); scheduleBlur(item); }} disabled={item.disabled || disabled} />
                                            : item.mask ?
                                                <MaskedInput mask={item.mask} type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null} disabled={item.disabled || disabled} />
                                                : item.type === 'money' ?
                                                    <CurrencyInput mask={item.mask} type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null} disabled={item.disabled || disabled} />
                                                    : item.passwordValidation ?
                                                        <PasswordValidation password={form.password} /> :
                                                        item.type === 'phone' ?
                                                            <>

                                                                <PhoneInputComponent value={formValue(item.ref)} onChange={e => changeForm(e, item.ref)} disabled={item.disabled || disabled} />
                                                            </>
                                                            :
                                                            <>
                                                                {item?.formSpace ? <FormSpacer /> : null}
                                                                <Input type={item.type} placeholder={item.placeholder} value={formValue(item.ref)} onChange={e => changeForm(e.target.value, item.ref)} disabled={item.disabled || disabled} onBlur={() => typeof item?.onBlur === "function" ? item.onBlur(formValue(item.ref)) : null} white={item.white} height={item?.height} />
                                                                {item?.text && <Text>{item.text}</Text>}
                                                            </>
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