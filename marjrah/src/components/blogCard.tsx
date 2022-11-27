import React, {useState} from "react";
import styled from '@emotion/styled';

type BlogCard = {
    expert?: string,
    name?: string;
    imgUrl?: string;
    Date?: string;
    blogProps?: BlogProps;
    onClick?: (id: number) => void;
    addToCart?: () => void;
    addToFavorite?: () => void;
}

type BlogProps = {
    rating?: number;
    strikePrice?: number;
    colorOptions?: any;
    sizeOptions?: any;
}

const BlogCardContainer = styled('div')`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  height: 370px;
  width: 477px;
  padding: 20px;
  margin: 10px;
  background: #fff;
  transform: scale(1);
  transition: box-shadow 0.2s, transform 0.1s;
  font-family: "Montserrat", sans-serif;
  img {
    position: relative;
    width: 450px;
    height: 200px;
    //transition: transform 400ms, filter 400ms;
  }
  :hover {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    div {
      opacity: 1;
    }
  }
`

const BlogImageContainer = styled('div')`
    position: relative;
      width: 417px;
      height: 214px;
`
const BlogDetailsContainer = styled('div')`
    height: 100%;
    width: 100%;
`
const OptionsContainer = styled('div')`
    transition: 0.5s;
    opacity: 0;
`

type imageProp = {
    imgUrl?: string;
}

const BlogImage = styled('div')<imageProp>`
  width: 440px;
  height: 268px;
  z-index: 2;
  object-fit: cover;
  img {
    width: 437px;
    height: 214px;
  }
`

const ReadMore = ({ children = '' }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 300) : text}
            <span onClick={toggleReadMore}  className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
        </p>
    );
};


const BlogCard = ({ expert, name = "", imgUrl, Date, blogProps = {}, onClick = () => {}, addToFavorite = () => {}, addToCart = () => {}  }: BlogCard) =>  (
    <BlogCardContainer onClick={() => onClick}>
        <BlogImageContainer className="static">
            <BlogImage className="absolute" imgUrl={imgUrl}>
                <img className="object-cover" src={imgUrl ? imgUrl : "https://images.unsplash.com/photo-1666226318893-8b5ed1d82d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} alt="Not Found :_("/>
            </BlogImage>
            <OptionsContainer className="flex absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            </OptionsContainer>
        </BlogImageContainer>
        <BlogDetailsContainer>
            <div className="flex justify-between">
                <div style={{ fontSize: '12px', color: "#4f4f4f", fontWeight: 600 }} className="pt-1 pr-1 pb-1">
                    {expert}
                </div>
                <div style={{ fontSize: '12px', color: "#bdbdbd", fontWeight: 600  }} className="pt-1 pb-1 pr-1">
                    {Date}
                </div>
            </div>
            <div style={{ fontSize: '16px', color: "#030e19", fontWeight: 600 }} className="pt-1 pr-1 pb-1">
                {name?.length > 20 ? name.substring(0, 25) + "..." : name}
            </div>
            <div className="flex">

                <div style={{ fontSize: '10px', color: " #ff4c68" }} className="pt-1 pr-1 pb-1">
                    <ReadMore>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </ReadMore>
                </div>
            </div>
        </BlogDetailsContainer>
    </BlogCardContainer>
);


export default BlogCard;



