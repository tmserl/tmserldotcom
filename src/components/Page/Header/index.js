import './Header.css';

function Header() {
  const img =
    'https://pbs.twimg.com/profile_images/1475548897703514119/9b6Pg_pL_400x400.jpg';

  return (
    <div className="header">
      <div className="header--img">
        <img src={img} alt="Tom Earl" />
      </div>
      <div className="header--info">
        <h1>👋 Hey, I'm Tom!</h1>
        <h2>I'm a software engineer based in the West Midlands.</h2>
      </div>
    </div>
  );
}

export default Header;
