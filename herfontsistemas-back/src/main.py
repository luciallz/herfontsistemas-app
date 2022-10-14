import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request

#CREAR PRODUCTOS
@app.route('/insertar', methods=['POST'])
def crear_producto():
    try:        
        _json = request.json
        _id = _json['id']
        _nproducto =_json['n_producto']
        _descripcion = _json['descripcion']
        _cantidad = _json['cantidad']
        _imagen = _json['imagen']
        _precio = _json['precio']	
        if _id and _nproducto and _descripcion and _cantidad and _imagen and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)		
            sqlQuery = "INSERT INTO productos(id, n_producto, descripcion, cantidad, imagen, precio)  VALUES(%s, %s, %s, %s, %s, %s)"
            bindData = (_id, _nproducto, _descripcion, _cantidad, _imagen, _precio,)            
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('Producto añadido a la lista!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

#  LISTAR PRODUCTOS
@app.route('/listado')
def listado_productos():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        #cursor.execute("SELECT `id`, `n_producto`, `descripcion`, `cantidad`, `imagen`, `precio` FROM `productos`")
        cursor.execute("SELECT id, n_producto, descripcion, cantidad, imagen, precio FROM productos")
        lista_productos = cursor.fetchall()
        respone = jsonify(lista_productos)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()  


#FILTRAR POR ID
@app.route('/filtrado/<int:filtrar_id>')
def filtrado_details(filtrar_id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM productos WHERE id=%s", filtrar_id)
        filtrarRow = cursor.fetchone()
        respuesta = jsonify(filtrarRow)
        respuesta.status_code = 200
        return respuesta
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

#MODIFICAR PRODUCTOS
@app.route('/modificar', methods=['PUT'])
def modificar_producto():
    try:
        _json = request.json
        _id = _json['id']
        _nproducto =_json['n_producto']
        _descripcion = _json['descripcion']
        _cantidad = _json['cantidad']
        _imagen = _json['imagen']
        _precio = _json['precio']	
        if _id and _nproducto and _descripcion and _cantidad and _imagen and _precio and request.method == 'PUT':			
            sqlQuery = "UPDATE productos SET id= %s,n_producto=%s,descripcion=%s,cantidad=%s,imagen=%s,precio=%s WHERE id=%s"
            bindData = (_id, _nproducto, _descripcion, _cantidad, _imagen, _precio,_id)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('Employee updated successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

#ELIMINAR PRODUCTOS
@app.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_producto(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM productos WHERE id =%s", id)
		conn.commit()
		respone = jsonify('Producto borrado exictosamente!')
		respone.status_code = 200
		return respone
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
        
       
@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone
        
if __name__ == "__main__":
    app.run(debug=True)