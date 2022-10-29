from flask import Flask,request,Response
from routes.usuarios import usuarios
from routes.productos import productos
from routes.trabajadores import trabajadores
from flask import Flask, request, jsonify, make_response
#from flask_cors import CORS,cross_origin

app = Flask(__name__)
#CORS(app, resources={r"/*":{"origins":"http://localhost"}})


app.secret_key="Secret key"
app.register_blueprint(usuarios)
app.register_blueprint(productos)
app.register_blueprint(trabajadores)