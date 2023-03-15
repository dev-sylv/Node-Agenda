import React from "react";
import styled from "styled-components";


const Header = () => {

    return (
        <>

            <Head>

                <Contain>

                    <Logo>LOGO</Logo>

                    <Navs>
                        <Nav>Home</Nav>
                        <Nav>Properties</Nav>
                        <Nav>Agents</Nav>
                        <Nav>Contact Us</Nav>
                        <Nav>About Us</Nav>
                    </Navs>

                    <Buttons>
                        <Button1>Sign in</Button1>
                        <Button2>Sign up</Button2>

                        {/* <div>
                          <button className="login-btn">Login</button>
                      </div>

                      <div>
                          <button className="logout-btn">Logout</button>
                      </div> */}

                      
                    </Buttons>

                </Contain>

            </Head>
        </>
    )
}

export default Header;

// const Header = styled.div``;

// const Header = styled.div``;

// const Header = styled.div``;

// const Header = styled.div``;

// const Header = styled.div``;

const Button2 = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
background-color:  #511378;
// border: 1px solid #191C24;
border: none;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
color: white;
font-weight: 600;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 105px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
:hover {
    box-shadow: 4px 4px 0 #511378;
    transform: translate(-4px,-4px);
    background: transparent;
    border: 1px solid #511378;
    color: #511378;
}
:focus-visible{
    outline-offset: 1px;
}

`;

const Button1 = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
border: 1px solid #511378;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
font-weight: 600;
color: #511378;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 105px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
:hover {
    box-shadow: 4px 4px 0 #511378;
    color: #511378;
    // color: #004DFF;
    transform: translate(-4px,-4px);
}
:focus-visible{
    outline-offset: 1px;
}

`;

const Buttons = styled.div`
display: flex;
align-items: center;
gap: 1rem;

.login-btn {
  font-family: Hack, monospace;
  background: #bbff00;
  color: #1d1d1d;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 250px;

  &::after {
      content: "\f2f6";
      font-family: "Font Awesome 5 Pro";
      font-weight: 400;
      position: absolute;
      left: 80%;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 0;
      transform: translate(-50%, -50%);

  }

  &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #0000ff61;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
      color: #ffffff;

      &::after {
          opacity: 1;
          transition: all 0.5s;
          color: #ffffff;

      }
  }


}


.logout-btn {
  font-family: Hack, monospace;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 250px;

  &::after {
      content: "\f2f5";
      font-family: "Font Awesome 5 Pro";
      font-weight: 400;
      position: absolute;
      left: 80%;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 0;
      transform: translate(-50%, -50%);

  }

  &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #0000ff61;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
color: #ffffff;
      &::after {
          opacity: 1;
          transition: all 0.5s;
          color: #ffffff;
      }
  }
}
`;

const Nav = styled.div`
font-weight: 600;
margin-right: 20px;
color: #52325d;
// color: #494949;
cursor: pointer;

:hover{
  color: gray;
}
`;

const Navs = styled.div`
display: flex;
align-items: center;
`;

const Logo = styled.div`
font-size: 25px;
font-weight: 600;
// color: #004DFF;
color: #511378;
`;

const Contain = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Head = styled.div`
// box-shadow: 0 0 3px gray;
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
// background-color: white;
z-index: 500;
`;

