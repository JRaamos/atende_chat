import ContainerAuthenticated from 'containers/Authenticated'
import React from 'react'
import { ManageAgentsContainer } from './styled'

export default function ManageAgents() {
  return (
    <ContainerAuthenticated free>
      <ManageAgentsContainer>

      </ManageAgentsContainer>

    </ContainerAuthenticated>
  )
}
