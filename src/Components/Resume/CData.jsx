

// eslint-disable-next-line react/prop-types
export default function CData({variable, value}) {
  return (
    <div>
      
      <p className="comment">{`// my ${variable}`}</p>
  <p> <span className=" text-green-600"> char[]  </span> <span className=" text-blue-500">{variable}</span> = <span className="value">	&quot;{value}&quot;;</span> </p>


    </div>
  )
}
