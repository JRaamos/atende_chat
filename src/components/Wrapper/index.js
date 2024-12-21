import React, { useState } from 'react'
import { BehaviorContent, ChevronIcon, WrapperContainer, WrapperHeader } from './styled';
import { Icon, Title } from 'ui/styled';

export default function Wrapper({ children, title }) {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <>
      <WrapperContainer>
        <WrapperHeader onClick={() => setActiveTab(!activeTab)}>
          <Title small nomargin ><ChevronIcon open={!activeTab} />{title}</Title>
        </WrapperHeader>
        {!activeTab ? null :
          <BehaviorContent>
            {children}
          </BehaviorContent>
        }
      </WrapperContainer>
    </>
  )
}
