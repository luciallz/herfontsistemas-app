from flask import Flask,request,Response
from routes.usuarios import usuarios
from routes.productos import productos
from routes.trabajadores import trabajadores
from flask import Flask, request, jsonify, make_response
from flask_login import LoginManager,login_user,logout_user,login_required

#from flask_cors import CORS,cross_origin

app = Flask(__name__)
#CORS(app, resources={r"/*":{"origins":"http://localhost"}})
login_manager=LoginManager()
login_manager.init_app(app)
login_manager.login_view='login'

app.secret_key="Secret key"
app.register_blueprint(usuarios)
app.register_blueprint(productos)
app.register_blueprint(trabajadores)