import random

restaurants = ['Adyar Ananda Bhavan','Annalakshmi','The Grand Sweets and Snacks','Murugan Idli Shop',
'Namma Veedu Vasanta Bhavan','New Woodlands Hotel','Ratna Cafe','Saravana Bhavan','Sri Krishna Sweets',
'Bangalore Restaurant Week','Central Tiffin Room Bangalore','Indira Canteens','KaatiZone','The Kitchen of Joy','Koshys',
'Mavalli Tiffin Room','Raj Bhavan','Vidyarthi Bhavan']
cuisine = ['Italian','Indian','American','Continental','Beverages']
Address = ["5, Mahatma Gandhi Road,Chennai","18, New Road,Chennai","25,Yellow Road, Chennai"]
rating = [1,2,3,4,1.5,3.2,2.7,4.5,4.7]
items = ["pizza","burger","idly","dosa","naan","chappati","biriyani"]
rate = [100,25,45,67,88,45,90,30]
imgs = ['/assets/images/image1.jpg','/assets/images/image2.jpg','/assets/images/image3.jpg','/assets/images/image4.jpg','/assets/images/image5.jpg','/assets/images/image6.jpg',]

data = {}
op = []
data1 ={}

for i in range(1,len(restaurants)):
	cu_index = random.randrange(1,1000)%(len(cuisine))
	ad_index = random.randrange(1,1000)%(len(Address))
	ra_index = random.randrange(1,1000)%(len(rating))
	im_index = random.randrange(1,1000)%(len(imgs))
	data["Name"] = restaurants[(i-1)%len(restaurants)]
	data["Cuisine"] = cuisine[cu_index]
	data["Rating"] = rating[ra_index]
	data["Address"] = Address[ad_index]
	data["url"] = imgs[im_index]
	data["location"] = "chennai"
	data1["food"] = random.sample(items,4)
	data["items"] = {}
	for fooditems in data1["food"]:
		cost_index = random.randrange(1,1000)%(len(rate))
		data["items"][fooditems]  = rate[cost_index]
	op.append(data)
	data = {}

print op