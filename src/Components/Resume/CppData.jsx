

// eslint-disable-next-line react/prop-types
export default function CppData({variable, value}) {
  return (
    <div>
         <p className="comment">{`// my ${variable}`}</p>
  <p> <span className=" text-green-600"> string  </span> <span className=" text-white">{variable}</span> = <span className=" text-blue-500">	&quot;{value}&quot;;</span> </p>

    </div>
  )
}
