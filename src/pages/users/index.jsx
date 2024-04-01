import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...arg) => fetch(...arg).then(res => res.json())
function index() {
    // const [userData, setUserData] = useState([])
    // // const allusers = userData.users
    // // console.log(allusers)
    // useEffect(() => {
    //     async function fetchApi() {
    //         const data = await fetch(`https://dummyjson.com/users`)
    //             .then((res) => res.json())
    //         setUserData(await data)
    //     }
    //     fetchApi();
    // }, [])
    const {data,error} =useSWR(`https://dummyjson.com/users`,fetcher)

    if(error) return <h1>ErroR</h1>
    if(!data) return <h1>Loading...</h1>
    return (
        <div>
            <h1>Users</h1>
            {
                data &&  data.users.map(user => <Link href={`users/${user.id}`} key={user.id}><div >{user.firstName} </div></Link>)

            }
        </div>
    )
}

export default index
