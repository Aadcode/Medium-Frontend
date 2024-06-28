import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URl } from "../config";
import { Blog } from "../hooks/index";

const useBlog = ({ id }: { id: string }) => {
    const [loading, setloading] = useState(true)
    const [blog, setblog] = useState<Blog>()
    useEffect(() => {
        try {
            axios.get(`${BACKEND_URl}/api/v1/blog/${id}`,
                {
                    headers: {
                        authorization: localStorage.getItem("Token")
                    }

                }
            ).then((res) => {
                setblog(res.data.blog)
                setloading(false)
            })
        }
        catch {
            console.log("Help")
        }

    }, [id])
    return {
        blog,
        loading
    }

}

export default useBlog;