import React, {useEffect} from 'react';
import GraphQLFetch from "../../utils/graphqlFetch";
import BlogCard from "../../components/blogCard";
import Banner from "./banner";
import SortBar from "./sortBar";


const FindPetsPage = () => {

    const [blogs, setBlogs] = React.useState([]);
    const [error, setError] = React.useState(null);

    const QUERY = `
      query {
          posts{
            posts{
                id
                title
                content
            }
          }
        }
     `;

    useEffect(() => {
        GraphQLFetch({
            query: QUERY,
        }).then((data) => {
            if (data.errors) {
                setError(data.errors);
            }
            else setBlogs(data.data.posts.posts);
        });
    }, []);

    return (
        <div className="flex flex-col items-center mb-10 ">
            <Banner/>
            <SortBar/>
            <div className="flex w-11/12">
                <div className="mt-6 w-full mt-12 justify-evenly items-center flex flex-wrap">
                    {blogs.map((blog:any) => (
                        <BlogCard name={blog.title} Date="27/11/22" expert={blog.title}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FindPetsPage;