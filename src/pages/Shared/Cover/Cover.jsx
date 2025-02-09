const Cover=({img, heading, subHeading})=>{
    return (
        <div
  className="hero min-h-[400px]"
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
      <p className="mb-5 uppercase">
        {subHeading}
      </p>
    </div>
  </div>
</div>
    )
}

export default Cover;



