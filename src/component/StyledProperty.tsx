import styled from "styled-components";

interface HeaderProps {
  width: number;
}

interface ItemHeaderProps {
  color: string;
}

interface ButtonBoxProps {
  type: string;
}

interface BoxProps {
  width: number;
}

export const Container = styled.div`
  margin: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: ${(props: HeaderProps) =>
    props.width < 1100 ? "center" : "flex-start"};
  align-items: center;
  margin: 20px;
`;

export const SvgContainer = styled.div`
  width: 250px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props: BoxProps) =>
    props.width < 1100 ? "column" : "row"};
  justify-content: ${(props: BoxProps) =>
    props.width < 1100 ? "center" : "space-around"};
`;

export const ListContainer = styled.div`
  padding: 20px;
  margin: 20px 0 20px 0;
  width: ${(props: BoxProps) => (props.width < 1100 ? "85%" : "25%")};
  border: 1px solid grey;
  border-radius: 25px;
  border-style: dashed;
`;

export const ItemContainer = styled.div`
  height: 200px;
`;

export const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  display: block;
`;

export const ItemHeader = styled.div`
  background-color: ${(props: ItemHeaderProps) =>
    props.color ? props.color : "#FFF"};
  padding: 3% 5% 3% 5%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const ItemFooter = styled.div`
  background-color: ${(props: ItemHeaderProps) =>
    props.color ? props.color : "#FFF"};
  padding: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const OverlayCenter = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  transition: 0.5s ease-out;
  opacity: 0;
  color: white;
  font-size: 20px;
  text-align: center;
`;

export const ListWrapper = styled.div`
  margin: 20px 0px 20px 0;
  position: relative;
  opacity: 1;
  &:hover {
    ${OverlayCenter} {
      opacity: 1;
    }
    ${MainImage} {
      -webkit-filter: brightness(50%);
      filter: brightness(50%);
    }
  }
`;

export const ButtonBox = styled.div`
  font-family: MuseoSans700;
  font-weight: 100;
  letter-spacing: -0.04em;
  margin: 0 5% 0 5%;
  border-radius: 25px;
  border: 2px solid
    ${(props: ButtonBoxProps) =>
      props.type === "results" ? "#00FF00" : "#FF0000"};
  border-color: ${(props: ButtonBoxProps) =>
    props.type === "results" ? "#00FF00" : "#FF0000"};
  color: ${(props: ButtonBoxProps) =>
    props.type === "results" ? "#00FF00" : "#FF0000"};
  cursor: pointer;
`;

export const EmptyList = styled.div`
  padding: 50% 0 50% 0;
  text-align: center;
`;

export const H2 = styled.h2`
  font-family: MuseoSans500;
  font-weight: 100;
  letter-spacing: -0.04em;
`;

export const H3 = styled.h3`
  font-family: MuseoSans700;
  font-weight: 100;
  letter-spacing: -0.04em;
`;

export const P = styled.p`
  font-size: 25px;
  font-family: MuseoSans300;
  font-weight: 100;
  line-height: 10px;
  letter-spacing: -0.04em;
  color: white;
  mix-blend-mode: difference;
`;

export const Link = styled.a`
  color: #fff;
  border-color: #91b2c3;
  background-color: #91b2c3;
  border-radius: 100px;
  padding: 10px 20px;
  margin-top: 100px;
  font-weight: bold;
`;
