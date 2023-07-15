import styled from "styled-components";
import ImgArticle1 from "./assets/images/image-retro-pcs.jpg";
import ImgArticle2 from "./assets/images/image-top-laptops.jpg";
import ImgArticle3 from "./assets/images/image-gaming-growth.jpg";

/* Styled Components */
const ArticlesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1440px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    width: 375px;
    margin-top: 0;
  }
`;

const ArticleItem = styled.article`
  display: flex;

  img {
    width: 100px;
  }

  div {
    padding: 0 1rem 0 1rem;
  }

  h1 {
    color: hsl(233, 8%, 79%);
    font-weight: 800;
    font-size: 30px;
  }

  h2 {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
    color: hsl(236, 13%, 42%);
    line-height: 2rem;
  }

  a {
    text-decoration: none;
    color: hsl(240, 100%, 5%);
  }

  a:hover {
    color: hsl(5, 85%, 63%);
  }

  @media (max-width: 1440px) {
    justify-content: space-around;
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 0;
    }
    p {
      font-size: 16px;
      line-height: 1.6rem;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

const Articles = () => {
  // Articles List
  const articlesList = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      picture: ImgArticle1,
      alt: "Retro computer",
      url: "index.html",
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
      picture: ImgArticle2,
      alt: "Laptops",
      url: "index.html",
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      picture: ImgArticle3,
      alt: "Gaming controller",
      url: "index.html",
    },
  ];
  return (
    <ArticlesSection>
      <Container>
        {articlesList.map((item) => {
          return (
            <ArticleItem key={item.id}>
              <img src={item.picture} alt={item.alt} />
              <div>
                <h1>{item.id}</h1>
                <a href={item.url}>
                  <h2>{item.title}</h2>
                </a>
                <p>{item.content}</p>
              </div>
            </ArticleItem>
          );
        })}
      </Container>
    </ArticlesSection>
  );
};

export default Articles;
