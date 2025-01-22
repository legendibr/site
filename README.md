<!-- Directory structure

`libr/` is the root django app
`info/` contains the static pages such as index
`education/` contains the teaching platform
`user_management/` contains authentication code
`social/` contains social features, like commenting -->

# LegendIBR

## Introduction

LegendIBR (hereinafter referred to as LIBR) is a website intended for students to learn math knowledge on different topics based on their courses at school. The topics include algebra and geometry, as well as calculus that might be added in the future. 

Besides teaching, LIBR allows the users to freely discuss their thoughts under a lesson, and even to reply. Thus, if any were confused by a question, they could ask below. 

## Technical details

LIBR was made mainly with Python (backend) and HTML (frontend). To organize the code and enhance its reusability, we used Django, which is known for its readability and high efficiency in connecting the backend to the frontend. 

Since the website contains multiple layers of functionality, such as the home page, the home page for math, and the lessons, we used templates and the “extends” tag in Django to structure our files. It would inherit the elements based on the program, which significantly decreases the amount of code we have to write. 

For example, the navigation bar at the top exists on all pages. Therefore, with it written in “base.html”, and being extended by other pages, we would no longer need to rewrite the code again. 

The lessons are stored in the Markdown format. There’s a custom workflow that compiles the markdown to HTML, ensuring support for LaTeX equations. Each markdown page is mapped to a database entry, meaning that we can store information including lesson id, title, and file path. This information allows the URL router to dynamically load markdown files. It also means that we can include a slug in the URL.

## How does this help SAS

LIBR could help students in many aspects, such as giving a better understanding of complex topics, providing comprehensive notes and explanations, and free discussions under each lesson. 

At school, students are encouraged to take math every school year, and math is also one of the most important subjects for application, so it is essential to be good at it. Yet, besides what students learn and receive from school, it is difficult to prepare for tests or to preview the future content. 

It is undeniable that there are already a lot of free study resources available online like Khan Academy. However, none were designed specifically for SAS students, which makes it harder to follow and practice based on what will be tested. 
Luckily, LIBR was made by students, making it the perfect choice for students at SAS. By learning on this website, students can gain a more comprehensive understanding of their topic, which makes it easier for them to do good in their class. 


## Running

**Install dependencies**

`pip install -r requirements.txt`

**Configuration**

Make a create a file called `.env`

It needs the fields shown in `.env.example`, corresponding to the relevant Django settings.

When `DEBUG=False`, static files won't be served. 

**Before running**
```bash
python manage.py compilemd
python manage.py collectstatic
```