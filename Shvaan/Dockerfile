FROM --platform=linux/x86_64 python:3.8.10
LABEL authors="prashant"

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN useradd --user-group --create-home --no-log-init --shell /bin/bash app

ENV HOMEDIR=/home/app/web

WORKDIR $HOMEDIR

COPY requirements.txt .

RUN apt-get update && apt-get -y install cmake protobuf-compiler
RUN pip install --upgrade pip

RUN pip install virtualenv
RUN pip install --default-timeout=500 --no-cache-dir -r requirements.txt
RUN apt-get install -y netcat

COPY . .

RUN chown -R app:app $HOMEDIR
RUN chmod +x /home/app/web/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/home/app/web/entrypoint.sh"]