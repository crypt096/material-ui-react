import React, { useEffect } from 'react'

export default function Notes() {
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            Notes page
        </div>
    )
}
