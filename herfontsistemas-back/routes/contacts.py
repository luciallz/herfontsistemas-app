from flask import Blueprint,render_template

contacts=Blueprint('contacts',__name__)

@contacts.route("/")
def home():
    return render_template('index.html')

@contacts.route("/new")
def add_contact():
    return "guardando un contacto"

@contacts.route("/update")
def update():
    return "modificando un contacto"

@contacts.route("/delete")
def delete():
    return "eliminando un contacto"

@contacts.route("/about")
def about():
    return render_template('about.html')