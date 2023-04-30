from faker import Faker
import random

faker = Faker()

types = ["public", "private"]

counter = 0
with open("publisher.sql", "w") as f:
    for i in range(1000):
        values = []
        f.write("INSERT INTO publisher (publisher_id, name, founder, no_employees, revenue, type) VALUES")
        for j in range(1000):
            counter = counter + 1
            name = faker.company()
            founder = faker.name()
            type = random.choice(list(types))
            no_employees = random.randint(1,500000)
            revenue = faker.pricetag()
            values.append(f"({counter}, '{name}', '{founder}', '{no_employees}', '{revenue}', '{type}')")
        f.write(", ".join(values) + ";\n")
