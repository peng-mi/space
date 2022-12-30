import Link from "next/link";
import Head from "next/head";

function Header() {
   return (
     <div className="flex justify-between my-8 items-center">
      <Head><title>Peng Blog</title></Head>
       <Link href="/">Home</Link>
       <div>
         {/* <a
           href="https://twitter.com/MarkSShenouda"
           target="_blank"
           rel="noopener noreferrer"
           className="mr-4"
         >
           Twitter
         </a> */}
         <a
           href="https://github.com/peng-mi"
           target="_blank"
           rel="noopener noreferrer"
         >
           Github
         </a>
       </div>
     </div>
   );
 }
 
 export default Header;