import Link from "next/link";
import List from "./List";
import Image from "next/image";

export default function NavBar() {
  return (
<nav className="flex w-full justify-between mt-3 px-3">
    <List/>
    <Link href={`/`}><Image height={10} width={147} style={{width:"auto",height:"auto"}}  alt="logo" src={`/Logo.PNG`} /></Link>
    <Link href={`/reserve`}><Image height={10} width={46}  style={{width:"auto",height:"auto"}}   alt="logo" src={`/Vector.png`} /></Link>
</nav>  )
}
