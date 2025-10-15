"use client"
import { useAuthStore } from "@/store/useAuthStore"
import { useEffect } from "react"

export function SetUserComponent({userData}) {
    // const setUserComponent = userData => {
    const setUser = useAuthStore(state => state.setUser)
    useEffect(() => {
        setUser(userData)
    },[userData])
    return (
        <></>
    )
}
export default SetUserComponent
