from app.models.users import UserSchema
from app.db import db,ma


class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    department = db.Column(db.String(80), nullable=False)
    gender = db.Column(db.String(10), nullable=False)

    # Relación uno a uno
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    # Relación uno a muchos
    skills = db.relationship("Skills", backref="employee", lazy=True)

    def __init__(self, name, email, department,gender, user_id):
        self.name = name
        self.email = email
        self.department = department
        self.gender = gender
        self.user_id = user_id


class EmployeeSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "email", "department","gender", "user", "skills")

    user = ma.Nested(UserSchema, exclude=("employee",))
    skills = ma.Nested("SkillsSchema", many=True)


employee_schema = EmployeeSchema()
employees_schema = EmployeeSchema(many=True)
