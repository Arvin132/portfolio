import React, { useEffect, useState } from "react";
import "./blogArticle.css";

enum TextType {
    HEADER = 1,
    SECTION,
    IMAGE
}

interface Text {
    type: TextType
    value: string
}

interface Blog {
    headerLabel: string;
    imgUrl: string;
    mainContent: Text[];
}

function buildText(given: Text[]): [JSX.Element] {
    let retVal: [JSX.Element] = [<div/>]
    let index = 0
    while (index < given.length) {
        switch(given[index].type) {
            case TextType.HEADER:
                retVal.push(<h1 className="blog__article__main_header"> {given[index].value} </h1>)
                break;
            case TextType.SECTION:
                retVal.push(<p className="blog__article__main_text"> {given[index].value} </p>)
                break;
            case TextType.IMAGE:
                retVal.push(<img src={given[index].value} alt="text-badurl"/>)
                break;
        }
        index++;
    }

    return retVal
}

type BlogParam = {
    id: number
}

const BlogArticle = ({id} : BlogParam) => {
    const [content, setContent] = useState<JSX.Element[]>([])

    const blog: Blog = {
        headerLabel : "The Majestic Wonders of Trees",
        imgUrl: "https://media.architecturaldigest.com/photos/6081919db41653acb3f3a17b/16:9/w_2560%2Cc_limit/matt-artz-nTRDnDdDYk8-unsplash.jpg",
        mainContent: [
            {type: TextType.SECTION, value: "Trees, the towering giants of the natural world, have fascinated and captivated humans for centuries. As essential components of our ecosystem, they provide numerous benefits, ranging from environmental to socio-economic. In this essay, we will explore the remarkable qualities and significance of trees, highlighting their role in supporting life, preserving biodiversity, combating climate change, and enhancing our well-being."},
            {type: TextType.HEADER, value: "Life Sustainers"},
            {type: TextType.SECTION, value: "Trees are vital for the existence of life on Earth. Through the process of photosynthesis, they convert carbon dioxide into oxygen, releasing clean and breathable air into the atmosphere. Their leaves act as natural filters, purifying the air by trapping pollutants and harmful gases. Without trees, the air we breathe would be contaminated and unfit for human and animal survival."},
            {type: TextType.IMAGE, value: "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"},
            {type: TextType.HEADER, value: "Biodiversity Guardians"},
            {type: TextType.SECTION, value: "Forests, comprised of diverse tree species, harbor an incredible array of flora and fauna. Trees provide habitats and shelter for countless organisms, from birds and mammals to insects and microorganisms. They create intricate ecosystems that support intricate food webs and contribute to the overall balance of nature. Furthermore, forests serve as genetic reservoirs, safeguarding the genetic diversity necessary for species adaptation and evolution."},
            {type: TextType.IMAGE, value: "https://cdn.britannica.com/50/180050-138-521974A7/tree-limits-height-width-growth-ring-discussion.jpg?w=800&h=450&c=crop"},
        ]
    }

    useEffect(() => {
        setContent(buildText(blog.mainContent))
    }, [blog.mainContent])

    return (
        <div className="blog__article__container">
            <div className="blog__article__header"> {blog.headerLabel} </div>
            <div className="blog__article__image"> <img src={blog.imgUrl} alt="main-badurl"/>  </div>
            <div className="blog__article__main"> {content.map(elem => elem)} </div>
        </div>
    )
}


export default BlogArticle;