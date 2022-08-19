import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        const { pathname } = router;
        if (pathname === "/") {
            router.push("/you")
        }
    } , [])

    return (
        <div> 
        </div>
    )
}