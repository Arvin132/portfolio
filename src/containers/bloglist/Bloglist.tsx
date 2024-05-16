import React, {useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
import { Header, Footer, BlogElement } from "../../components";
import "./bloglist.css";

interface BlogElementData {
    id: number;
    header: string;
    desc: string;
}

const BlogList = () => {

    const [blogs, setBlogs] = useState<BlogElementData[]>()

    useEffect(() => {
        
        const getData = async () => {
            const temp: BlogElementData[] = []
            const firebaseConfig = {
                apiKey: "AIzaSyCd5bGsyxu7O6P4Ozvg6NCN-5TiCCzMi6g",
                authDomain: "arvin-profolio.firebaseapp.com",
                projectId: "arvin-profolio",
                storageBucket: "arvin-profolio.appspot.com",
                messagingSenderId: "1058179649227",
                appId: "1:1058179649227:web:0a3c622aa579a7ffa3554e",
                measurementId: "G-MBTB40WWD9"
            };
            const collecRef = collection(getFirestore(initializeApp(firebaseConfig)), "blogs");
            const querySnapshot = await getDocs(collecRef)

            querySnapshot.forEach((doc) => {
                const data: BlogElementData = {
                    header: doc.data()["headerLabel"],
                    id: parseInt(doc.id),
                    desc: doc.data()["desc"]
                }

                temp.push(data)
            });

            setBlogs(temp)
            console.log(temp)
        }

        getData()
        .then(() => console.log("tamama"))
        .catch(console.error)
    }, [])
    

    return (
        <div className="bloglist__container max__height">
            <Header/>
            <div className="bloglist__elements_container">
                {blogs?.map(elem => <BlogElement key={elem.id} id={elem.id} header={elem.header} desc={elem.desc}/>)}
            </div>
            <div className="v_spacer"></div>
            <Footer/>
        </div>
    )
}



export default BlogList;