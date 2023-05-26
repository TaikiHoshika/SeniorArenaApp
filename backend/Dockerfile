FROM python:3.9
ENV PYTHONBUFFERED 1

WORKDIR /backend

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .
EXPOSE 3030
CMD python3 ./test/manage.py runserver 0.0.0.0:3030