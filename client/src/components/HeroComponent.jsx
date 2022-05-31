import React from "react";
import styled from "styled-components";

const HeroComponent = () => {
  return (
    <Container>
      <LeftContainer>
        <HeroText>
          From students to senior citizens this web portal of "Products and
          Classifieds” provides it all
        </HeroText>
      </LeftContainer>
      <RightContainer>
        <HeroImage src="https://s3-alpha-sig.figma.com/img/b36d/e1f7/6e39151eda7adf99bf1853ca94e11fee?Expires=1655078400&Signature=S0dkJwvkTFK2XsGXmYUKVUyLyJjEJpBWgVnr2SIhfBjt~833C2b~D332cKTJGtMPHe09VqMUmRkpWMTnBhI6bEqqzBQ3-6uBZSAq-sG2NXGhdYpbvhf3-SEK88P3xytfhlP5gsvpinpDA1o679PeXL9~vE3rwjfBL2Zz-yr3FQmdgo~fGLmpBmxtJnY1Fvsr6US14s75Yh0GWx9kxdIDzfounUwaFNtWyLFKIGVxn1GdXd2-xKRU203mkAUh0bCODw6yM0XASApuqT9oyYoM~Q-nj55RWVjEQdpZGmOsz3Pir23BN5cqNRkDHajWZo~6lQNBBZAbgd2~hgZmX3x40g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 660px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50% !important;
`;

const HeroText = styled.h3`
  font-weight: 300;
  font-size: 48px;
  line-height: 121.8%;
  width: 779px;
  height: 232px;
`;

const RightContainer = styled.div`
  width: 50%;
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default HeroComponent;
