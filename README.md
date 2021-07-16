# Documentação da API de Compartilhar Músicas

## Usando essa API um usuário pode criar uma conta, postar músicas, e criar playlists para salvar suas músicas preferidas.

---

## Funcionalidades
- Cadastro
- Login
- Postar música
- Ver músicas postadas
- Ver música
- Apagar um post de música
- Criar playlist
- Ver playlists
- Ver músicas de uma playlist
- Adicionar música em uma playlist
- Remover música de uma playlist
- Apagar playlist

---

## - Cadastro
### POST "/users/signup"

* Body

        name = VARCHAR(64)
        nickname = VARCHAR(64)
        email = VARCHAR(64)
        password = VARCHAR(64)

        {
            "name": "Ana Maria",
            "nickname": "anama",
            "email": "anama@email.com",
            "password": "123456"
        }

* Resposta

        {
	        "token": "eyJhbGciOi..."
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Login
### POST "/users/login"

* Body

        login (email ou nickname) = VARCHAR(64)
        password = VARCHAR(64)

        {
            "login": "anama",
            "password": "123456"
        }

* Resposta

        {
	        "token": "eyJhbGciOi..."
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Postar música
### POST "/musics/post"

* Body

        title = VARCHAR(64)
        author = VARCHAR(64)
        releaseDate = dd/mm/aaaa
        file = URL
        genres = string[]
        album = VARCHAR(64)

        {
            "title": "Ta fête",
            "author": "Stromae",
            "releaseDate": "03/02/2014",
            "file": "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
            "genres": ["Pop"],
            "album": "Racine carrée"
        }

* Resposta

        {
	        "message": "Música postada com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Ver músicas postadas
### GET "/musics"

* Headers

        Authorization = token

* Resposta

        {
            "posts": [
                {
                    "id": "3d60906c-10ac-49e2-a9a4-d7d5c22d8083",
                    "title": "Ta Fête",
                    "author": "Stromae",
                    "releaseDate": "03/02/2014",
                    "file": "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
                    "genres": [
                        "Pop"
                    ],
                    "album": "Racine carrée",
                    "createdAt": "16/07/2021",
                    "updatedAt": "16/07/2021",
                    "postedBy": {
                        "id": "96a08b68-2d92-42eb-97dc-3cdcd5b31a92",
                        "nickname": "anama"
                    }
                }
            ]
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Ver música
### GET "/musics/:id"

* Params

        id (Id da música) = VARCHAR(64)

* Headers

        Authorization = token

* Resposta

        {
            "post": {
                "id": "3d60906c-10ac-49e2-a9a4-d7d5c22d8083",
                "title": "Ta Fête",
                "author": "Stromae",
                "releaseDate": "03/02/2014",
                "file": "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
                "genres": [
                    "Pop"
                ],
                "album": "Racine carrée",
                "createdAt": "16/07/2021",
                "updatedAt": "16/07/2021",
                "postedBy": {
                    "id": "96a08b68-2d92-42eb-97dc-3cdcd5b31a92",
                    "nickname": "anama"
                }
            }
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Apagar um post de música
### DELETE "/musics/remove/:id"

* Atenção
		
	    Um usuário só pode apagar um post que ele criou
        Um administrador pode apagar qualquer post

* Params

        id (Id da música) = VARCHAR(64)

* Headers

        Authorization = token

* Resposta

        {
            "message": "Música apagada com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Criar playlist
### Post "/playlists/create"

* Headers

        Authorization = token

* Body

        title = VARCHAR(64)

        {
            "title": "Francês"
        }

* Resposta

        {
            "message": "Playlist criada com sucesso!"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Ver playlists
### GET "/playlists"

* Headers

        Authorization = token

* Resposta

        {
            "playlists": [
                {
                    "id": "bf037ef8-b29b-4735-8874-482029bcc3dc",
                    "title": "Francês",
                    "createdAt": "16/07/2021",
                    "updatedAt": "16/07/2021"
                }
            ]
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Ver músicas de uma playlist
### GET "/playlists/:id"

* Params

        id (Id da playlist) = VARCHAR(64)

* Headers

        Authorization = token

* Resposta

        {
            "title": "Francês",
            "musics": [
                {
                    "id": "3d60906c-10ac-49e2-a9a4-d7d5c22d8083",
                    "title": "Ta Fête",
                    "author": "Stromae",
                    "releaseDate": "03/02/2014",
                    "file": "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
                    "genres": [
                        "Pop"
                    ],
                    "album": "Racine carrée",
                    "createdAt": "16/07/2021",
                    "updatedAt": "16/07/2021"
                }
            ]
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Adicionar música em uma playlist
### POST "/playlists/add"

* Headers

        Authorization = token

* Body

        musicId = VARCHAR(64)
        playlistId = VARCHAR(64)

        {
            "musicId": "3d60906c-10ac-49e2-a9a4-d7d5c22d8083",
            "playlistId": "bf037ef8-b29b-4735-8874-482029bcc3dc"
        }

* Resposta

        {
            "message": "Música adicionada com sucesso!"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Remover música de uma playlist
### POST "/playlists/remove"

* Headers

        Authorization = token

* Body

        musicId = VARCHAR(64)
        playlistId = VARCHAR(64)

        {
            "musicId": "3d60906c-10ac-49e2-a9a4-d7d5c22d8083",
            "playlistId": "bf037ef8-b29b-4735-8874-482029bcc3dc"
        }

* Resposta

        {
            "message": "Música removida com sucesso!"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Apagar playlist
### DELETE "/playlists/remove/:id"

* Atenção
		
	    Um usuário só pode apagar uma playlist que ele criou

* Params

        id (Id da playlist) = VARCHAR(64)

* Headers

        Authorization = token

* Resposta

        "message": "Playlist apagada com sucesso"

        OU

        { 
            "error": Mensagem de erro
        }
