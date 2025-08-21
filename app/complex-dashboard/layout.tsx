import React from "react";

type props = {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode
}
// Parralell Routes
export default function ComplexLayout({children, users, notifications,login} : props) {
    const isLoggedIn = true
    if(!isLoggedIn){
        return <div>{login}</div>
    }
    return(
        <>  
            <div>{children}</div>
            <div className="flex">
                <div>{users}</div>
                <div>{notifications}</div>
            </div>
        </>
    )
}