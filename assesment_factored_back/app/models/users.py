from app.db import db,ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    # Relación uno a uno
    employee = db.relationship("Employee", backref="user", uselist=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password


class UserSchema(ma.Schema):
    class Meta: 
        fields = ("id", "username", "password", "employee")

    employee = ma.Nested("EmployeeSchema", exclude=("user",))

class UserSchemaWithoutEmployee(ma.Schema):
    class Meta:
        fields = ("id", "username", "password")

user_schema = UserSchema()
users_schema = UserSchema(many=True)
user_schema_without_employee = UserSchemaWithoutEmployee()
users_schema_without_employee = UserSchemaWithoutEmployee(many=True)
