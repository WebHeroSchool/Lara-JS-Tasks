//http://0.0.0.0:8000/?username=Lara_Aloha

var searchParams = new URLSearchParams(window.location.search);
	if (searchParams.has('username') && userName !== undefined) {
var userName = searchParams.get('username');

fetch('https://api.github.com/users/'+userName)
	.then(res => res.json())
	.then(json => {
		if (json.message == "Not Found") {
			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerText = "Информация о пользователе не доступна"; 
		} else {
			//	div.innerHTML = json.avatar_url, json.name, json.bio, json.url
			
			var h1 = document.createElement('h1');
			document.body.appendChild(h1);
			h1.innerHTML = json.name;

			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerHTML = json.bio;

			var a = document.createElement('a');
			document.body.appendChild(a);
			a.innerHTML = 'BIO URL';
			a.href = json.url;

			var img = document.createElement('img');
			document.body.appendChild(img);
			img.src = json.avatar_url;
		}
	})
} else {
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.innerText = "Добавьте в URL: {адрес страницы}?username={имя пользователя}"; 
}

		//	.catch(function(error) { 
			//	console.log(error); });
