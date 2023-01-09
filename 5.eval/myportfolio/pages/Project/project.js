import React from 'react'
export const getServerSideProps = async () => {
  let data = await fetch(
    `https://api.github.com/search/repositories?q=user:Sam202003+fork:true&sort=updated&per_page=10&type=Repositories`
  )
  data = await data.json()
  return {
    props: {
      data,
    },
  }
}







export default function Projects({ data }) {
  return (
    <>
      <div>
         {/* <h2>{data.total_count}</h2> */}
        </div>
         
    </>
  )
}



