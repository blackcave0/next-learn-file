import Navbar from "@/components/Navbar";
import Image from "next/image";
import Head from 'next/head'
const HomePage =()=>{
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next Js learn "/>
        <meta name="author" content="Next Js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      
      <Navbar/>
      <h1>welcome to my Home Page</h1>
      <style jsx>
        {`
          h1 {
            color: red;
            text-decoration: underline;
          }
        `}
      </style>

      <Image
        src="/demo.jpg"
        alt="Next.js logo"
        width="700"
        height={500}
        priority
        style={{display:"block",margin:"auto"}}
      />

    </>
  )
}

export default HomePage;