from flask import Flask, request, jsonify
import argostranslate.translate

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data['text']
    target_lang = data['target_lang']

    # Find the target language
    installed_languages = argostranslate.translate.get_installed_languages()
    from_lang = installed_languages[1]  # Assume input is in Bengali for now
    to_lang = next((lang for lang in installed_languages if lang.name.lower() == target_lang.lower()), None)

    if not to_lang:
        return jsonify({"error": "Target language not found"}), 400

    translated_text = from_lang.translate(text, to_lang)
    return jsonify({"translated_text": translated_text})

if __name__ == '__main__':
    app.run(debug=True)
