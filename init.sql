INSERT INTO user (username, password) VALUES
('user1', '$2a$12$EN853yhvOp3b8hVT33Vd6eBpD1Ku4cm.AyKXWtbnEDdsLMHVwjo92'),
('user2', '$2a$12$i7dYn2mIpAQL9c.AUZ/.G.tP/IMWvEoCfBuikc9s8oTaM20T6Hg/e'),
('user3', '$2a$12$wu9OXiilI1MTL0q2r7sj5ugBtfXvZYw/McZ.CcpSBhsd1xCFHrg/K'),
('user4', '$2a$12$nQJqCQOSXPkHgof2c4v0HeVIyJ/C2qZToPua0Ln9GcFVW488saHTK'),
('user5', '$2a$12$6HHNLIPbHrcTbzNTPKjCYef2PyXGHY2/6UrjoJpOjj/mYgnQW/ZaS'),
('user6', '$2a$12$01k9rG0CaxA6DDsBzMrOD.mZ0T0FHp5lD8mSkKpoAxX4Ul3DH6oH.'),
('user7', '$2a$12$KJX/crww1e/JUEInoCx9g.jRInAio8WhuXvbI/aUDahnD/l6bcLgC'),
('user8', '$2a$12$q3lHkZeF0kp5TLrUMMxlXurtlnHclxYAOYapy1azPYbmWnag/ZQFa'),
('user9', '$2a$12$4VazBFwxhbLvp/xg1olL1.4UILNK29nKv9LIMNGTNQyAwODBOBit6'),
('user10', '$2a$12$g8xj.OpIgAhlAZOFEqj0VeHpNfAgJAqQhVWDT472L1Px5PsJmqBg.'),
('user11', '$2a$12$kqWC6iAaKDnmv/8KdG6WiOaCpTTLuns6tD6MvIe9nv6JHbIeguzFS'),
('user12', '$2a$12$ytK0pMNzErNnGv8NDXL37OUVxj/randKnAX4H/pJCS9J5WrZ2Yplu'),
('user13', '$2a$12$Gyj6nDdSSx8DHYb71YEXNu5lEFWZ9VO22uoxesQJokRTbD.8gZ1JW'),
('user14', '$2a$12$NLbXzQS5MVqbBa1JkUVbLOJVohXdg53IroPt7NsllcT4yvdMfKIXm'),
('user15', '$2a$12$6DRqQsrbetPVr3mTl0wFAeRz3BICarWCvtJm/cntkDqdhEU5CCD7K'),
('user16', '$2a$12$b/mddFa2.ZMF1b30IaHg1.XraG.7JOVeSnfO7NIfSrKvCD32pdowC'),
('user17', '$2a$12$M8E23dgF7soNzjq7.yu90eGGX0zY11wZv1NHPVRxVcYFT0UTg6KnS'),
('user18', '$2a$12$1jo.k2nz5fHpvfUrd1P1UeflK8E4odaFCC7w/2eHFHXxgyQNZXbs.'),
('user19', '$2a$12$NHOINK7rLcgXP0pCzMh83OmhoDshyROBDesztpEvzQPpL3prE7Fp6'),
('user20', '$2a$12$az7ZnNRjTMPzbvYsKu5KiuC1kEymtypmOR8GV1MX719MOwJBaM5jW');

INSERT INTO employee (name, email, department, gender, user_id) VALUES
('John Doe', 'john.doe@example.com', 'Sales', 'Male', 1),
('Jane Smith', 'jane.smith@example.com', 'Marketing', 'Female', 2),
('Alice Johnson', 'alice.johnson@example.com', 'IT', 'Female', 3),
('Bob Brown', 'bob.brown@example.com', 'HR', 'Male', 4),
('Charlie Black', 'charlie.black@example.com', 'Sales', 'Male', 5),
('Diana White', 'diana.white@example.com', 'Marketing', 'Female', 6),
('Edward Green', 'edward.green@example.com', 'IT', 'Male', 7),
('Fiona Blue', 'fiona.blue@example.com', 'HR', 'Female', 8),
('George Gray', 'george.gray@example.com', 'Sales', 'Male', 9),
('Hannah Red', 'hannah.red@example.com', 'Marketing', 'Female', 10),
('Ian Yellow', 'ian.yellow@example.com', 'IT', 'Male', 11),
('Jack Pink', 'jack.pink@example.com', 'HR', 'Male', 12),
('Kara Purple', 'kara.purple@example.com', 'Sales', 'Female', 13),
('Liam Orange', 'liam.orange@example.com', 'Marketing', 'Male', 14),
('Mia Brown', 'mia.brown@example.com', 'IT', 'Female', 15),
('Noah Black', 'noah.black@example.com', 'HR', 'Male', 16),
('Olivia White', 'olivia.white@example.com', 'Sales', 'Female', 17),
('Paul Green', 'paul.green@example.com', 'Marketing', 'Male', 18),
('Quinn Blue', 'quinn.blue@example.com', 'IT', 'Male', 19),
('Rachel Gray', 'rachel.gray@example.com', 'HR', 'Female', 20);


INSERT INTO skills (name, porcentage, employee_id) VALUES
('Python', 85, 1),
('SQL', 90, 1),
('Java', 75, 1),
('Spark', 80, 1),
('JavaScript', 95, 1),

('Python', 88, 2),
('SQL', 92, 2),
('Java', 85, 2),
('Spark', 79, 2),
('JavaScript', 96, 2),

('Python', 80, 3),
('SQL', 85, 3),
('Java', 90, 3),
('Spark', 88, 3),
('JavaScript', 87, 3),

('Python', 75, 4),
('SQL', 80, 4),
('Java', 85, 4),
('Spark', 90, 4),
('JavaScript', 89, 4),

('Python', 92, 5),
('SQL', 95, 5),
('Java', 88, 5),
('Spark', 85, 5),
('JavaScript', 80, 5),

('Python', 78, 6),
('SQL', 82, 6),
('Java', 79, 6),
('Spark', 87, 6),
('JavaScript', 91, 6),

('Python', 81, 7),
('SQL', 88, 7),
('Java', 85, 7),
('Spark', 83, 7),
('JavaScript', 90, 7),

('Python', 89, 8),
('SQL', 92, 8),
('Java', 87, 8),
('Spark', 90, 8),
('JavaScript', 88, 8),

('Python', 76, 9),
('SQL', 80, 9),
('Java', 82, 9),
('Spark', 85, 9),
('JavaScript', 87, 9),

('Python', 90, 10),
('SQL', 93, 10),
('Java', 89, 10),
('Spark', 88, 10),
('JavaScript', 91, 10),

('Python', 85, 11),
('SQL', 87, 11),
('Java', 90, 11),
('Spark', 88, 11),
('JavaScript', 86, 11),

('Python', 82, 12),
('SQL', 88, 12),
('Java', 86, 12),
('Spark', 90, 12),
('JavaScript', 85, 12),

('Python', 87, 13),
('SQL', 89, 13),
('Java', 85, 13),
('Spark', 91, 13),
('JavaScript', 88, 13),

('Python', 90, 14),
('SQL', 85, 14),
('Java', 89, 14),
('Spark', 87, 14),
('JavaScript', 88, 14),

('Python', 81, 15),
('SQL', 88, 15),
('Java', 84, 15),
('Spark', 89, 15),
('JavaScript', 90, 15),

('Python', 88, 16),
('SQL', 90, 16),
('Java', 87, 16),
('Spark', 85, 16),
('JavaScript', 91, 16),

('Python', 79, 17),
('SQL', 84, 17),
('Java', 88, 17),
('Spark', 90, 17),
('JavaScript', 85, 17),

('Python', 91, 18),
('SQL', 93, 18),
('Java', 89, 18),
('Spark', 88, 18),
('JavaScript', 92, 18),

('Python', 83, 19),
('SQL', 86, 19),
('Java', 90, 19),
('Spark', 87, 19),
('JavaScript', 89, 19),

('Python', 85, 20),
('SQL', 88, 20),
('Java', 87, 20),
('Spark', 90, 20),
('JavaScript', 91, 20);
