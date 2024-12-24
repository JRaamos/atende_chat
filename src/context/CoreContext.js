import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from '../services/storage'

export const CoreContext = createContext({})

export const CoreState = ({ children }) => {

	const [modal, setModal] = useState(null)
	const [user, setUser] = useState(ReadObject('user') ? ReadObject('user') : [])
	const [profileId, setProfileId] = useState(null)
	const [behaviorId, setBehaviorId] = useState(null)
	const [knowledgeId, setKnowledgeId] = useState(null)

	const contextValue = {
		user, setUser,
		modal, setModal,
		profileId, setProfileId,
		behaviorId, setBehaviorId,
		knowledgeId, setKnowledgeId
	}

	// to persist state when app reload  
	useEffect(() => { SaveObject('user', user); }, [user])

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}
