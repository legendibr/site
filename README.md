# LIBR

Directory structure

`libr/` is the root django app
`info/` contains the static pages such as index
`education/` contains the teaching platform
`user_management/` contains authentication code
`social/` contains social features, like commenting


## Deploying

`libr/settings.py` takes `DEBUG`, `SECRET_KEY` and `ALLOWED_HOSTS` from a `.env` file.

**Example `.env`**

```
DEBUG=False
SECRET_KEY="obviously-not-secret-keys"
ALLOWED_HOSTS='["example.com"]' # Parsed as JSON, so no single quotes
```