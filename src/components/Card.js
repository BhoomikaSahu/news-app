// import NewsAPI from './Navbar';

const Card = (props) => {
  // NewsAPI();
  return (
    <>
      <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={props.url} className="btn btn-primary">
            READ
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;