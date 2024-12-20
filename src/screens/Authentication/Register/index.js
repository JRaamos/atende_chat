import React, { useState } from "react"; 
import { useHistory } from 'react-router-dom'; 
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer,
    RegisterCall
} from './styled'

import Button from "components/Form/Button";
import Input from 'components/Form/Input';

import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoRegister } from "services/authentication";
import { exposeStrapiError } from "utils"; 

export default function Register(){ 

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const [ loading, setLoading ] = useState(false) 
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => {  

        if(!formValue('name') || !formValue('name').length){ 
            if(verbose){ toast.error('Preencha o campo: Nome') ;}
            return false; 
        }  

        if(!formValue('email') || !formValue('email').length){ 
            if(verbose){ toast.error('Preencha o campo: Email') ;}
            return false; 
        }  

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Senha') ;}
            return false; 
        }  

        return true
    } 

    const action = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        
        const result = await DoRegister({
            ...form, 
            username: form.email?.replace(/ /g,''),
            email: form.email?.replace(/ /g,''),
            confirmed:true,
            blocked:false,
            role:1
        })  
        
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completeLogin()
        } 
    }

    const completeLogin = () => {
        toast.success('Conta criada com sucesso'); 
        navigate('login')
    } 

 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                <FormTitle>Novo por aqui?</FormTitle>
                <FormText>Cadastre-se grátis :)</FormText> 
                <Input placeholder="Nome" id={'name'} value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} /> 
                <FormSpacer />
                <Input placeholder="Email" id={'email'} value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')} /> 
                <FormSpacer />
                <Input placeholder="Senha" id={'password'} type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')}  />    
                <FormSpacer /> 
                <Button primary loading={loading} onClick={action}>Criar conta</Button> 
                <RegisterCall> Já possui uma conta? </RegisterCall>
                <Button primary outline onClick={() => navigate('login')}>Faça o login</Button> 
            </ContainerUnauthenticated> 
        </>
    );
}