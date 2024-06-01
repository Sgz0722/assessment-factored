from flask import Flask
from app.extensions import cors
from app.config import Config
from app.db import db, ma
from app.api import api_bp
from app.api.usersApi import user_api


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})
    db.init_app(app)
    ma.init_app(app)

    with app.app_context():
        from app.models.employee import Employee
        from app.models.users import User
        from app.models.skills import Skills

        try:
            db.create_all()
        except Exception as e:
            print(e)

    app.register_blueprint(api_bp)
    app.register_blueprint(user_api)
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
