import {
  H3,
  P,
  ListWrapper,
  ListContainer,
  ItemContainer,
  ItemHeader,
  ItemFooter,
  MainImage,
  OverlayCenter,
  ButtonBox,
  EmptyList,
  Box,
} from "./StyledProperty";
import React from "react";
import { useWindowSize } from "../utils/useWindowSize";

export function BoxContainer({ children }: any) {
  let [winWidth] = useWindowSize();
  return <Box width={winWidth}>{children}</Box>;
}

const Wrapper = ({ item, index, children }: any) => (
  <React.Fragment>
    <ListWrapper key={index}>
      <ItemHeader color={item.agency.brandingColors.primary}>
        <img src={item.agency.logo} alt={"img" + index} />
      </ItemHeader>
      <ItemContainer>
        <MainImage src={item.mainImage} alt={"mainImg" + index} />
      </ItemContainer>
      <ItemFooter color={item.agency.brandingColors.primary}>
        <P>{item.price}</P>
      </ItemFooter>
      <OverlayCenter>{children}</OverlayCenter>
    </ListWrapper>
  </React.Fragment>
);

export function PropertyComponent(props: any) {
  let [winWidth] = useWindowSize();
  return (
    <ListContainer width={winWidth}>
      <H3>{props.type === "results" ? "Results" : "Saved Properties"}</H3>
      {props.type === "results" ? (
        props.data.results.length > 0 ? (
          props.data.results.map((item: any, index: number) => (
            <Wrapper item={item} index={index} key={index}>
              <ButtonBox
                type={props.type}
                onClick={() => props.actions(props.data, item, index)}
              >
                Add Property
              </ButtonBox>
            </Wrapper>
          ))
        ) : (
          <EmptyList>
            <H3>There are no Results at the moment</H3>
          </EmptyList>
        )
      ) : props.data.saved.length > 0 ? (
        props.data.saved.map((item: any, index: any) => (
          <Wrapper item={item} index={index} key={index}>
            <ButtonBox
              type={props.type}
              onClick={() => props.actions(props.data, item, index)}
            >
              Remove Property
            </ButtonBox>
          </Wrapper>
        ))
      ) : (
        <EmptyList>
          <H3>There are no Saved Properties at the moment</H3>
        </EmptyList>
      )}
    </ListContainer>
  );
}
