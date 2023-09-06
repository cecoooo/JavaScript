function loadRepos() {
	let username = document.getElementById('username').value;

	fetch(`https://api.github.com/users/${username}/repos`).
		then(handleResponce).
		then(handleData).
		catch(handleError);
}

function handleResponce(responce){
	if(responce.ok == false){
		console.log('Request has error!');
		console.log(responce.status, responce.statusText);
	}
	return responce.json;
}

function handleData(data){
	const list = document.getElementById('repos');
	
	for(let repo of data){
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name;
		li.appendChild(a);
		list.appendChild(li);
	}
}

function handleError(error){
	console.log(error);
}