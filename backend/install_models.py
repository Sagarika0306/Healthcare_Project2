import argostranslate.package

# List of language models to download and install
language_models = {
    "Bengali": "https://www.argosopentech.com/argospm//packages/en_bn.argosmodel",
    "Hindi": "https://www.argosopentech.com/argospm//packages/en_hi.argosmodel",
    "Tamil": "https://www.argosopentech.com/argospm//packages/en_ta.argosmodel"
}

# Download and install models
from urllib.request import urlopen

for lang, url in language_models.items():
    model_file = f"{lang.lower()}.argosmodel"

    # Download the model file
    with urlopen(url) as response, open(model_file, "wb") as out_file:
        out_file.write(response.read())

    # Install the model
    argostranslate.package.install_from_path(model_file)
    print(f"{lang} model installed successfully!")
