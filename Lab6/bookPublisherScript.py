from faker import Faker
import random

faker = Faker()

languages = ["CHINESE",
             "MANDARIN",
             "SPANISH",
            "ENGLISH",
            "BENGALI",
            "HINDI",
            "PORTUGUESE",
            "RUSSIAN",
            "JAPANESE",
            "GERMAN",
            "CHINESE",
            "KOREAN",
            "FRENCH",
            "VIETNAMESE",
            "TAMIL",
            "TURKISH",
            "URDU",
            "POLISH",
            "ARABIC",
             "EGYPTIAN",
            "UKRAINIAN",
            "ITALIAN",
            "MALAYALAM",
            "KANNADA",
            "PANJABI",
            "ROMANIAN",
            "AZERBAIJANI",
            "FARSI",
            "MAITHILI",
            "SERBO-CROATIAN",
            "THAI",
            "DUTCH",
            "UZBEK",
            "MALAY",
            "AMHARIC",
            "INDONESIAN",
            "TAGALOG",
            "NEPALI",
            "SARAIKI",
            "HUNGARIAN",
            "CZECH",
            "GREEK",
            "MAGAHI",
            "BELARUSAN",
            "ZHUANG",
            "SOMALI",
            "MALAGASY",
            "BULGARIAN",
            "SWEDISH",
            "LOMBARD",
            "OROMO",
            "KAZAKH",
            "NIGERIAN",
            "HAITIAN CREOLE FRENCH",
            "AZERBAIJANI",
            "NAPOLETANO-CALABRESE",
            "HILIGAYNON",
            "KURMANJI",
            "SHONA"]

counter = 0
with open("book_publisher.sql", "w") as f:
    for i in range(10000):
        values = []
        f.write("INSERT INTO book_publisher (book_publisher_id,book_id,publisher_id,language,price) VALUES")
        for j in range(1000):
            counter = counter + 1
            book_id = random.randint(1,1000000)
            publisher_id = random.randint(1,1000000)
            language = random.choice(list(languages))
            price = random.uniform(5,250)
            values.append(f"({counter}, '{book_id}', '{publisher_id}', '{language}', '{price}')")
        f.write(", ".join(values) + ";\n")


