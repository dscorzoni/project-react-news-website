import styled from "styled-components";
import ImgWebDesktop from "./assets/images/image-web-3-desktop.jpg";
import ImgWebMobile from "./assets/images/image-web-3-mobile.jpg";

/* Styled Components */
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HeroDiv = styled.div`
  flex: 3;
  img {
    width: 100%;
  }

  @media (max-width: 1440px) {
    flex: 1;
    flex-direction: column;
  }
`;

const HighlightsDiv = styled.div`
  flex: 1;
  background-color: hsl(240, 100%, 5%);
  color: hsl(36, 100%, 99%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h1 {
    font-size: 40px;
    color: hsl(35, 77%, 62%);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
    color: hsl(233, 8%, 79%);
    line-height: 2rem;
  }

  a {
    text-decoration: none;
    color: hsl(36, 100%, 99%);
  }

  a:hover {
    color: hsl(35, 77%, 62%);
  }

  @media (max-width: 1440px) {
    padding: 1.5rem;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const HeroContentDiv = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  gap: 3rem;
  h1 {
    flex: 1;
    font-size: 75px;
    font-weight: 800;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    margin-top: 1rem;
    font-size: 22px;
    line-height: 2.5rem;
  }
  button {
    border: 0;
    padding: 1rem;
    width: 50%;
    font-size: 20px;
    background-color: hsl(5, 85%, 63%);
    color: hsl(36, 100%, 99%);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    background-color: hsl(240, 100%, 5%);
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    h1 {
      font-size: 50px;
    }
    p {
      margin: 0;
      font-size: 15px;
      line-height: 1.5rem;
    }
    button {
      font-size: 15px;
      font-weight: 700;
      width: 60%;
      margin-top: 1rem;
    }
  }
`;

const DividerDiv = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 1px;
  width: 100%;
  background-color: hsl(236, 13%, 42%);

  @media (max-width: 1440px) {
    margin: 2rem 0 2rem 0;
  }
`;

// Hero Component
const Hero = () => {
  // Hero main content
  const mainContent = {
    id: 0,
    title: "The Bright Future of Web 3.0?",
    content:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    url: "index.html",
  };

  // Highlights section content
  const hlContent = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cards",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
      url: "index.html",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
      url: "index.html",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      url: "index.html",
    },
  ];

  return (
    <HeroSection>
      <Container>
        <HeroDiv>
          <picture>
            <source media="(max-width: 1440px)" srcSet={ImgWebMobile} />
            <img src={ImgWebDesktop} alt="Colored blocks" />
          </picture>
          <HeroContentDiv>
            <h1>{mainContent.title}</h1>
            <div>
              <p>{mainContent.content}</p>
              <button>Read More</button>
            </div>
          </HeroContentDiv>
        </HeroDiv>
        <HighlightsDiv>
          <h1>New</h1>
          {hlContent.map((item) => {
            return (
              <div key={item.id}>
                {item.id > 1 ? <DividerDiv></DividerDiv> : null}
                <a href={item.url}>
                  <h2>{item.title}</h2>
                </a>
                <p>{item.content}</p>
              </div>
            );
          })}
        </HighlightsDiv>
      </Container>
    </HeroSection>
  );
};

export default Hero;
