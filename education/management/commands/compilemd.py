import mdtex2html
from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify
from education.models import PageLookupModel
from pathlib import Path
from pyquery import PyQuery as pq

TEMPLATE_FMT = """
{{% extends "{0}" %}}
{{% block subject_heading %}}
    {1}
{{% endblock subject_heading %}}
{{% block subject_title %}}
    {2}
{{% endblock subject_title %}}
{{% block education_content %}}
    {3}
{{% endblock education_content %}}
"""

def make_fmt(base, header, subject, contents):
    return TEMPLATE_FMT.format(base, header, subject, contents).replace("\n", "")


def get_new_path(dir_name, start_path):
    return Path(*start_path.parts[start_path.parts.index(dir_name) + 1 :])


class Command(BaseCommand):
    help = "Compile the markdown files to templates"

    def handle(self, *args, **kwargs):
        # Remove all the old pages
        PageLookupModel.objects.all().delete()

        base = "education/base-content.html"

        # get all markdown file in ./contents
        path = Path("./education/contents").resolve()
        files = path.glob("**/*.md")
        for file in files:
            # the name of each markdown file is it's id within each subject
            id_ = file.stem

            # md -> html
            with open(file) as f:
                #html = md.convert(f.read())
                html = mdtex2html.convert(f.read())

            doc = pq(html)

            # extract title, convert to slug
            header = doc("h1").eq(0)
            slug = slugify(header.text())

            contents = header.nextAll()

            # if "learn" in file.parts:
            #     base = "education/learn/learn.html"
            # else:
            #     raise Exception(f"Unable to find base for file {file}")

            # use template system to format markdown as (title, contents)
            subject = file.parts[-2].capitalize()
            t = make_fmt(base, header, subject ,contents)
            # correct_path = path_up_to_exclusive()
            new_path = Path("./education/templates/education") / get_new_path(
                "contents", file
            )
            new_path = new_path.with_suffix(".html")
            new_path = new_path.resolve()

            new_path.parent.mkdir(parents=True, exist_ok=True)
            print(f"Writing to {new_path}")
            with open(new_path, "w") as f:
                f.write(t)

            # path to template
            template_path = get_new_path("templates", new_path)
            # url used
            url_base_path = get_new_path("education", template_path).parent
            m = PageLookupModel(
                page_id=id_,
                slug=slug,
                template_path=template_path,
                url_base_path=url_base_path,
            )
            m.save()

        print("Complete")
        # put file in correct path in templates/education
        # create model for file, fields = (id=id, slug=slug, path=path)
        # output file name = <id>.html
