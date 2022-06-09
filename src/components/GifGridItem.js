
export const GifGridItem = ({id, title, url}) => {

  console.log(id, title, url);
    
  return (
    <div className="card">
        <img src={url} alt={title} className="card img" />
        <p className="card p">{title}</p>
    </div>
  )
}
