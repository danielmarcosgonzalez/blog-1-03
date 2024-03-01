import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Post} from "../../types.ts";
import PostModel from "../../db/Posts.ts";

type Data={
    id?:string,
    title?:string
    author?:string,
    text?:string
}

export const handler: Handlers<Data>={
    GET: async(req:Request, cxt: FreshContext<unknown,Data>)=>{
        const {id} = cxt.params;
        const posts = await PostModel.findById(id);
        const a:Data={id:posts?.id,title:posts?.title,author:posts?.author,text:posts?.text};
        return cxt.render(a);
    },
};

const Page =(Props: PageProps<Data>)=>{
    return(
        <div>
            <h1>{Props.data.title}</h1>
            <h3>{Props.data.author}</h3>
            <p>{Props.data.text}</p>

            <a href={"/posts"}>Volver</a>
        </div>

    )

};

export default Page;