from flask import Flask,request,Response
from routes.usuarios import usuarios
from routes.productos import productos
from routes.trabajadores import trabajadores
from flask import Flask, request, jsonify, make_response
from flask_login import LoginManager,login_user,logout_user,login_required
from flask_mail import Mail
from utils.db import mail
import smtplib,ssl

#from flask_cors import CORS,cross_origin

app = Flask(__name__,static_folder="../build",static_url_path="/")

#CORS(app, resources={r"/*":{"origins":"http://localhost"}})
login_manager=LoginManager()
login_manager.init_app(app)
login_manager.login_view='login'


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT']=587
app.config['MAIL_USE_TLS']=True
app.config['MAIL_USE_SSL']=False
app.config['MAIL_USERNAME']='lleraszarzal@gmail.com'
app.config['MAIL_PASSWORD']='cmusbbhhyxobytrp'
mail=Mail(app)

# mail=Mail(app)


app.secret_key="fMvFlCt2002"
app.register_blueprint(usuarios)
app.register_blueprint(productos)
app.register_blueprint(trabajadores)