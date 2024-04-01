import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'


const fetcher = (...arg) => fetch(...arg).then(res => res.json())

export default function index() {
  // const [userInfo, setUserInfo] = useState()
  const router = useRouter()
  const Id = router.query.id

  const {data,error} = useSWR(`https://dummyjson.com/users/${Id}`,fetcher)
  
  // useEffect(() => {
  //   async function gerUserById(Id) {
  //     const data = await fetch(`https://dummyjson.com/users/${Id}`)
  //     .then((res) => res.json())
  //     setUserInfo(data)
  //   }
  //   gerUserById(Id);

  // }, [router.query.id]);
  // console.log(userInfo)  
  return (
    <div>
      <h1>{data?.email}</h1>
      <h1>{data?.age}</h1>
      {/* <h1>lokesh</h1> */}
    </div>
  )
}
