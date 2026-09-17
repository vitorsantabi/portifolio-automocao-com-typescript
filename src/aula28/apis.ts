const BASE_URL = 'https://jsonplaceholder.typicode.com';
//Definir contrato da API
type Post = {
    userId: number;
    id?: number;
    title: string;
    body: string;
};
type Comment = {
    postId: number;
    id?: number;
    name: string;
    email: string;
    body: string;
};

//  GET /POSTS
async function listarPosts() {
    console.log(' -- 1°  GET /POSTS --');
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();

    console.log(`Status: ${res.status}`);
    console.log(`Dados: ${JSON.stringify(dados.length) , dados[0]?.title}`);
}

async function chamarReqs() {
    await listarPosts();
}

chamarReqs();

// GET /POSTS/1
async function listarPostPorId(id: number) {
    console.log(' -- 2°  GET /POSTS/1 --');
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();

    console.log(`Status: ${res.status}`);
    console.log(`Dados: ${JSON.stringify(dados)}`);
}

async function chamarReqs1() {
    await listarPosts();
    await listarPostPorId(1);
}

chamarReqs1();
// GET /POSTS/1/COMMENTS
async function listarComentariosPorPostId(postId: number) {
    console.log(' -- 3°  GET /POSTS/1/COMMENTS --');
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Comment[] = await res.json();
    
    console.log(`Status: ${res.status}`);
    console.log(`Dados: ${JSON.stringify(dados.length) , dados[0]?.name}`);
}   
