
export default class APIService {
    static ModificarUsuario(id, body){
        return fetch(`http://127.0.0.1:5000/modificar/${id}`,{
            'method':'PUT',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(body)
          })
          .then(resp=>resp.json())
    }


    static InsertarUsuario(body){
        return fetch(`http://127.0.0.1:5000/nuevo`,{
            'method':'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(body)
          })
          .then(resp=>resp.json())
    }

    static BorrarUsuario(id){
        return fetch(`http://127.0.0.1:5000/borrar/${id}`,{
            'method':'DELETE',
            headers:{"Content-type": "application/json"},
          })
    }
}
