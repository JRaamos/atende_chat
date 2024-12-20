import React, { useEffect } from "react";  
 
import Header from 'components/Dashboard/Header'  
  
import { 
    DashboardPage,
    DashboardBody,
    DashboardBodyContent,
    Content
} from "./styled";
import { ReadObject } from "services/storage";
import { useHistory } from "react-router-dom";
import { ThemedComponent } from "ui/theme";

export default function ContainerAuthenticated({ children }){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const init = () => {
        const authentication = ReadObject('authentication')
        if (!authentication?.jwt) {
            completeNext()
        }
    }
 
    const completeNext = () => {
        navigate('login')
    }

    useEffect(() => {  
        init()
        window.scrollTo(0,0)
    }, [])

    return ( 
        <>
            <ThemedComponent>
                <Content>
                    <DashboardPage>
                        <Header /> 
                        <DashboardBody> 
                            <DashboardBodyContent>                     
                                { children }
                            </DashboardBodyContent>
                        </DashboardBody>  
                    </DashboardPage> 
                </Content>
            </ThemedComponent>
        </>
    );
}