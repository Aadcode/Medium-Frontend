import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URl } from "../config";

export interface Blog {
    id: string,
    title: string
    description: string,
    published: boolean
    authorId: string,
    author: {
        name: string
    }
}
const useBlogs = () => {


    const [loading, setloading] = useState(true);
    const [blogs, setblogs] = useState<Blog[]>([])
    useEffect(() => {
        try {
            axios.get(`${BACKEND_URl}/api/v1/blog/bulk`,
                {
                    headers: {
                        authorization: localStorage.getItem("Token")
                    }
                }
            ).then((res) => {
                setblogs(res.data.blogs)
                setloading(false)
            })
        }
        catch {
            console.log("Help")
        }

    }, [])
    return (
        {
            loading,
            blogs
        })

}

export default useBlogs