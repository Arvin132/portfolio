import React, { useState, useEffect, FormEvent }  from "react";
import "./blogEditor.css";
import { getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface BlogElementData {
    id: number;
    header: string;
    desc: string;
}


function BlogEditorListView() {
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
        }

        getData()
        .then(() => console.log(blogs))
        .catch(console.error)
    }, [])

    return(
        <React.Fragment>
            <div className="blog__editor__container">
                    <div className="blog__editor__add__button_conatiner">
                        <div className="h__spacer"></div>
                         <button> new blog</button>
                    </div>
                    <div className="blog__editor"> fdasf</div>
            </div>    
        </React.Fragment>
    )
}


function BlogEditor() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("ArvinAsgharianlogedIn") === "true") setLoggedIn(true);
    })

    const submitUserPass = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const firebaseConfig = {
            apiKey: "AIzaSyCd5bGsyxu7O6P4Ozvg6NCN-5TiCCzMi6g",
            authDomain: "arvin-profolio.firebaseapp.com",
            projectId: "arvin-profolio",
            storageBucket: "arvin-profolio.appspot.com",
            messagingSenderId: "1058179649227",
            appId: "1:1058179649227:web:0a3c622aa579a7ffa3554e",
            measurementId: "G-MBTB40WWD9"
        };

        const docRef = doc(getFirestore(initializeApp(firebaseConfig)), "users", username)
        await getDoc(docRef)
            .then((docSnapShot) => {
                console.log(docSnapShot.data())
                if (docSnapShot.exists() && docSnapShot.data()["password"] === password) {
                    setLoggedIn(true)
                    sessionStorage.setItem("ArvinAsgharianlogedIn", "true")
                } else {
                    window.alert("Wrong Username or Password")
                }
            })
            .catch((error) => {
                console.log("Error while trying to Authenticate:", error)
            })
    }

    return (
        <React.Fragment>
            {loggedIn ? (
                <BlogEditorListView></BlogEditorListView>
            ) : (
                <div className="blog__editor__container max__height">
                    <form className="login__container" onSubmit={submitUserPass}>
                        <input type="text"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value)}}
                                placeholder="Username"
                                required
                        />
                        <input type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value)}}
                                placeholder="Password"
                                required
                        />
                        <button className="login__button" type="submit"> Login </button>
                    </form>  
                </div> 
            )}
           
               
        </React.Fragment >
    )
}

export default BlogEditor;