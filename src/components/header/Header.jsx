import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="headerTiles">
        <span className="headerTitleSm">Ninette's</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.stanford.edu/wp-content/uploads/2022/04/Memorial-Church.jpg"
        alt=""
      />
    </div>
  );
}
