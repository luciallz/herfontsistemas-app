from flask import Flask
from routes.contacts import contacts

app = Flask(__name__)
app.secret_key="Secret key"
app.register_blueprint(contacts)
