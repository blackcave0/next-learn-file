import Navbar from "@/components/Navbar";
import { useRouter } from "next/router"

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2460510133.
export const getStaticPaths = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((mapData) => {
    return {
      params: {
        dynamicPageNo: mapData.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.dynamicPageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const dynamicPageNo = ({data}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id  = router.query.dynamicPageNo;
  return (
    <>
      <Navbar/>
      <h1>Dynamic Page</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </>
    
  )
}

export default dynamicPageNo