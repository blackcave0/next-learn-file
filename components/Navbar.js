import Link from "next/link"
import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar