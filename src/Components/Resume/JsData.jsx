

// eslint-disable-next-line react/prop-types
export default function JsData({variable , value}) {


  return (
    <div>
      
      <p className="comment">{`// my ${variable}`}</p>
  <p> <span className="variable"> cont  </span> <span className="variableName">{variable}</span> = <span className="value">	&quot;{value}&quot;;</span> </p>


    </div>
  )
}
