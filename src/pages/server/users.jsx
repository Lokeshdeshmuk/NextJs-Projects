

export default function users(props) {
    // console.log(props)
    return (
        <div>
            <h1>Server Side Rendering</h1>
            {
               props.data.users.map(user=><li>{user.firstName}</li>)
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json()
    // console.log(data)
    return{
        props:{
            data,
        }
    }

}
