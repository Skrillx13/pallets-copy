---
layout: page
title: Flask
---

<section style="text-align: center;">
    <img style="height: 6em;" src="/img/flask-name.png">
</section>

<section style="text-align: center;">
    <a href="https://flask.palletsprojects.com" target="_blank">Documentation</a>
</section>

Flask is a lightweight [WSGI](https://peps.python.org/pep-3333/) web application micro framework. it was designed with simplicity in mind, being quick and easy to use. **However**, it has the ability to scale up to massive, complex applications, still making it a popular choice amongst experienced developers.

## Quickstart

``` py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```