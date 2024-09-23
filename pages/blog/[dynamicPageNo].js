import Navbar from "@/components/Navbar";
import { useRouter } from "next/router"
const dynamicPageNo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id  = router.query.dynamicPageNo;
  return (
    <>
      <Navbar/>
      <h1>Dynamic Page</h1>
      <blink>my blog id is {id}</blink>
    </>
    
  )
}

export default dynamicPageNo