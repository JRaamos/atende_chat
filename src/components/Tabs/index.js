import React from "react";
import {
  Container,
  Content,
  FullWidthBorder,
  IconContainer,
  Label,
  Tab,
  TabContainer,
  TabsWrapper,
} from "./Styled";

const CustomTabs = ({ tabs, activeTab, setActiveTab, children }) => {
  return (
    <Container>
      <TabsWrapper>
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <TabContainer>
              <IconContainer isActive={activeTab === index}>
                {tab?.icon}
              </IconContainer>
              <Label isActive={activeTab === index}>{tab?.label}</Label>
            </TabContainer>
          </Tab>
        ))}
        <FullWidthBorder />
      </TabsWrapper>
      <Content>{children}</Content>
    </Container>
  );
};

export default CustomTabs;