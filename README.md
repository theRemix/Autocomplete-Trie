# Autocomplete-Trie

Trie data structure exercise


## Dictionary

The dataset is a giant json document that looks like this

```json
{
  "predominance" : {
    "word": "predominance",
    "wordset_id": "54bd57017265742391c2fe03",
    "meanings": [
      {
        "id": "54bd57017265742391c4fe03",
        "def": "the quality of being more noticeable than anything else",
        "speech_part": "noun",
        "synonyms": [
          "predomination"
        ]
      },
      {
        "id": "54bd57017265742391c5fe03",
        "def": "the state of being predominant over others",
        "speech_part": "noun",
        "synonyms": [
          "predomination"
        ]
      }
    ]
  }
}
```

### Utils

These scripts are meant to be run in the `data/` directory from this repo [github.com/wordset/wordset-dictionary](https://github.com/wordset/wordset-dictionary)

```sh
./utils/compress.js
```

Will read all json files, except for `misc.json`, compile them into a single json, compresses it, then saves it to `dictionary.json.gz`


```sh
./utils/decompress.js
```

Will read `dictionary.json.gz`, decompress it, parse the json, and displays a random entry in the dictionary.
