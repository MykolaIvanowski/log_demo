from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.get("/login")
def login_page():
    return render_template("login.html")

@app.get("/register")
def register_page():
    return render_template("register.html")

@app.post("/login")
def login():
    print("LOGIN:", request.form)
    return "Logged in (demo)"

@app.post("/register")
def register():
    print("REGISTER:", request.form)
    return redirect("/login")

@app.get("/")
def index():
    return redirect("/login")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
