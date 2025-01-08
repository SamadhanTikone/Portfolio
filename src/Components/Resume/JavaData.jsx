

// eslint-disable-next-line react/prop-types
export default function JavaData({variable , value}) {
  return (
    <div>
       <p className="comment">{`// my ${variable}`}</p>
  <p> <span className=" text-green-600"> String  </span> <span className=" text-white">{variable}</span> = <span className="value">	&quot;{value}&quot;;</span> </p>

    </div>
  )
}
