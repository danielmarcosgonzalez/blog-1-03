import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PostModel from "../db/Posts.ts";


export const handler: Handlers = {
    POST: async(req:Request, ctx:FreshContext)=>{
        try {
            const form = await req.formData();
            const data = {
              title: form.get("title"),
              author: form.get("author"),
              text: form.get("text"),
            };
      
            await PostModel.create(data);
      
            return new Response("", {
              status: 303,
              headers: {
                "Location": "/posts",
              },
            });
          } catch (error) {
            return new Response(error.message, {
              status: 500,
            });
          }
    },
};

const Page = ()=>{
    return(
        <div>
            <form method="post" action="/add">
                <input type="text" name="title" >Introduce un Titulo</input>
                <input type="text" name="author" >Introduce un Autor</input>
                <input type="text" name="text" >Introduce un Texto</input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Page;