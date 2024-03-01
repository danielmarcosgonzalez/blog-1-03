import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Post} from "../types.ts";
import PostModel from "../db/Posts.ts";


type Data={
    posts:Array<Post>;
}

export const handler: Handlers<Data> ={
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>)=>{
        const posts = await PostModel.find();
        return ctx.render({posts});
    },
};

const Page =(props: PageProps<Data>)=>{
    return(
        <div>
            <h1>Posts del Blog</h1>
            <ul>
            {props.data.posts.map((e)=>(
            
                <li key={e.id}>
                    <span>{e.author}</span>
                    <a href={`/post/${e.id}`}>{e.title}</a>
                </li>

            
            ))}
            </ul>
        </div>
    );
};

export default Page;