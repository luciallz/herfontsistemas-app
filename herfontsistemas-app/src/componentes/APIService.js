
export default class APIService {
    static ModificarUsuario(id, body){
        return fetch(`http://127.0.0.1:5000/modificar/${id}`,{
            'method':'PUT',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(body)
          })
          .then(resp=>resp.json())
    }
}