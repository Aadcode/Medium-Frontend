import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URl } from "../config";
import { useRecoilValue } from "recoil";
import { searchState } from "../state";

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
    const search = useRecoilValue(searchState)
    useEffect(() => {
        try {
            axios.get(`${BACKEND_URl}/api/v1/blog/bulk/${search}`,
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

    }, [search])
    return (
        {
            loading,
            blogs
        })

}

export default useBlogs