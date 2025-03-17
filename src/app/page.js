import Image from "next/image";
import Gradient from "../../components/Gradient";

export default function Home() {
  return(
    <>
      <main>
        <Gradient 
          content={
            <>
              UX//UI Designer <br />
              Project Manager
            </>
          }
        />
      </main>
    </>
  ) 
}
