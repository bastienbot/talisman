---
layout: home
---

**Talisman** is a JavaScript library collecting series of algorithms related to the three following domains:

* [Fuzzy logic & fuzzy matching](https://en.wikipedia.org/wiki/Approximate_string_matching)
* [Natural Language Processing (NLP)](https://en.wikipedia.org/wiki/Natural_language_processing)
* [Machine learning](https://en.wikipedia.org/wiki/Machine_learning)

## Installation

You can install **Talisman** through npm:

```bash
npm install talisman
```

## Source code

The library's source code can be found on its Github [repository]({{ site.url }}).

## List of available modules

<span class="undocumented">Grey</span> modules are currently undocumented - I am working on it :).

<div class="modules-list">
  <ul>
    <li>
      <a href="{{ site.baseurl }}/clustering">clustering</a>
      <ul>
        <li>&middot; <em><a href="{{ site.baseurl }}/clustering#k-means">k-means</a></em></li>
      </ul>
    </li>
    <li>
      <a href="{{ site.baseurl }}/metrics">metrics</a>
      <ul>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#cosine">cosine</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#dice">dice</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#euclidean">euclidean</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#hamming">hamming</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#jaccard">jaccard</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#jaro">jaro</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#jaro-winkler">jaro-winkler</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#levenshtein">levenshtein</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#manhattan">manhattan</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#mra">mra</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#overlap">overlap</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#sorensen">sorensen</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/metrics#tversky">tversky</a></em></li>
      </ul>
    </li>
    <li>
      <a href="{{ site.baseurl }}/phonetics">phonetics</a>
      <ul>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#caverphone">caverphone</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#cologne">cologne</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#double-metaphone">doubleMetaphone</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#metaphone">metaphone</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#mra">mra</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#nysiis">nysiis</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/phonetics#soundex">soundex</a></em></li>
      </ul>
    </li>
    <li class="undocumented">
      <a href="{{ site.baseurl }}/stats">stats</a>
      <ul>
        <li>&middot; <em><a href="{{ site.baseurl }}/stats#frequencies">frequencies</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/stats#ngrams">ngrams</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/stats#tfidf">tfidf</a></em></li>
      </ul>
    </li>
    <li>
      <a href="{{ site.baseurl }}/stemmers">stemmers</a>
      <ul>
        <li>&middot; <em><a href="{{ site.baseurl }}/stemmers#lancaster">lancaster</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/stemmers#lovins">lovins</a></em></li>
        <li>&middot; <em><a href="{{ site.baseurl }}/stemmers#porter">porter</a></em></li>
        <li>
          <a href="{{ site.baseurl }}/stemmers/latin">latin</a>
          <ul>
            <li>&middot; <em><a href="{{ site.baseurl }}/stemmers/latin#schinke">schinke</a></em></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="undocumented">
      <a href="{{ site.baseurl }}/tokenizers">tokenizers</a>
      <ul>
        <li>
          <a href="{{ site.baseurl }}/tokenizers/sentences">sentences</a>
          <ul>
            <li>&middot; <em><a href="{{ site.baseurl }}/tokenizers/sentences#naive">naive</a></em></li>
          </ul>
        </li>
        <li>
          <a href="{{ site.baseurl }}/tokenizers/words">words</a>
          <ul>
            <li>&middot; <em><a href="{{ site.baseurl }}/tokenizers/words#naive">naive</a></em></li>
            <li>&middot; <em><a href="{{ site.baseurl }}/tokenizers/words#treebank">treebank</a></em></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

## Contribution

Contributions are of course welcome :)

Be sure to lint & pass the unit tests before submitting your pull request.

```bash
# Cloning the repo
git clone git@github.com:Yomguithereal/talisman.git
cd talisman

# Installing the deps
npm install

# Running the tests
npm test

# Linting the code
npm run lint
```

## License

[MIT]({{ site.url }}/blob/master/LICENSE.txt)