import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
    const [blog, setBlog] = useState<Blog>()
    useEffect(()  =>  {
        const getData = async () => {
            const firebaseConfig = {
                apiKey: "AIzaSyCd5bGsyxu7O6P4Ozvg6NCN-5TiCCzMi6g",
                authDomain: "arvin-profolio.firebaseapp.com",
                projectId: "arvin-profolio",
                storageBucket: "arvin-profolio.appspot.com",
                messagingSenderId: "1058179649227",
                appId: "1:1058179649227:web:0a3c622aa579a7ffa3554e",
                measurementId: "G-MBTB40WWD9"
            };
            const docRef = doc(getFirestore(initializeApp(firebaseConfig)), "blogs", `${id}`);

            const querySnapshot = await getDoc(docRef);
            const data = querySnapshot.data()

            let temp: Blog = {
                headerLabel: data?.headerLabel || "default header",
                imgUrl: data?.imgUrl || "default image",
                mainContent: []
            };

            // create array of text
            let index = 0
            while(index < data?.content.length) {
                let type = data?.content[index]
                let value = data?.content[index + 1]
                let text: Text = { type: TextType.HEADER, value: value}

                switch(type) {
                    case "S": text.type = TextType.SECTION
                              break
                    case "H": text.type = TextType.HEADER
                              break;
                    case "I": text.type = TextType.IMAGE
                              break;
                }
                index += 2
                temp.mainContent.push(text)
            }

            setBlog(temp)
            setContent(buildText(temp.mainContent))
        }
        
        getData()
            .catch(console.error);
    }, [id])

    return (
        <div className="blog__article__container">
            <div className="blog__article__header"> {blog?.headerLabel} </div>
            <div className="blog__article__image"> <img src={blog?.imgUrl} alt="main-badurl"/>  </div>
            <div className="blog__article__main"> {content.map(elem => elem)} </div>
        </div>
    )
}


export default BlogArticle;