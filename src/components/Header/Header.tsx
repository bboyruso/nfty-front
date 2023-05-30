import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <a href="/" className="brand-name">
        NFTIFY
      </a>
    </HeaderStyled>
  );
};

export default Header;
