FROM python:3-slim

WORKDIR /app
COPY app .

RUN pip install -r requirements.txt

ENV PORT 80
EXPOSE 80

ENTRYPOINT ["python", "app.py"]
