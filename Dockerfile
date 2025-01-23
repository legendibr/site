ARG PYTHON_VERSION=3.9-slim-bullseye

FROM python:${PYTHON_VERSION}

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /code

WORKDIR /code

COPY requirements.txt /tmp/requirements.txt
RUN set -ex && \
    pip install --upgrade pip && \
    pip install -r /tmp/requirements.txt && \
    rm -rf /root/.cache/
COPY . /code

# ENV SECRET_KEY "eax9jo16xlcsDL7uuBlEoZWO2gCLgcHpKCUrxyFInMpFlxs8s1"
RUN python manage.py compilemd
RUN python manage.py collectstatic --noinput

EXPOSE 8000

# 1 worker, because 512 mb RAM
CMD ["gunicorn", "--bind", ":8000", "--workers", "1", "libr.wsgi"]
