# Hotel Review Mining and Web App
Link to deployed application

## Introduction

Online review platforms out of the social media scope are now on the rise. Platforms such as TripAdvisor, Booking.com, Expedia and Hotels.com are now among the largest players in online reviews about hotel accommodations, airlines and restaurants. This creates a huge opportunity for hoteliers to gather these reviews, determine what people feel about their products and constantly improve their products. The reason why such reviews are a good data source for customer’s sentiments is because they are unsolicited thus customers express their true feelings about a brand, product or service.

Opinion mining will allow hoteliers to gather such reviews online and determine the customer’s sentiment i.e. whether they were satisfied with a hotel’s service and to what extent they were satisfied. The common way of expressing this is by using star ratings i.e. 1 star indicating the customer was very dissatisfied while a 5 star rating indicating that the customer was very satisfied with a hotel’s services.

## Objectives

1.  Collection and Preparation
- Scrap TripAdvisor website for reviews on a particular hotel
2. Exploratory Data Analysis and Feature Engineering
- Analyse scrapped reviews to understand how customers feel about a
business
- Preprocess and create new features from the data to train a machine
learning model
3. Modelling and Evaluation
- Train a machine learning model (Neural Network) on the created
features on how to classify a customer’s review about the hotel
4. Model Deployment
- Create a simple web application to deploy the model and allow users to
easily identify the sentiment in a review

## Technical Requirements
1. Web scraping on TripAdvisor’s website
- Scrapy
- Python

2. Data Analysis and Modelling
- Pandas
- Numpy
- Matplotlib
- Seaborn
- NLTK
- Scikit-Learn
- Keras
- Tensorflow

3. Model Deployment
- Streamlit
- Heroku

## Analysis Results

Reviews Distribution per Month
![reviews_month](https://user-images.githubusercontent.com/43356490/116666478-46ee9d00-a99b-11eb-9de7-59fa6829cc36.PNG)

- July to October are the months with the most reviews
- January to April are the months with the least reviews

Reviews Distribution over the years since 2002
![reviews_year](https://user-images.githubusercontent.com/43356490/116666479-47873380-a99b-11eb-8d7b-7fd05e5f7abd.PNG)

- There's been a steady increase in the number of reviews up untill 2016.
- 2020 registered the least number of reviews in over 10 years. This significant drop could be attributed to the Covid 19 pandemic and restrictions put in place to ensure slow down the spread of the virus e.g. lockdowns

Word Count Distribution of the Reviews
![word count distribution](https://user-images.githubusercontent.com/43356490/116666498-4c4be780-a99b-11eb-8bfd-d0332cdadf5c.PNG)

Word Count Distribution of the Reviews Titles 
![title_word_count_dist](https://user-images.githubusercontent.com/43356490/116666496-4bb35100-a99b-11eb-9f6e-9884856d5e04.PNG)

#### Word Cloud Analysis of the Reviews and Review Titles
This allows us to identify what words customers use when giving a particular rating for a review. We expect lowly rated reviews to have words that express disatisfaction and the opposite for highly rated reviews.

This could also point out which services or aspects of a business have a strong impact on the experience of our customers

Word Cloud of Reviews with a Rating of 1
![review_word_cloud_1](https://user-images.githubusercontent.com/43356490/116666514-4f46d800-a99b-11eb-89ba-775cb57a2e9f.PNG)

Word Cloud of Reviews with a Rating of 2
![review_word_cloud_2](https://user-images.githubusercontent.com/43356490/116666515-4fdf6e80-a99b-11eb-97ea-b0769104e162.PNG)

Word Cloud of Reviews with a Rating of 3
![review_word_cloud_3](https://user-images.githubusercontent.com/43356490/116666516-50780500-a99b-11eb-9a0f-8eb0891e2b5b.PNG)

Word Cloud of Reviews with a Rating of 4
![review_word_cloud_4](https://user-images.githubusercontent.com/43356490/116666467-43f3ac80-a99b-11eb-8fa9-f3c31900a1d3.PNG)

Word Cloud of Reviews with a Rating of 5
![review_word_cloud_5](https://user-images.githubusercontent.com/43356490/116666473-45bd7000-a99b-11eb-9967-51d557d63700.PNG)

Word Cloud of Reviews Titles with a Rating of 1
![title_word_cloud_1](https://user-images.githubusercontent.com/43356490/116666480-481fca00-a99b-11eb-8d58-b9487fb8185f.PNG)

Word Cloud of Reviews Titles with a Rating of 2
![title_word_cloud_2](https://user-images.githubusercontent.com/43356490/116666482-48b86080-a99b-11eb-8065-b1b36fc0a706.PNG)

Word Cloud of Reviews Titles with a Rating of 3
![title_word_cloud_3](https://user-images.githubusercontent.com/43356490/116666488-4950f700-a99b-11eb-8ce9-e6b841a21d4d.PNG)

Word Cloud of Reviews Titles with a Rating of 4
![title_word_cloud_4](https://user-images.githubusercontent.com/43356490/116666490-49e98d80-a99b-11eb-9fe7-03107e3a4042.PNG)

Word Cloud of Reviews Titles with a Rating of 5
![title_word_cloud_5](https://user-images.githubusercontent.com/43356490/116666494-4b1aba80-a99b-11eb-906a-0dbdae60faf4.PNG)


#### Bigram Analysis of the Reviews
With the bigram analysis, we explore words associations (words that frequently show up together) for each rating. This provides more detail into which aspects of our business the customers are referring to. Case in point, as you'll notice in the bigram distributions below, customers talk alot about the front desk, air condition, hot water, free wifi etc. 

Bigrams Distribution of Reviews with a Rating of 1
![bigrams_1](https://user-images.githubusercontent.com/43356490/116666500-4ce47e00-a99b-11eb-9585-42f9f917a4c8.PNG)

Bigrams Distribution of Reviews with a Rating of 2
![bigrams_2](https://user-images.githubusercontent.com/43356490/116666503-4ce47e00-a99b-11eb-92a5-af0e9a1b3038.PNG)

Bigrams Distribution of Reviews with a Rating of 3
![bigrams_3](https://user-images.githubusercontent.com/43356490/116666506-4d7d1480-a99b-11eb-8e81-80bb04f14dec.PNG)


Bigrams Distribution of Reviews with a Rating of 4
![bigrams_4](https://user-images.githubusercontent.com/43356490/116666510-4e15ab00-a99b-11eb-90d9-1e64f7ab6a8b.PNG)

Bigrams Distribution of Reviews with a Rating of 5
![bigrams_5](https://user-images.githubusercontent.com/43356490/116666511-4eae4180-a99b-11eb-8bae-c1d6cfb9d3ff.PNG)
