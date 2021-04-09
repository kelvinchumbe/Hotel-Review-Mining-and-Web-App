import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer


# Dictionary mapping word contractions to their full words
contractions = {
    "ain't": "are not","'s":" is","aren't": "are not",
     "can't": "cannot","can't've": "cannot have",
     "'cause": "because","could've": "could have","couldn't": "could not",
     "couldn't've": "could not have", "didn't": "did not","doesn't": "does not",
     "don't": "do not","hadn't": "had not","hadn't've": "had not have",
     "hasn't": "has not","haven't": "have not","he'd": "he would",
     "he'd've": "he would have","he'll": "he will", "he'll've": "he will have",
     "how'd": "how did","how'd'y": "how do you","how'll": "how will",
     "I'd": "I would", "I'd've": "I would have","I'll": "I will",
     "I'll've": "I will have","I'm": "I am","I've": "I have", "isn't": "is not",
     "it'd": "it would","it'd've": "it would have","it'll": "it will",
     "it'll've": "it will have", "let's": "let us","ma'am": "madam",
     "mayn't": "may not","might've": "might have","mightn't": "might not",
     "mightn't've": "might not have","must've": "must have","mustn't": "must not",
     "mustn't've": "must not have", "needn't": "need not",
     "needn't've": "need not have","o'clock": "of the clock","oughtn't": "ought not",
     "oughtn't've": "ought not have","shan't": "shall not","sha'n't": "shall not",
     "shan't've": "shall not have","she'd": "she would","she'd've": "she would have",
     "she'll": "she will", "she'll've": "she will have","should've": "should have",
     "shouldn't": "should not", "shouldn't've": "should not have","so've": "so have",
     "that'd": "that would","that'd've": "that would have", "there'd": "there would",
     "there'd've": "there would have", "they'd": "they would",
     "they'd've": "they would have","they'll": "they will",
     "they'll've": "they will have", "they're": "they are","they've": "they have",
     "to've": "to have","wasn't": "was not","we'd": "we would",
     "we'd've": "we would have","we'll": "we will","we'll've": "we will have",
     "we're": "we are","we've": "we have", "weren't": "were not","what'll": "what will",
     "what'll've": "what will have","what're": "what are", "what've": "what have",
     "when've": "when have","where'd": "where did", "where've": "where have",
     "who'll": "who will","who'll've": "who will have","who've": "who have",
     "why've": "why have","will've": "will have","won't": "will not",
     "won't've": "will not have", "would've": "would have","wouldn't": "would not",
     "wouldn't've": "would not have","y'all": "you all", "y'all'd": "you all would",
     "y'all'd've": "you all would have","y'all're": "you all are",
     "y'all've": "you all have", "you'd": "you would","you'd've": "you would have",
     "you'll": "you will","you'll've": "you will have", "you're": "you are",
     "you've": "you have"
}

STOPWORDS = stopwords.words('english')

meaningless_words = ['hotel','stay','hilton','location','room','service','airport','staff','london','night','flight','overnight','rooms', 'experience','gatwick','ever','holiday','one', 'stayed','would','breakfast','bed','check','get','us','time','reception','terminal','bar','food','booked','walk','bathroom', 'really','early','could','also','restaurant','morning','even','floor','next','back','day','two', 'got','executive','south','shower','first','long','need','area', 'minutes','lounge','went','much','told','sleep', 'arrived','hotels','work','station','nights','beds', 'quite','bit','go','people','car']

for word in meaningless_words:
    STOPWORDS.append(word)


# Remove punctutation marks, stopwords, emojis, urls, convert to lowercase, expand contractions, hashtags, retweet
def preprocess_review(review):
    res_review = []
    lemmatizer = WordNetLemmatizer()

    for word in review.split():
        # Convert to lowercase
        word = word.lower()

        # Expand Contractions
        word = contractions.get(word, word)

        for w in word.split(" "):
            # Remove stopwords
            if w not in STOPWORDS:
                #                 w = splitter.split(w)

                # Remove punctuation
                w = re.sub(r'[^\w\s]', '', str(w))

                # Remove numbers
                w = re.sub(r'\d+', '', w)

                # Lemmatize the word
                w = lemmatizer.lemmatize(w, pos='v')

                if w != '':
                    res_review.append(w)

    return ' '.join([word for word in res_review])