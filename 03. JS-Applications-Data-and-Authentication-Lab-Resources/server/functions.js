init();

function init(){
    document.getElementById('load').addEventListener('click', async () => {
        const comments = await getComment();
        displayComments(comments);
    });
    document.getElementById('comment-form').addEventListener('submit', onPost)
    document.getElementById('comments').addEventListener('click', onCommentClick);
    
}

async function onPost(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const content = formData.get('content');
    await postComment({name, content});
}

function displayComments(comments){
    const list = document.getElementById('comments');
    list.replaceChildren(...comments.map(createCommentCard))
}

function createCommentCard(comment){
    const element = document.createElement('article');
    element.innerHTML = `<header><h3>${comment.name}</h3></header>
    <main><p>${comment.content}</p>
    <button id = 'delete'>Delete</button></main>`;
    element.id = comment.id;
    return element;
}

async function getComment(){
    const respose = await fetch("http://localhost:3030/jsonstore/comments");
    const data = await respose.json();
    return Object.values(data);
}

async function postComment(comment){

    const response = await fetch("http://localhost:3030/jsonstore/comments", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment) 
    });
    const data = await response.json();
    return data;
}

function onCommentClick(ev){
    if(ev.target.tagName == 'BUTTON'){
        const choice = confirm('Are you sure you want to delete this comment?');
        if(choice){
            const commentId = ev.target.parentElement.id;
            deleteComment(commentId);
        }
    }
}

async function deleteComment(id){
    const responce = await fetch("http://localhost:3030/jsonstore/comments/"+id,{
        method: 'delete'
    });

    document.getElementById(id).remove();
}