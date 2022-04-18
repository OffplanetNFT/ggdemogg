import React from "react";
import styled from "styled-components";
export const FlexColumn1 = ({}) => {
  const HistoryButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const HomeButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const WalletButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const CardButtonsFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <FlexColumnRoot>
      <Header>
        <HeaderBackground>
          <Nav>
            <HistoryButton
              onClick={(e) => HistoryButtonFunction(e, "HistoryButton")}
            >
              <Text1 width={"71px"}>history</Text1>
            </HistoryButton>
            <HomeButton onClick={(e) => HomeButtonFunction(e, "HomeButton")}>
              <Text1 width={"57px"}>home</Text1>
            </HomeButton>
          </Nav>
          <Logo src={"https://file.rendit.io/n/HDnZhP3rCKUekX1toCXE.svg"} />
          <WalletButton
            onClick={(e) => WalletButtonFunction(e, "WalletButton")}
          >
            <Text3>Connect a Wallet</Text3>
          </WalletButton>
        </HeaderBackground>
        <HeaderLine />
      </Header>
      <Card>
        <CardBackground>
          <CardImages
            src={"https://file.rendit.io/n/rQWZ5wObcjWNtzMsjEBd.png"}
          />
        </CardBackground>
        <CardButtons onClick={(e) => CardButtonsFunction(e, "CardButtons")}>
          <CardTitle>MINT </CardTitle>
        </CardButtons>
      </Card>
      <Image1 src={"https://file.rendit.io/n/QmHwtvBsRbcv3fpAvfNo.svg"} />
      <Line src={"https://file.rendit.io/n/3mxJ3Dhxhm4kDHuOpyob.svg"} />
    </FlexColumnRoot>
  );
};
const FlexColumnRoot = styled.div`
  height: 2076px;
  background-image: linear-gradient(214deg, #3b1d60 0%, #0f1045 72%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1440px;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 156px 0px;
`;
const HeaderBackground = styled.div`
  backdrop-filter: blur(6px);
  width: 1227px;
  background-color: rgba(0, 0, 0, 0.52);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 14px 113px 14px 100px;
`;
const Nav = styled.div`
  width: 168px;
  height: 26px;
  position: relative;
  margin: 0px 314px 27px 0px;
`;
const HistoryButton = styled.button`
  height: 18px;
  background-color: #00c1ff;
  display: flex;
  position: absolute;
  left: 92px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 4px 0.1px 4px 5px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const HomeButton = styled.button`
  height: 18px;
  background-color: #00c1ff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 4px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Logo = styled.img`
  width: 273px;
  height: 94px;
  align-self: center;
  margin: 0px 340px 0px 0px;
`;
const WalletButton = styled.button`
  height: 37px;
  background-color: #00c1ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  padding: 0px 6px 0px 7px;
  margin: 0px 0px 23px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Text3 = styled.div`
  text-align: center;
  width: 119px;
  font-size: 14px;
  font-family: Dunbar Tall;
  line-height: 16.8px;
  color: #990000;
`;
const HeaderLine = styled.div`
  width: 1440px;
  height: 3.65px;
  background-color: #ff0000;
`;
const Card = styled.div`
  width: 361px;
  height: 496px;
  position: relative;
  margin: 0px 0px 1156px 0px;
`;
const CardBackground = styled.div`
  border-width: 12px;
  border-color: #52a545;
  border-style: solid;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.99);
  width: 293px;
  background-color: #c73333;
  display: flex;
  position: absolute;
  top: -12px;
  left: -12px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 120px;
  padding: 24.89px 22px 25.11px 22px;
`;
const CardImages = styled.img`
  width: 265px;
  height: 287px;
`;
const CardButtons = styled.button`
  border-width: 12px;
  border-color: #53a645;
  border-style: solid;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.77);
  width: 197px;
  height: 40.1px;
  background-color: #00c1ff;
  display: flex;
  position: absolute;
  top: 415.4px;
  left: 57px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 42px;
  padding: 2.23px 1px 2.17px 1px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const CardTitle = styled.div`
  text-align: center;
  width: 187px;
  height: 40.1px;
  display: flex;
  font-size: 40px;
  font-family: Dunbar Tall;
  line-height: 48px;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;
const Image1 = styled.img`
  width: 392px;
  height: 45px;
  margin: 0px 0px 21px 0px;
`;
const Line = styled.img`
  width: 1320px;
  height: 3px;
`;
const Text1 = styled.div`
  height: 15px;
  display: flex;
  font-size: 18px;
  font-family: Dunbar Tall;
  line-height: 21.6px;
  color: #990000;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
