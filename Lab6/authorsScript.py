from faker import Faker
import random

nationalities = {
    "Afghanistan":"Afghan",
    "Albania":"Albanian",
    "Algeria":"Algerian",
    "Argentina":"Argentinian",
    "Australia":"Australian",
    "Austria":"Austrian",
    "Bangladesh":"Bangladeshi",
    "Belgium":"Belgian",
    "Bolivia":"Bolivian",
    "Botswana":"Botswanan",
    "Brazil":"Brazilian",
    "Bulgaria":"Bulgarian",
    "Cambodia":"Cambodian",
    "Cameroon":"Cameroonian",
    "Canada":"Canadian",
    "Chile":"Chilean",
    "China":"Chinese",
    "Colombia":"Colombian",
    "Costa Rica":"Costa Rican",
    "Croatia":"Croatian",
    "Cuba":"Cuban",
    "Czech Republic":"Czech",
    "Denmark":"Danish",
    "Dominican Republic":"Dominican",
    "Ecuador":"Ecuadorian",
    "Egypt":"Egyptian",
    "El Salvador":"Salvadorian",
    "England":"English",
    "Estonia":"Estonian",
    "Ethiopia":"Ethiopian",
    "Fiji":"Fijian",
    "Finland":"Finnish",
    "France":"French",
    "Germany":"German",
    "Ghana":"Ghanaian",
    "Greece":"Greek",
    "Guatemala":"Guatemalan",
    "Haiti":"Haitian",
    "Honduras":"Honduran",
    "Hungary":"Hungarian",
    "Iceland":"Icelandic",
    "India":"Indian",
    "Indonesia":"Indonesian",
    "Iran":"Iranian",
    "Iraq":"Iraqi",
    "Ireland":"Irish",
    "Israel":"Israeli",
    "Italy":"Italian",
    "Jamaica":"Jamaican",
    "Japan":"Japanese",
    "Jordan":"Jordanian",
    "Kenya":"Kenyan",
    "Kuwait":"Kuwaiti",
    "Laos":"Lao",
    "Latvia":"Latvian",
    "Lebanon":"Lebanese",
    "Libya":"Libyan",
    "Lithuania":"Lithuanian",
    "Madagascar":"Malagasy",
    "Malaysia":"Malaysian",
    "Mali":"Malian",
    "Malta":"Maltese",
    "Mexico":"Mexican",
    "Mongolia":"Mongolian",
    "Morocco":"Moroccan",
    "Mozambique":"Mozambican",
    "Namibia":"Namibian",
    "Nepal":"Nepalese",
    "Netherlands":"Dutch",
    "New ZealandNew":"Zealand",
    "Nicaragua":"Nicaraguan",
    "Nigeria":"Nigerian",
    "Norway":"Norwegian",
    "Pakistan":"Pakistani",
    "Panama":"Panamanian",
    "Paraguay":"Paraguayan",
    "Peru":"Peruvian",
    "Philippines":"Philippine",
    "Poland":"Polish",
    "Portugal":"Portuguese",
    "Romania":"Romanian",
    "Russia":"Russian",
    "Saudi Arabia":"Saudi",
    "Scotland":"Scottish",
    "Senegal":"Senegalese",
    "Serbia":"Serbian",
    "Singapore":"Singaporean",
    "Slovakia":"Slovak",
    "South Africa":"South African",
    "South Korea":"Korean",
    "Spain":"Spanish",
    "Sri Lanka":"Sri Lankan",
    "Sudan":"Sudanese",
    "Sweden":"Swedish",
    "Switzerland":"Swiss",
    "Syria":"Syrian",
    "Taiwan":"Taiwanese",
    "Tajikistan":"Tajikistani",
    "Thailand":"Thai",
    "Tonga":"Tongan",
    "Tunisia":"Tunisian",
    "Turkey":"Turkish",
    "Ukraine":"Ukrainian",
    "United Arab Emirates":"Emirati",
    "United Kingdom":"British",
    "United States":"American",
    "Uruguay":"Uruguayan",
    "Venezuela":"Venezuelan",
    "Vietnam":"Vietnamese",
    "Wales":"Welsh",
    "Zambia":"Zambian",
    "Zimbabwe":"Zimbabwean",
}

faker = Faker()
counter = 0
with open("authors.sql", "w") as f:
    for i in range(1000):
        f.write("INSERT INTO authors (author_id,first_name,last_name,birth,death,nationality) VALUES")
        values = []
        for j in range(1000):
            counter += 1
            firstName = faker.first_name()
            lastName = faker.last_name()
            birth = faker.day_of_month() + " " + faker.month_name() + " " + faker.year()
            death = faker.day_of_month() + " " + faker.month_name() + " " + faker.year()
            nationality = random.choice(list(nationalities.values()))
            values.append(f"({counter}, '{firstName}', '{lastName}', '{birth}', '{death}', '{nationality}')")
        f.write(", ".join(values)+";\n")

