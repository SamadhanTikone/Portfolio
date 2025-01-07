import { useContext } from "react"
import "./Resume.css"
import { Theme } from "../Context/Context"

export default function Resume() {

  const {theme} = useContext(Theme)
  return (
    <div className={`${theme? "bg-[#222831] text-white" : "bg-white text-black"}`}>
     
     <div className="flex main ">

<div >
  <h1 className="">Personal Info</h1>
</div>

<div className="content">
  <p className="comment">{`// my name`}</p>
  <p> <span className="variable"> cont  </span> <span className="variableName">name</span> = <span className="value">	&quot;tikone samadhan mahadev&quot;;</span> </p>

  <p className="comment">{`// my qualification`}</p>
 <p> <span className="variable"> cont  </span> <span className="variableName">qualification</span> = <span className="value">&quot;B.Tech In Computer Science and Engineering&quot;;</span> </p>

 <p className="comment">{`// my mobile`}</p>
<p> <span className="variable"> cont  </span> <span className="variableName">mobile</span> =  <span className="value">&quot;+91-9356807968&quot;; </span> </p>

<p className="comment">{`// my email`}</p>
 <p> <span className="variable"> cont  </span> <span className="variableName">email</span> = <span className="value">&quot;tikonesamadhan03@gmail.com&quot;;</span></p>

 <p className="comment">{`// my address`}</p>
<p> <span className="variable"> cont  </span> <span className="variableName">address</span> = <span className="value" >&quot;Dharashiv / Pune , Maharashtra, India.&quot;;</span></p>
</div>

     </div>

    </div>
  )
}
