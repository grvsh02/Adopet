<img src="https://github.com/grvsh02/Adopet/blob/main/marjrah/src/assets/Adopet%20logo%20pink.png?raw=true">

## Aim🎯
Our aim is to provide an `uplifted life` of the untended animals on the streets through our technological innovations and our `wanting to help` personality gives a higher motivation to do so! 

We do this by arranging `adoption awareness` on our platform. These adoption awareness invites rescuers from all over the city to bring their rescued animals or and be able to meet with so many potential adopting families. All the funds that are provided to us on our website as `donations`, go towards resources of these voiceless creatures.

## Table of Content 
- [Getting Started](#getting-started)
- [Modules](#modules)
- [Technology Stack used](#technology-stack-used)
- [The Team](#the-team)
- [Documentation](#documentation)
## Getting Started
Taking the very first step, you would be needed to clone the `bhoomi_backend` repository using git:

```bash
git clone https://github.com/grvsh02/homezy_backend.git
```

A standard `requirements.txt` file has been provided, which contains all python dependencies required to run the plateform:

```bash
pip install -r requirements.txt
```

Along with it is a `sample.env` file, which names all supported environment variables. You are expected to make `.env` file with your own actual values, including all required variables.
To build virtual environment for the directory:

```bash
python -m venv env
```

The last step is activating vitual environment, run the command below
```bash
env/scripts/activate
```

To begin with, first we must consider creating a db in our `PostgreSQL` by running:

```bash
sudo su - postgres
psql
CREATE DATABASE myproject;
CREATE USER myprojectuser WITH PASSWORD 'password';
ALTER ROLE myprojectuser SET client_encoding TO 'utf8'
ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myprojectuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
\q
exit
```

To get started with the backend, you would need to also have a `PostgreSQL` database running. The database parameters then need to be specified in your `.env` file.

When using the platform for the first time, you need to initialize the database by running the following commands:

```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py fakedb
```

You would need to run `migrate` command everytime there is a change in the database schema. Which you can spot by seeing a new file in the `migrations` folder in any of the sub-apps.

After you make changes to the database schema (models.py), you need to run `makemigrations` to create the migration file, which needs to be committed with your changes.
This migration file is then used by everyone to apply the changes to their database by the `migrate` command.

To finally run your development server, use:

```bash
python manage.py runserver
```

Which will start your application at `http://localhost:8000/`.

## Modules
- Complaint Box 📮
- Home 
- Blogs 
- About Us
- Count of no of animals rescued 

## Technology Stack used

- Frontend - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- Backend - ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white) , Stawberry
- Database - ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## The Team
The founders of AdoPet are a 4 membered team with a `vision` to `create a better world for the voiceless creatures` that are often left on the streets or are left out by incapable families .
- [Gaurav Sharma](https://www.github.com/grvsh02)
- [Prashant Gehlot](https://www.github.com/Prashant9683)
- [Yash Katyan](https://github.com/yakatyansh)
- [Saumy Shukla](https://github.com/saumy4854)

## Documentation

- [Django](https://docs.djangoproject.com/en/4.1/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Strawberry](https://strawberry.rocks/docs)

