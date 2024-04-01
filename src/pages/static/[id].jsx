
export default function users() {
  return (
    <div>
      
    </div>
  )
}

export async function getStaticPaths() {
    const data = await (await fetch(`https://dummyjson.com/users`)).json()
   
    const paths = data.map((post) => ({
      params: { id: post.id },
    }))
   
    return { paths, fallback: false }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()
    // console.log(data)
    return{
        props:{
            data,
        }
    }

}
