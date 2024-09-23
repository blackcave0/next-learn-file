import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react";

const ErrorPage = () => {

  useEffect(()=>{
    setTimeout(() => {
      router.push('/')
    }, 4000);
  })
  const router = useRouter();
  return (
    <>
      <h1>404 Error Page</h1>
      <p>This page does not exist</p>
      {/* <Link href="/">Back to Home</Link> */}
      <a onClick={()=>{ router.push('/')}}>Home Page</a>
    </>
  )
}

export default ErrorPage