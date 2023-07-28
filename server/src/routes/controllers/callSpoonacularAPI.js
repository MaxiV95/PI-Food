/* const axios = require("axios");*/

// Único AXIOS
const callSpoonacularAPI = async (url) => {
	/*const { data } = await axios.get(url, {
		headers: { "x-api-key": process.env.API_KEY },
	});
	return data;*/
	return {
		results: [
			{
				id: 716426,
				title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
				image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
				summary:
					"You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has 192 calories, 7g of protein, and 6g of fat per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 30 minutes. Overall, this recipe earns a spectacular spoonacular score of 100%. If you like this recipe, you might also like recipes such as Cauliflower, Brown Rice, and Vegetable Fried Rice, Cauliflower, Brown Rice, and Vegetable Fried Rice, and Cauliflower, Brown Rice, and Vegetable Fried Rice.",
				healthScore: 75,
				steps: [
					'Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."',
					"Heat 1T butter and 1T oil in a large skillet over medium heat.",
					"Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
					"Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
					"Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
					"Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
					"Add the peas and broccoli and stir again.",
					"Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
					"Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 715497,
				title: "Berry Banana Breakfast Smoothie",
				image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
				summary:
					"If you want to add more lacto ovo vegetarian recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about 21g of protein, 10g of fat, and a total of 457 calories. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly 5 minutes. It is brought to you by Pink When. Overall, this recipe earns a super spoonacular score of 99%. Similar recipes include Berry Banana Breakfast Smoothie, Berry Banana Breakfast Smoothie, and Berry Banana Breakfast Smoothie.",
				healthScore: 64,
				steps: [
					"Take some yogurt in your favorite flavor and add 1 container to your blender.",
					"Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
				],
				diets: ["Lacto ovo vegetarian"],
			},
			{
				id: 715415,
				title: "Red Lentil Soup with Chicken and Turnips",
				image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
				summary:
					"Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as Red Lentil and Chicken Soup, Red Lentil and Chicken Soup, and Red-Lentil Soup.",
				healthScore: 100,
				steps: [
					"To a large dutch oven or soup pot, heat the olive oil over medium heat.",
					"Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
					"Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
					"Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
					"Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 716406,
				title: "Asparagus and Pea Soup: Real Convenience Food",
				image: "https://spoonacular.com/recipeImages/716406-312x231.jpg",
				summary:
					"Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try Asparagus and Pea Soup: Real Convenience Food, Asparagus and Pea Soup: Real Convenience Food, and Asparagus and Pea Soup: Real Convenience Food for similar recipes.",
				healthScore: 100,
				steps: [
					"Chop the garlic and onions.",
					"Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
					"Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
					"Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",
				],
			},
			{
				id: 644387,
				title: "Garlicky Kale",
				image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
				summary:
					"Garlicky Kale requires approximately 45 minutes from start to finish. This side dish has 170 calories, 2g of protein, and 15g of fat per serving. This recipe serves 2. For 69 cents per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 99%, this dish is outstanding. Try Garlicky Kale, Garlicky Kale, and Garlicky Kale for similar recipes.",
				healthScore: 83,
				steps: [
					"Heat the olive oil in a large pot over medium heat.",
					"Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
					"Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
					"Serve hot.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 715446,
				title: "Slow Cooker Beef Stew",
				image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
				summary:
					"If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include Slow Cooker Beef Stew, Slow Cooker Beef Stew, and Slow Cooker Beef Stew.",
				healthScore: 100,
				steps: [
					"To get started, heat your slow cooker to low.",
					"Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
					"Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 782601,
				title: "Red Kidney Bean Jambalaya",
				image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
				summary:
					"Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately 18g of protein, 6g of fat, and a total of 393 calories. For $1.68 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 99%. Users who liked this recipe also liked Red Kidney Bean Jambalaya, Red Kidney Bean Salad, and Red Kidney Bean Curry.",
				healthScore: 96,
				steps: [
					"Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
					"Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
					"Drain and set aside.",
					"Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
					"Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
					"Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 795751,
				title: "Chicken Fajita Stuffed Bell Pepper",
				image: "https://spoonacular.com/recipeImages/795751-312x231.jpg",
				summary:
					"Chicken Fajita Stuffed Bell Pepper takes approximately 45 minutes from beginning to end. Watching your figure? This gluten free recipe has 526 calories, 50g of protein, and 24g of fat per serving. For $4.35 per serving, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Users who liked this recipe also liked Stuffed Bell Peppers, Stuffed Bell Pepper, and Stuffed Bell Pepper.",
				healthScore: 85,
				steps: [
					"To get started heat oven to 35",
					"Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side.",
					"Cut the bell pepper in half (if you havent already) and clean out the seeds.",
					"Layer quinoa and then grilled chicken into the pepper, and then top each with cheese.",
					"Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper",
					"Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!",
				],
				diets: ["Gluten free"],
			},
			{
				id: 766453,
				title: "Hummus and Za'atar",
				image: "https://spoonacular.com/recipeImages/766453-312x231.jpg",
				summary:
					"You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about 34g of protein, 31g of fat, and a total of 778 calories. For $1.61 per serving, this recipe covers 44% of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a great spoonacular score of 98%. Chopped Hummus Dip with Za'atar, Mediterranean Hummus Toast with Za’atar, and Hummus Deviled Eggs with Za’atar {Exercise Challenge} are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
					"Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
					"Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
					"Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
					"Transfer the hummus to a shallow bowl and drizzle with olive oil.",
					"Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 716627,
				title: "Easy Homemade Rice and Beans",
				image: "https://spoonacular.com/recipeImages/716627-312x231.jpg",
				summary:
					"Easy Homemade Rice and Beans is a main course that serves 2. One serving contains 446 calories, 19g of protein, and 4g of fat. For $1.06 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 35 minutes. Overall, this recipe earns a tremendous spoonacular score of 98%. Easy Homemade Rice and Beans, Easy Homemade Rice and Beans, and Easy Homemade Rice and Beans are very similar to this recipe.",
				healthScore: 60,
				steps: [
					"Heat the olive oil in a large pot over medium heat.",
					"Add onions and saute until soft, or for about 5 minutes.",
					"Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*",
					"Serve with salsa, cheese, and sour cream.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 664147,
				title: "Tuscan White Bean Soup with Olive Oil and Rosemary",
				image: "https://spoonacular.com/recipeImages/664147-312x231.jpg",
				summary:
					"Tuscan White Bean Soup with Olive Oil and Rosemary is a gluten free, dairy free, lacto ovo vegetarian, and vegan recipe with 6 servings. This main course has 242 calories, 16g of protein, and 1g of fat per serving. For 50 cents per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. It will be a hit at your Autumn event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 79%, this dish is good. If you like this recipe, take a look at these similar recipes: White Bean Soup with Pastan and Rosemary Oil Drizzle, Tuscan White Bean and Fennel Stew With Orange and Rosemary, and Tuscan White Bean Soup.",
				healthScore: 94,
				steps: [
					"Rinse the beans thoroughly and place them in a 7-quart slow cooker along with the water, onion, garlic, and bay leaf. Cover and cook on LOW for about 8 hours, or until the beans are nice and tender.",
					"Remove the bay leaf. Using a handheld immersion blender, puree the remaining ingredients to the desired texture.",
					"Add the salt to taste.Ladle the soup into bowls.",
					"Drizzle with the olive oil, sprinkle with rosemary, and serve.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 640941,
				title: "Crunchy Brussels Sprouts Side Dish",
				image: "https://spoonacular.com/recipeImages/640941-312x231.jpg",
				summary:
					"The recipe Crunchy Brussels Sprouts Side Dish can be made in about 30 minutes. For $1.69 per serving, you get a side dish that serves 4. One serving contains 232 calories, 8g of protein, and 16g of fat. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is spectacular. Similar recipes include Side Dish Sundays: Cacio e Pepe Brussels Sprouts, Easy Side Dish – Roasted Brussels Sprouts and Grapes, and Side Dish Sundays: Cacio e Pepe Brussels Sprouts.",
				healthScore: 100,
				steps: [
					"Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes.",
					"Drain.",
					"Saute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil.",
					"Add walnuts to the sprouts, stir and combine.",
					"Pour the vinegar dressing over the sprouts, season with pepper.",
					"Mix and combine so that each sprout is covered with the dressing.",
					"Serve warm or cold as a side dish.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",
				],
			},
			{
				id: 715495,
				title: "Turkey Tomato Cheese Pizza",
				image: "https://spoonacular.com/recipeImages/715495-312x231.jpg",
				summary:
					"Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for. For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 221 calories, 10g of protein, and 8g of fat per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around 15 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Users who liked this recipe also liked Turkey Tomato Pizza, Tomato Cheese Pizza, and Cheese & Tomato Pizza.",
				healthScore: 39,
				steps: [
					"Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top.",
					"Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.",
					"Add another layer of cheese, and then sprinkle with pepper.",
					"Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.",
				],
				diets: [],
			},
			{
				id: 794349,
				title: "Broccoli and Chickpea Rice Salad",
				image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
				summary:
					"Broccoli and Chickpea Rice Salad takes roughly 45 minutes from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 355 calories, 15g of protein, and 10g of fat per serving. This recipe serves 6. For $1.13 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular score of 99%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: Broccoli and Chickpea Rice Salad, Broccoli and Chickpea Rice Salad, and Broccoli and Chickpea Rice Salad.",
				healthScore: 83,
				steps: [
					"In a large skillet, heat the oil over medium heat.",
					"Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender.",
					"Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl.",
					"Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 716381,
				title: "Nigerian Snail Stew",
				image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
				summary:
					"Need a gluten free, dairy free, and whole 30 main course? Nigerian Snail Stew could be a tremendous recipe to try. This recipe serves 1 and costs $9.1 per serving. One serving contains 358 calories, 24g of protein, and 5g of fat. 361 person have made this recipe and would make it again. It will be a hit at your Autumn event. A mixture of scotch bonnet peppers, bell pepper, tomatoes, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is super. Nigerian Kidney Bean Stew With a Peanut Sauce, Little Snail Rolls, and Maple Snail Cookies are very similar to this recipe.",
				healthScore: 66,
				steps: [
					"In a bowl, wash the snails with lime and salt till all the slime is gone.",
					"Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.",
					"Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.",
					"Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.",
					"Add your seasoning cubes and taste for salt.",
					"Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.",
					"Serve with Rice, Pasta, Plantain, Yams or Potatoes.",
				],
				diets: ["Dairy free", "Gluten free", "Whole 30"],
			},
			{
				id: 660306,
				title: "Slow Cooker: Pork and Garbanzo Beans",
				image: "https://spoonacular.com/recipeImages/660306-312x231.jpg",
				summary:
					"Slow Cooker: Pork and Garbanzo Beans takes approximately 45 minutes from beginning to end. This recipe serves 6. This main course has 587 calories, 66g of protein, and 14g of fat per serving. For $2.99 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. Head to the store and pick up water *2, cumin, pork should roast, and a few other things to make it today. This recipe is liked by 22 foodies and cooks. It is brought to you by Foodista. It is a good option if you're following a gluten free and dairy free diet. With a spoonacular score of 96%, this dish is outstanding. Similar recipes include Slow Cooker Pork and Beans, Slow Cooker Pork and Beans, and Slow Cooker Pork and Beans.",
				healthScore: 100,
				steps: [
					"In slow cooker layer in this order: pork, then garbanzo beans, onion, pour water over all.",
					"Mix spices together and sprinkle over pork and beans. Cover. Set on low and cook for approximately 6 hours. The beans should be tender and creamy. The pork should fall very easily from the bone. The pork can be either shredded for cubed for your preference. *3Serving Suggestion: Scoop about 1 cup of beans with broth into a soup bowl. Top with shredded pork.",
					"Add 1/4 of an avocado sliced, top with chopped fresh cilantro.NOTES:*1 The beans do not need to be soaked before adding to the slow cooker. They will be perfectly soft and creamy without pre-soaking.*2 Substitute the water for: 2 cups water and 1 bottle of good quality dark beer like Negra Modelo. You can also substitute the water for chicken stock or pork stock. Each of these substitutions will add an extra dimension of flavor.*3 If you want to shred the pork, it is easiest to do when the pork is hot. Use two forks to pull the pork apart and shred. If you want to slice the pork (like for sandwiches) it is best to do when the pork is cold.",
					"Let the pork rest in the refrigerator for several hours or over night. Slice with a serrated knife or a very sharp chef knife.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 756814,
				title: "Powerhouse Almond Matcha Superfood Smoothie",
				image: "https://spoonacular.com/recipeImages/756814-312x231.jpg",
				summary:
					"Powerhouse Almond Matcha Superfood Smoothie is a breakfast that serves 2. One serving contains 289 calories, 11g of protein, and 13g of fat. For $2.59 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. If you have chia seeds, matcha tea powder, banana, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. This recipe from Foodista has 80 fans. From preparation to the plate, this recipe takes around 10 minutes. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is awesome. If you like this recipe, take a look at these similar recipes: Powerhouse Almond Matcha Superfood Smoothie, Chocolate Almond Superfood Smoothie, and Powerhouse Golden Turmeric Smoothie.",
				healthScore: 52,
				steps: [
					"Combine all of the ingredients in a blender. Blend on high until smooth.",
					"Serve immediately.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 715769,
				title: "Broccolini Quinoa Pilaf",
				image: "https://spoonacular.com/recipeImages/715769-312x231.jpg",
				summary:
					"Broccolini Quinoa Pilaf requires approximately 30 minutes from start to finish. For $4.14 per serving, you get a main course that serves 2. One portion of this dish contains around 20g of protein, 31g of fat, and a total of 625 calories. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a rather expensive recipe for fans of Mediterranean food. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Pick Fresh Foods. With a spoonacular score of 98%, this dish is excellent. Similar recipes are Spring Broccolini & Kale Quinoa Bowls, Orange-Sesame Salmon with Quinoa & Broccolini, and Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini.",
				healthScore: 74,
				steps: [
					"In a large pan with lid heat olive oil over medium high heat.",
					"Add onions and cook for 1 minute.",
					"Add garlic and cook until onions are translucent and garlic is fragrant.",
					"Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper.",
					"Add walnuts and serve hot.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 642129,
				title: "Easy To Make Spring Rolls",
				image: "https://spoonacular.com/recipeImages/642129-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, and pescatarian recipes to your collection, Easy To Make Spring Rolls might be a recipe you should try. For $3.78 per serving, you get a hor d'oeuvre that serves 4. One serving contains 162 calories, 13g of protein, and 2g of fat. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about 45 minutes. It can be enjoyed any time, but it is especially good for Spring. This recipe from Foodista requires mint leaves, garlic, chili pepper, and rice vinegar. This recipe is typical of Vietnamese cuisine. Overall, this recipe earns a tremendous spoonacular score of 88%. Easy To Make Spring Rolls, Easy To Make Spring Rolls, and Easy To Make Spring Rolls are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"Have all the ingredients ready for assembly. In a large bowl filled with water, dip a wrapper in the water. The rice wrapper will begin to soften and this is your cue to remove it from the water and lay it flat.",
					"Place 2 shrimp halves in a row across the center and top with basil, mint, cilantro and lettuce. Leave about 1 to 2 inches uncovered on each side.  Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce.  Repeat with remaining wrappers and ingredients.",
					"Cut and serve at room temperature with dipping sauce.The Culinary Chases Note: The rice wrapper can be fussy to handle if you let it soak too long. I usually give it a couple of swishes in the water and then remove. It may feel slightly stiff but by the time you are ready to roll up, the wrapper will become very pliable.  A typical spring roll contains cooked rice vermicelli, slivers of cooked pork and julienned carrots but you can use whatever suits your fancy.  Enjoy!",
				],
				diets: ["Dairy free", "Gluten free", "Pescatarian"],
			},
			{
				id: 642605,
				title: "Farro With Mushrooms and Asparagus",
				image: "https://spoonacular.com/recipeImages/642605-312x231.jpg",
				summary:
					"Farro With Mushrooms and Asparagus is a dairy free and lacto ovo vegetarian recipe with 4 servings. One serving contains 365 calories, 12g of protein, and 9g of fat. For $3.94 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe is liked by 47 foodies and cooks. From preparation to the plate, this recipe takes around 1 hour and 15 minutes. It works well as a side dish. If you have asparagus, garlic, porcini mushrooms, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular score of 98%, this dish is awesome. If you like this recipe, take a look at these similar recipes: Farro Risotto with Wild Mushrooms and Asparagus, Farro with Asparagus, Hazelnuts and Kale Topped with Roasted Mushrooms, and Farro And Porcini Mushrooms (farro Con Funghi).",
				healthScore: 80,
				steps: [
					"In a small bowl, cover dried mushrooms with warm water.  Soak for 25 minutes, or until softened.",
					"Drain the mushrooms, and discard the soaking water.  Chop finely.Bring a large pot of water to a boil.",
					"Add farro, and cook for 10 minutes, stirring occasionally.",
					"Drain and reserve.In a large skillet, over medium heat, heat the olive oil, and add onion, garlic, thyme, and mushrooms.Cook, stirring occasionally, for 5 minutes or until onions are tender.Stir in 2 tablespoons of sherry vinegar, and continue cooking for 1 minute.",
					"Add chicken stock, and bring it to a boil.Stir in farro, and return to a boil.Lower the heat to a simmer, and cover with a tight fitting lid.  Cook for 10 minutes.",
					"Add asparagus, and cook, covered, for an additional 10 minutes.Season with 1 tablespoon sherry vinegar, salt and pepper.",
				],
				diets: ["Dairy free", "Lacto ovo vegetarian"],
			},
			{
				id: 636589,
				title: "Butternut Squash Frittata",
				image: "https://spoonacular.com/recipeImages/636589-312x231.jpg",
				summary:
					"The recipe Butternut Squash Frittata can be made in approximately 45 minutes. This recipe serves 1. Watching your figure? This gluten free recipe has 465 calories, 24g of protein, and 4g of fat per serving. For $3.4 per serving, this recipe covers 53% of your daily requirements of vitamins and minerals. A few people really liked this main course. This recipe from Foodista requires butternut squash, bell pepper, liquid egg substitute, and non-fat milk. 18 people have tried and liked this recipe. Overall, this recipe earns an awesome spoonacular score of 98%. If you like this recipe, you might also like recipes such as Butternut Squash Frittata, Butternut Squash Frittata, and Butternut Squash and Quinoa Frittata.",
				healthScore: 100,
				steps: [
					"Preheat oven to 350Spray a 10 oz oven safe dish with cooking spray",
					"Add your butternut squash",
					"In a measuring cup add your eggs and milk.",
					"Mix until combined.",
					"Pour over butternut squash.",
					"Sprinkle with pepper and top with cheese.",
					"Bake in oven for 30-35 minutes, until middle is slightly firm",
					"Let it cool for a few minutes",
				],
				diets: ["Gluten free"],
			},
			{
				id: 646738,
				title: "Herbivoracious' White Bean and Kale Soup",
				image: "https://spoonacular.com/recipeImages/646738-312x231.jpg",
				summary:
					"Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains 332 calories, 17g of protein, and 10g of fat. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your Autumn event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is tremendous. Kale And White Bean Soup, White Bean And Kale Soup, and White Bean Kale Soup are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"PRESSURE COOKER METHOD",
					"In the pressure cooker base, but without pressure, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes.",
					"Add the bay leaves, rosemary, and your choice(s) of the Parmesan rind, dried porcini, or broth powder.",
					"Add the dry beans and water. Bring up to high pressure and cook for 40 minutes, then allow the pressure to release naturally. Open the lid.",
					"Remove the bay leaves and Parmesan rind, if using.",
					"Add the kale and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil.",
					"STOVETOP METHOD",
					"Cover the beans with several inches of water and soak overnight.",
					"Drain the beans and place in a large saucepan. Cover with water by at least 2 inches and bring to a boil. Reduce the heat and simmer the beans until tender, about 1 1/2 to 2 hours.",
					"Drain the beans, reserving the bean broth.",
					"In a large saucepan, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes.",
					"Add 4 cups of the bean broth, the bay leaves, rosemary, and your choice of the Parmesan rind, dried porcini, or broth powder. Bring to a simmer and cook for 30 minutes.",
					"Remove the bay leaves and Parmesan rind, if using.",
					"Add the beans, kale, and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 715540,
				title: "Summer Berry Salad",
				image: "https://spoonacular.com/recipeImages/715540-312x231.jpg",
				summary:
					"Summer Berry Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 1. One portion of this dish contains around 2g of protein, 1g of fat, and a total of 98 calories. For $1.75 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. A mixture of strawberries, blackberries, basalmic vinaigrette, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. 17 people have tried and liked this recipe. It is perfect for The Fourth Of July. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Users who liked this recipe also liked Berry Summer Salad, Summer Berry Salad, and Chicken & Berry Summer Salad.",
				healthScore: 95,
				steps: [
					"Cut up a Granny Smith green apple, strawberries, and add blackberries",
					"Mix in with Romaine lettuce",
					"Toss in some basalmic vinaigrette",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",
				],
			},
			{
				id: 663559,
				title: "Tomato and lentil soup",
				image: "https://spoonacular.com/recipeImages/663559-312x231.jpg",
				summary:
					"Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with 340 calories, 18g of protein, and 8g of fat each. For $1.16 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. It is perfect for Autumn. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 96%, this dish is great. Users who liked this recipe also liked Tomato and Lentil Soup, Lentil-Tomato Soup, and Lentil & Tomato Soup.",
				healthScore: 100,
				steps: [
					"Saut onion and garlic in olive oil for 5 minutes.",
					"Add the carrot, saut for another 2 minutes.",
					"Add tomatoes, bay leaf and water, stir and bring to the boil.",
					"Stir in lentils, season with salt and cook for 5 minutes.",
					"Before serving sprinkle with chopped parsley.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 662670,
				title: "Swiss Chard Wraps",
				image: "https://spoonacular.com/recipeImages/662670-312x231.jpg",
				summary:
					"Swiss Chard Wraps is a gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe with 6 servings. One serving contains 137 calories, 4g of protein, and 11g of fat. For 82 cents per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. It works best as a side dish, and is done in about 45 minutes. 14 people were impressed by this recipe. If you have swiss chard leaves, orange cauliflower, olive oil, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an excellent spoonacular score of 96%. Swiss Chard Wraps, Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce, and Swiss Chard are very similar to this recipe.",
				healthScore: 90,
				steps: [
					"Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps.",
					"Chop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together.",
					"Place the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown.",
					"Add the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked.",
					"Add a pinch of salt and chopped basil to the cauliflower and stir.",
					"Spiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler.",
					"To assemble the wraps, place a large leaf flat down.",
					"Add a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk.",
					"Drizzle a bit of vinaigrette on top of the vegetables and wrap everything up.",
					"Enjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce.",
					"These wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",
				],
			},
			{
				id: 640062,
				title: "Corn Avocado Salsa",
				image: "https://spoonacular.com/recipeImages/640062-312x231.jpg",
				summary:
					"Corn Avocado Salsa might be just the hor d'oeuvre you are searching for. For $1.31 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 5g of protein, 16g of fat, and a total of 237 calories. This recipe serves 2. 44 people have made this recipe and would make it again. This recipe from Foodista requires avocado, balsamic vinegar, cumin, and garlic. A few people really liked this Mexican dish. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 25 minutes. With a spoonacular score of 97%, this dish is spectacular. If you like this recipe, take a look at these similar recipes: Avocado Corn Salsa, Avocado-Corn Salsa, and Avocado-Corn Salsa.",
				healthScore: 71,
				steps: [
					"Preheat oven to 375 degrees.",
					"Spread corn flat on a baking sheet.Spray lightly with olive oil spray.Roast corn in the oven for about 8-10 minutes. (Be careful not to brown too much or burn.)",
					"Remove from heat and allow to cool.Finely chop red pepper and garlic and mix in a bowl.Peel and coarsely chop avocado and add to bowl.",
					"Add cooled corn.",
					"Mix in cumin and vinegar and blend well.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 715421,
				title: "Cheesy Chicken Enchilada Quinoa Casserole",
				image: "https://spoonacular.com/recipeImages/715421-312x231.jpg",
				summary:
					"Cheesy Chicken Enchilada Quinoa Casserole might be just the Mexican recipe you are searching for. One serving contains 594 calories, 34g of protein, and 24g of fat. This gluten free recipe serves 4 and costs $2.62 per serving. A mixture of corn, pepper, canned tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately 30 minutes. It will be a hit at your Autumn event. Plenty of people made this recipe, and 9912 would say it hit the spot. It works well as an affordable main course. It is brought to you by Pink When. With a spoonacular score of 97%, this dish is amazing. If you like this recipe, you might also like recipes such as Cheesy Chicken Enchilada Quinoa Casserole, Cheesy Chicken Enchilada Quinoa Casserole, and Cheesy Chicken Enchilada Quinoa Casserole.",
				healthScore: 38,
				steps: [
					"To get started, heat your oven to 350 and prepare an 8x8 baking dish. Cook the quinoa according to the instructions. If you haven't already, boil and shred your chicken breast.In a medium sized mixing bowl add 2 Tbsp cilantro, 1 cup shredded cheese, quinoa, tomatoes with chilis, black beans, half of the can of sweet corn, verde enchilada sauce, cumin, chili powder, white pepper, black pepper, and salt to taste.",
					"Mix everything well, and then pour into the 8 x8 baking dish. Cover with the last cup of cheese and then bake in the oven for 15 minutes.",
					"Remove from oven and allow to cool for 5 minutes. Then top with chopped Roma tomato, chopped avocado, green onion tops, and remaining 2 tsp of cilantro.",
					"Serve immediately.",
				],
				diets: ["Gluten free"],
			},
			{
				id: 648320,
				title: "Jade Buddha Salmon Tartare",
				image: "https://spoonacular.com/recipeImages/648320-312x231.jpg",
				summary:
					"Need a gluten free, dairy free, paleolithic, and primal main course? Jade Buddha Salmon Tartare could be an outstanding recipe to try. This recipe serves 2 and costs $6.96 per serving. One serving contains 382 calories, 34g of protein, and 25g of fat. If you have olive oil to coat, green onion, salt and pepper, and a few other ingredients on hand, you can make it. 28 people were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns an awesome spoonacular score of 97%. If you like this recipe, you might also like recipes such as Salmon Tartare, Salmon Tartare, and Salmon Tartare.",
				healthScore: 89,
				steps: [
					"Combine all ingredients except lime juice and vinegar.",
					"Chill for 30 minutes.",
					"Add lime juice and vinegar, adjust to perfect, and serve.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Paleolithic",

					"Pescatarian",

					"Primal",
				],
			},
			{
				id: 716432,
				title: "Finger Foods: Frittata Muffins",
				image: "https://spoonacular.com/recipeImages/716432-312x231.jpg",
				summary:
					"Finger Foods: Frittata Muffins might be a good recipe to expand your breakfast repertoire. This recipe makes 1 servings with 655 calories, 50g of protein, and 45g of fat each. For $2.96 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately 45 minutes. Plenty of people made this recipe, and 601 would say it hit the spot. If you have salt and pepper, orange pepper, t cream, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, lacto ovo vegetarian, primal, and ketogenic diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an amazing spoonacular score of 97%. Users who liked this recipe also liked Finger Foods: Frittata Muffins, {38 Power Foods} Skinny Kiwifruit Muffins, and {38 Power Foods} Skinny Broccoli Cheese Muffins.",
				healthScore: 49,
				diets: ["Gluten free", "Ketogenic", "Lacto ovo vegetarian", "Primal"],
			},
			{
				id: 798400,
				title:
					"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
				image: "https://spoonacular.com/recipeImages/798400-312x231.jpg",
				summary:
					"The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant could satisfy your Indian craving in around 45 minutes. This recipe serves 6 and costs 94 cents per serving. This hor d'oeuvre has 129 calories, 7g of protein, and 2g of fat per serving. It is brought to you by foodandspice.blogspot.com. If you have black-eyed peas, olive oil, globe, and a few other ingredients on hand, you can make it. This recipe is liked by 32 foodies and cooks. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is outstanding. Try Roasted Eggplant and Swiss Chard Lasagna, Pumpkin, Black-Eyed Pea, and Coconut Curry, and Spicy Black-eyed Pea Relish for similar recipes.",
				healthScore: 71,
				steps: [
					"Rinse the black-eyed peas and soak in several inches of water for 6 hours or overnight.",
					"Drain and rinse, then transfer to a large saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 40 to 60 minutes. Take care not to overcook  the beans should be tender but not be falling apart.",
					"Drain and set aside.To prepare the eggplant, cut of the stem and bottom edge and then cut in half lengthwise. Score the flesh into diagonal 1-inch lines, then turn and score again until you have a diagonal pattern. Take care not to cut through the skin.",
					"Sprinkle with some salt and let sit for 40 minutes. Rinse and squeeze out any excess water.",
					"Brush the eggplant with some oil and transfer to a roasting pan.",
					"Bake in a preheated 400 oven until the flesh appears collapsed and is wrinkly.",
					"Remove from heat and let cool for about 10 minutes, season with a bit of salt, and remove the flesh from the eggplant. If there is too much water, drain in a strainer. Set aside.",
					"Heat the oil over medium heat in the same saucepan used to cook the black-eyed peas. When hot, toss in the shallots and chilies and saut for 2 to 3 minutes. Now add the spices and stir for another minute, until fragrant.",
					"Add the tomato, cook for another few minutes, and then add the eggplant and black-eyed peas, and cook for another few minutes, stirring often.",
					"Pour a few tablespoons of water into the pan and add handfuls of chard at a time until wilted.",
					"Add more water as necessary.",
					"Add the lemon juice and salt to taste near the end of the cooking time.",
					"Remove from heat, cover, and let sit for a few minutes before serving.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 782600,
				title: "Quinoa Salad with Vegetables and Cashews",
				image: "https://spoonacular.com/recipeImages/782600-312x231.jpg",
				summary:
					"Quinoa Salad with Vegetables and Cashews is a gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre. One serving contains 309 calories, 7g of protein, and 24g of fat. This recipe serves 6 and costs $1.47 per serving. This recipe is liked by 88 foodies and cooks. A mixture of olive oil, quinoa, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by foodandspice.blogspot.com. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is outstanding. If you like this recipe, take a look at these similar recipes: Cashews and Vegetables, Quinoa Salad with Vegetables, and Zesty Quinoa With Broccoli And Cashews.",
				healthScore: 60,
				steps: [
					"Line a baking sheet with parchment paper and preheat an oven to 35",
					"Toss the parsnip, carrots and Brussels sprouts with 1 tablespoon of the olive oil and spread evenly on the pan. Roast for 30 minutes or until tender, stirring the vegetables half way through the cooking time.Meanwhile, toast the cashews, sunflower seeds, pumpkin seeds and sesame seeds in a dry unoiled skillet over medium-low heat for 10 to 15 minutes, tossing frequently, until the cashews and sesame seeds are lighly browned.Toss the kale with the remaining 3 tablespoons of olive oil in a large salad bowl. Fluff the quinoa and add to the bowl along with the roasted vegetables and cherry tomatoes.",
					"Whisk together the dressing ingredients.",
					"Pour the dressing over the salad and toss.",
					"Serve at room temperature or chilled.",
					"Sprinkle each serving with a scattering of toasted cashews and seeds.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 652417,
				title: "Moroccan chickpea and lentil stew",
				image: "https://spoonacular.com/recipeImages/652417-312x231.jpg",
				summary:
					"The recipe Moroccan chickpean and lentil stew can be made in roughly 30 minutes. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs $1.26 per serving. This main course has 466 calories, 20g of protein, and 7g of fat per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for Autumn. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. If you like this recipe, you might also like recipes such as Moroccan chickpean and lentil stew, Butternut Squash, Chickpea & Lentil Moroccan Stew, and Butternut Squash, Chickpea & Lentil Moroccan Stew.",
				healthScore: 96,
				steps: [
					"Heat oil in large saucepan over medium-high heat, add onion and cook for about 3 minutes.",
					"Add celery, carrot and broccoli to pan and saut for about 5 minutes.",
					"Add in all seasonings and cook additional 1 minute.",
					"Add water, tomato paste, chickpeas and lentils, bring to a boil. Cover, reduce heat to low and simmer for 20 minutes.Meanwhile, cook couscous in separate pan according to package directions.",
					"Add cilantro and lemon juice to stew and serve over warm couscous.",
				],
				diets: ["Dairy free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 639535,
				title: "Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather",
				image: "https://spoonacular.com/recipeImages/639535-312x231.jpg",
				summary:
					"If you have about 45 minutes to spend in the kitchen, Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather might be an amazing dairy free, lacto ovo vegetarian, and vegan recipe to try. This main course has 570 calories, 15g of protein, and 18g of fat per serving. This recipe serves 2 and costs $2.79 per serving. 41 person have made this recipe and would make it again. Head to the store and pick up parsley, paprika, israeli couscous, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is spectacular. If you like this recipe, you might also like recipes such as Winter Fruit Salad: Cool Food for Cold Weather, Citrusy Couscous Salad with Olives, and Cold-Weather Venison Chili.",
				healthScore: 72,
				steps: [
					"Prepare couscous according to package instructions. Meanwhile combine all remaining ingredients in a medium mixing bowl.",
					"Drain couscous and add to bowl while still hot. Thoroughly mix all ingredients. Taste and adjust seasonings.",
					"Serve warm.",
				],
				diets: ["Dairy free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 729366,
				title: "Plantain Salad",
				image: "https://spoonacular.com/recipeImages/729366-312x231.jpg",
				summary:
					"Plantain Salad could be just the gluten free and pescatarian recipe you've been looking for. For $5.4 per serving, you get a main course that serves 1. One serving contains 607 calories, 21g of protein, and 18g of fat. Head to the store and pick up finger of plantain, parmesan cheese, bell pepper, and a few other things to make it today. This recipe from Afrolems has 126 fans. From preparation to the plate, this recipe takes about 45 minutes. With a spoonacular score of 98%, this dish is spectacular. Try How to Spiralize a Plantain & Plantain “Rice” and Beans, Honey Mustard Crunchy Chicken Plantain Salad, and Collard Greens Salad With Fried Plantain and Sumac for similar recipes.",
				healthScore: 61,
				steps: [
					"Cube your plantain, fry and set aside.Chop your vegetables into your salad bowl and toss",
					"In a pan, heat up vegetable oil and stir fry your shrimps and season. Allow to cool",
					"Toss in your plantain and shrimps once cool into your bowl of vegetables.",
					"Sprinkle the parmesan cheese over the salad",
					"Drizzle your dressing over and serve cool.   ",
				],
				diets: ["Gluten free", "Pescatarian"],
			},
			{
				id: 661925,
				title: "Strawberry-Mango Quinoa Salad",
				image: "https://spoonacular.com/recipeImages/661925-312x231.jpg",
				summary:
					"Need a gluten free and lacto ovo vegetarian hor d'oeuvre? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains 354 calories, 8g of protein, and 17g of fat. For $1.87 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is tremendous. Similar recipes are Strawberry-Mango Quinoa Salad, Strawberry-Mango Quinoa Salad, and Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette.",
				healthScore: 66,
				steps: [
					"Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes.",
					"Spread the cooked quinoa out on a baking sheet to cool for about 20 minutes.In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil.",
					"Add the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper.",
					"Serve immediately.",
				],
				diets: ["Gluten free", "Lacto ovo vegetarian"],
			},
			{
				id: 794538,
				title: "Almond Joy Protein Shake",
				image: "https://spoonacular.com/recipeImages/794538-312x231.jpg",
				summary:
					"Almond Joy Protein Shake might be a good recipe to expand your beverage recipe box. One portion of this dish contains roughly 24g of protein, 41g of fat, and a total of 485 calories. This gluten free, dairy free, fodmap friendly, and ketogenic recipe serves 1 and costs $2.24 per serving. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by fullbellysisters.blogspot.com. Head to the store and pick up coconut, chocolate almond milk, coconut milk, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is super. If you like this recipe, take a look at these similar recipes: Almond Joy Breakfast Shake – Chocolate Coconut Protein Shake, Almond Joy Protein Shake, and Almond Joy Protein Shake.",
				healthScore: 78,
				diets: ["Dairy free", "Fodmap friendly", "Gluten free", "Ketogenic"],
			},
			{
				id: 649931,
				title: "Lentil Salad With Vegetables",
				image: "https://spoonacular.com/recipeImages/649931-312x231.jpg",
				summary:
					"Lentil Salad With Vegetables might be a good recipe to expand your side dish repertoire. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs $1.2 per serving. One serving contains 320 calories, 15g of protein, and 12g of fat. Head to the store and pick up tomatoes, rosemary, red wine vinegar, and a few other things to make it today. This recipe from Foodista has 7 fans. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 97%, which is awesome. If you like this recipe, you might also like recipes such as Lentil Salad With Vegetables, Lentil Salad with Summer Vegetables, and Puy Lentil Salad With Caramelized Vegetables.",
				healthScore: 100,
				steps: [
					"Heat olive oil in a saucepan over medium high heat and add onion. Cook until just translucent and then add lentils.",
					"Add water and cook according to package directions.",
					"Drain and cool.",
					"Combine lentils with tomatoes, pepper, onions, rosemary, olive oil, and vinegars. Season with salt and pepper to taste and adjust oil or vinegar as desired.",
					"Serve cold or at room temperature.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 636787,
				title: "Caldo Verde - Portuguese Kale Soup",
				image: "https://spoonacular.com/recipeImages/636787-312x231.jpg",
				summary:
					"Caldo Verde - Portuguese Kale Soup takes approximately 45 minutes from beginning to end. One portion of this dish contains around 20g of protein, 10g of fat, and a total of 493 calories. For $2.24 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 13 people were glad they tried this recipe. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. It is brought to you by Foodista. It works well as a main course. It will be a hit at your Autumn event. Head to the store and pick up onion, carrots, pepper flakes, and a few other things to make it today. With a spoonacular score of 92%, this dish is outstanding. Users who liked this recipe also liked Portuguese Kale Soup (Caldo Verde), Caldo Verde - Portuguese Kale Soup, and Caldo Verde | Portuguese Kale Soup.",
				healthScore: 89,
				steps: [
					"Chop your onions, slice your carrots and smash your garlic. Set aside.",
					"Peel and chop the potatoes. Set aside in a bowl of cold water.",
					"Remove the casing from your chorizo. This is an important step. Chorizo casing is tough and unforgiving and will make the sausage link curl during the cooking process. Just remove it and don't worry about appearance.",
					"Cut the links length-wise then chop into half-moons.",
					"Sautee in a separate pan until the are nice and browned. Don't put into the pot until the last minute, otherwise the color of the chorizo will leach into the soup turning it a weird red color.",
					"Now it's time to prepare the kale. With each individual leaf, cut out the stem. You can do this several ways.",
					"Cut a triangle out of the leaf, or fold over the leaf and cut out the stem that way. Or rip off the halves of the leaves off the stem. I like a little bit of stem to give some crunch and texture.",
					"Tightly roll the leaf into a bundle.",
					"Run your knife over it to julienne the leaf into thin strips.",
					"Don't worry if it's not perfect. Set aside the kale.",
					"In a big pot, sautee your onions, carrots and garlic in a bit of olive oil.",
					"Once the vegetables start to soften, add the potatoes and some crushed red pepper flakes. Stir the pot and cook the potatoes until the outer edges start turning clear.",
					"Then add the 6 cups of water and 2 bouillion packets (or 4 cups of broth and 2 cups of water) to the pot. Bring to a boil then let simmer until the potatoes are cooked.",
					"With a wooden spoon, mash the potatoes against the side of the pot. Do this until almost all the chunks of potatoes are mashed. Leave some chunks behind. This will give your soup a wonderful hearty texture.",
					"Now it's time to add the Kale. It looks like a lot and will fill up your whole pot but not to worry because it wilts down pretty quickly.",
					"Cook for 5 minutes at a simmer then stir in chorizo sausage.",
					"Serve hot or at room temperature (the latter is my favorite). Eat with a nice crusty loaf of Portuguese bread. Enjoy!",
				],
				diets: ["Dairy free", "Gluten free", "Whole 30"],
			},
			{
				id: 641975,
				title: "Easy Ginger Beef Broccoli",
				image: "https://spoonacular.com/recipeImages/641975-312x231.jpg",
				summary:
					"The recipe Easy Ginger Beef Broccoli can be made in approximately 45 minutes. This dairy free recipe serves 4 and costs $2.14 per serving. One portion of this dish contains about 49g of protein, 12g of fat, and a total of 386 calories. It works well as a rather cheap main course. Head to the store and pick up sugar, chicken broth, garlic, and a few other things to make it today. 23 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is awesome. If you like this recipe, take a look at these similar recipes: Easy Ginger Beef Broccoli, Easy Ginger Beef Broccoli, and Easy Ginger Beef Broccoli.",
				healthScore: 75,
				steps: [
					"In a small bowl, combine flour, broth, sugar, and soy sauce. Stir until sugar and flour are dissolved.In a large skillet or wok over high heat, cook and stir beef 2 to 4 minutes, or until browned. Stir in broth mixture, ginger, garlic, and broccoli. Bring to a boil, then reduce heat. Simmer 5 to 10 minutes, or until sauce thickens.Excellent served over rice.",
				],
				diets: ["Dairy free"],
			},
			{
				id: 652423,
				title: "Moroccan Couscous and Chickpea Salad",
				image: "https://spoonacular.com/recipeImages/652423-312x231.jpg",
				summary:
					"You can never have too many side dish recipes, so give Moroccan Couscous and Chickpea Salad a try. This recipe serves 6 and costs $1.87 per serving. One serving contains 483 calories, 14g of protein, and 25g of fat. 72 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately 45 minutes. Head to the store and pick up cinnamon, chickpeas, bell pepper, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a dairy free, lacto ovo vegetarian, and vegan diet. With a spoonacular score of 97%, this dish is excellent. Try Moroccan Couscous and Chickpea Salad, Moroccan Chickpea Couscous, and Moroccan tomato & chickpea soup with couscous for similar recipes.",
				healthScore: 56,
				steps: [
					"Heat broth and a teaspoon of salt and bring to a boil.",
					"Place couscous in a bowl and add broth.  Cover bowl to let couscous absorb liquid.After  5 minutes, remove cover and fluff couscous with a fork.In a large bowl, add the chickpeas, pistachios, red peppers, green onions and parsley and mix well.",
					"Add the zest and juice of the lemon and mix again.",
					"Add the spice mixture over the couscous and mix well. Taste, and add salt if needed.",
					"Let the salad marinate for an hour or so before serving.",
				],
				diets: ["Dairy free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 715447,
				title: "Easy Vegetable Beef Soup",
				image: "https://spoonacular.com/recipeImages/715447-312x231.jpg",
				summary:
					"You can never have too many main course recipes, so give Easy Vegetable Beef Soup a try. This dairy free recipe serves 8 and costs $3.45 per serving. One serving contains 566 calories, 45g of protein, and 19g of fat. 130 people were glad they tried this recipe. It will be a hit at your Autumn event. A mixture of salt, seasoning, on carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly 2 hours and 30 minutes. Taking all factors into account, this recipe earns a spoonacular score of 97%, which is awesome. Users who liked this recipe also liked Easy Vegetable Beef Soup, Easy Vegetable-Beef Soup, and Easy Vegetable Beef Soup.",
				healthScore: 65,
				steps: [
					"To get started, bring 4 quarts of water to a boil in a large pot. ",
					"While waiting on the water to boil, cut the beef short ribs into bite-sized pieces and add them to the water.",
					"Add in diced tomatoes, potatoes, diced onion, parsley, garlic powder, beef bouillon cubes, Italian seasoning, salt, pepper, Worcestershire sauce, celery salt, bay leaves, and stir.",
					"Then add carrots, celery, black-eyed peas, butter beans, corn, and macaroni.",
					"Heat on high, stirring occasionally until the stew mixture comes to a boil.",
					"Once you have reached a boil, cover with a lid, lower heat enough to keep it simmering.  Continue to simmer for 1.5 to 2 hours, stirring occasionally.",
				],
				diets: ["Dairy free"],
			},
			{
				id: 716311,
				title: "Mango Fried Rice",
				image: "https://spoonacular.com/recipeImages/716311-312x231.jpg",
				summary:
					"Mango Fried Rice is a Chinese main course. This recipe makes 2 servings with 486 calories, 16g of protein, and 4g of fat each. For $1.51 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. Several people made this recipe, and 262 would say it hit the spot. Head to the store and pick up scotch bonnet pepper, seasoning cubes, rice, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Afrolems. It is a good option if you're following a gluten free and dairy free diet. Overall, this recipe earns a great spoonacular score of 94%. Mango-Pork Fried Rice, Thai Beef & Mango Fried Rice, and Thai Chicken and Mango Fried Rice are very similar to this recipe.",
				healthScore: 45,
				steps: [
					"Wash your rice and bring to boil on medium heat with very little water as you are still going to cook it in chicken stock.Once the rice is slightly soft and the initial water has dried up, reduce the heat and pour in the chicken stock and cook till the chicken stock is all absorbed and has dried up. The chicken stock if freshly made will have some oil from the chicken so your rice does not need oil.Increase the heat and stir in the chopped vegetables and pepper.",
					"Add your seasoning cube.Finally stir in your cubed mango and serve warm with any protein of your choice. I’d say chicken but it’s up to you.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 715543,
				title: "Homemade Guacamole",
				image: "https://spoonacular.com/recipeImages/715543-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your recipe box, Homemade Guacamole might be a recipe you should try. For 92 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. This recipe makes 4 servings with 170 calories, 2g of protein, and 15g of fat each. It is an inexpensive recipe for fans of Mexican food. Many people really liked this hor d'oeuvre. This recipe from Pink When has 1330 fans. A mixture of roma tomato, onion, pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 97%, this dish is amazing. Similar recipes are Homemade Guacamole, Homemade Guacamole, and Homemade Guacamole.",
				healthScore: 34,
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 157344,
				title: "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
				image: "https://spoonacular.com/recipeImages/157344-312x231.jpg",
				summary:
					"You can never have too many main course recipes, so give Spicy Salad with Kidney Beans, Cheddar, and Nuts a try. For $4.58 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. One serving contains 719 calories, 27g of protein, and 49g of fat. This recipe serves 1. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 10 minutes. Head to the store and pick up kidney beans, greens, cheddar cheese, and a few other things to make it today. It is brought to you by spoonacular user coffeebean. If you like this recipe, take a look at these similar recipes: Spicy Salad with Kidney Beans, Cheddar, and Nuts, Spicy Salad with Kidney Beans, Cheddar, and Nuts, and Spicy Salad with Kidney Beans, Cheddar, and Nuts.",
				healthScore: 78,
				steps: [
					"Rinse and drain the kidney beans, cut the sundried tomatoes, and tear the slice of cheese into small pieces.",
					"Put the mixed greens in a bowl and top with kidney beans, sundried tomatoes, cheddar cheese, and nuts.",
					"Mix together the olive oil, balsamic vinegar, and hot sauce in a small bowl.",
					"Pour the dressing over the salad.",
					"Fast, easy, and healthy-- one of my favorite lunches!",
				],
				diets: ["Gluten free", "Lacto ovo vegetarian"],
			},
			{
				id: 658509,
				title: "Roasted Broccoli with Lemon and Garlic",
				image: "https://spoonacular.com/recipeImages/658509-312x231.jpg",
				summary:
					"Roasted Broccoli with Lemon and Garlic is a side dish that serves 4. One portion of this dish contains approximately 3g of protein, 2g of fat, and a total of 58 calories. For 30 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. If you have lemon juice, ground pepper, salt, and a few other ingredients on hand, you can make it. 11 person have tried and liked this recipe. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is awesome. If you like this recipe, you might also like recipes such as Roasted Broccoli with Lemon and Garlic, Roasted Broccoli with Lemon and Garlic, and Roasted Garlic Lemon Broccoli.",
				healthScore: 70,
				steps: [
					"Preheat the oven to 400 degrees FIn a large bowl, add broccoli florets, olive oil, salt, pepper and garlic.",
					"Spread the broccoli out in an even layer on a baking sheet.",
					"Bake in the preheated oven until broccoli is tender enough to pierce the stems with a fork, 15 to 20 minutes.",
					"Remove and place in a bowl, toss with lemon juice.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 716195,
				title: "Spicy Indian-Style Hummus",
				image: "https://spoonacular.com/recipeImages/716195-312x231.jpg",
				summary:
					"You can never have too many middl eastern recipes, so give Spicy Indian-Style Hummus a try. For 44 cents per serving, you get a hor d'oeuvre that serves 12. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 134 calories, 5g of protein, and 6g of fat per serving. This recipe from foodandspice.blogspot.com has 161 fans. From preparation to the plate, this recipe takes about 45 minutes. Head to the store and pick up turmeric, chilies, sea salt, and a few other things to make it today. With a spoonacular score of 96%, this dish is outstanding. Users who liked this recipe also liked Indian Style Spicy Couscous, Red onion & Indian-spiced hummus, and Indian-Style Coleslaw.",
				healthScore: 40,
				steps: [
					"Rinse the chickpeas and soak for 8 hours or overnight covered in several inches of water with a little yogurt whey or lemon juice added.",
					"Drain and rinse, then transfer to a large saucepan.  Cover with several inches of fresh water, bring to a boil, reduce the heat to medium-low and cover.  Simmer for 1 to 1 1/2 hours or until the beans are buttery soft.",
					"Drain.In a food processor, combine all of the ingredients and process until you have a thick, smooth paste. You may need to add extra olive oil or a bit of water if you want a thinner paste. Makes 3 cups, nutrition information is based on 1/4 cup serving.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 716361,
				title: "Stir Fried Quinoa, Brown Rice and Chicken Breast",
				image: "https://spoonacular.com/recipeImages/716361-312x231.jpg",
				summary:
					"You can never have too many main course recipes, so give Stir Fried Quinoa, Brown Rice and Chicken Breast a try. This recipe serves 1 and costs $3.58 per serving. One serving contains 750 calories, 58g of protein, and 20g of fat. 39 people were impressed by this recipe. If you have cherry tomatoes, spring onion, butter, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free diet. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is tremendous. Try Stir-fried chicken with broccoli & brown rice, Stir-Fried Broccoli with Brown Rice {Meat Optional}, and Stir-fried Chickpeas And Asparagus With Brown Rice And Lemon Ta for similar recipes.",
				healthScore: 66,
				steps: [
					"In a bowl, season the chicken breast with the seasoning cubes and suya spice and allow to marinate for 2 hours or if you are really hungry, you can use immediately.In a pot of boiling water (1 cup), pour in your quinoa mix and the teaspoon of oil and allow to boil till soft which should take about 5-7 minutes.",
					"Pour into a bowl and set aside.In a pan, heat up the melted butter and pan fry on medium heat the chicken breast, constantly flipping it over so it browns on both sides, reduce the heat, cover the pan and allow the chicken cook properly. If the pan becomes to dry, add 2 tablespoons of water.Stir in the chopped vegetables into the pan of frying chicken and finally add the quinoa/brown rice mix.",
					"Serve hot!     ",
				],
				diets: ["Gluten free"],
			},
			{
				id: 765011,
				title: "Snap Pea and Green Bean Salad with Arugula Pesto",
				image: "https://spoonacular.com/recipeImages/765011-312x231.jpg",
				summary:
					"If you want to add more gluten free, lacto ovo vegetarian, and primal recipes to your recipe box, Snap Pean and Green Bean Salad with Arugula Pesto might be a recipe you should try. This side dish has 314 calories, 12g of protein, and 22g of fat per serving. This recipe serves 6. For $2.22 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe is liked by 127 foodies and cooks. Head to the store and pick up wax beans, basil leaves, cilantro, and a few other things to make it today. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is amazing. If you like this recipe, take a look at these similar recipes: Snap Peas and Green Beans with Arugula-Mint Pesto, Snap Peas and Green Beans with Arugula-Mint Pesto, and Snap Peas and Green Beans with Arugula-Mint Pesto.",
				healthScore: 49,
				steps: [
					"Bring a large pot of salted water to a boil.While your water is coming to a boil, prepare your arugula pesto and cilantro cream drizzle.In the bowl of your food processor, add the almonds, pistachios, garlic, lemon zest, baby arugula and basil leaves. Pulse 8-9 times until completely broken up. With the food processor running, slowly pour in the olive oil until the pesto just comes together. Season to taste with salt and black pepper and transfer to a large bowl.In the same food processor bowl (wipe clean if you wish), combine the yogurt and cilantro. Pulse until the two ingredients come together. Season to taste with salt and black pepper and set aside.Have an ice bath ready.",
					"Add the snap peas and beans to the boiling water and blanch for about 1 minute and 30 seconds.",
					"Drain and transfer immediately to the ice bath to cool down.",
					"Drain again once the veggies are cool, and pat them dry.",
					"Add the veggies to the bowl with the pesto and toss to coat.",
					"Pour the veggies onto a large platter and drizzle with the cilantro cream. Top with micro greens and sliced almonds. Enjoy immediately or place in the refrigerator to chill.",
				],
				diets: ["Gluten free", "Lacto ovo vegetarian", "Primal"],
			},
			{
				id: 660228,
				title: "Skinny Kale Basil Pesto",
				image: "https://spoonacular.com/recipeImages/660228-312x231.jpg",
				summary:
					"Skinny Kale Basil Pesto requires about 45 minutes from start to finish. For $1.06 per serving, you get a condiment that serves 3. Watching your figure? This gluten free recipe has 81 calories, 4g of protein, and 5g of fat per serving. A few people made this recipe, and 10 would say it hit the spot. It is brought to you by Foodista. A mixture of parmesan cheese, olive oil, walnuts, and a handful of other ingredients are all it takes to make this recipe so delicious. With a spoonacular score of 97%, this dish is great. Kale Basil Mint Parsley Pesto, Kale Basil Mint Parsley Pesto, and Kale, Spinach and Basil Pesto Baked Pasta are very similar to this recipe.",
				healthScore: 81,
				steps: [
					"Remove the kale and basil leaves from the stem and rinse.",
					"Roughly chop the kale leaves so that they fit inside a food processor.",
					"Place the kale and basil leaves into a food processor and chop until the leaves turn into small pieces.",
					"Add the rest of the ingredients into the food processor and mix until everything is well blended.",
					"Pour out all the ingredients into a dish and enjoy with your favorite dishes!",
				],
				diets: ["Gluten free"],
			},
			{
				id: 716408,
				title: "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
				image: "https://spoonacular.com/recipeImages/716408-312x231.jpg",
				summary:
					"Greek-Style Baked Fish: Fresh, Simple, and Delicious might be just the Mediterranean recipe you are searching for. For $3.04 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. One portion of this dish contains roughly 28g of protein, 12g of fat, and a total of 343 calories. This recipe serves 4. Plenty of people made this recipe, and 396 would say it hit the spot. It works well as a main course. Head to the store and pick up pepper, white wine, basil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. It is a good option if you're following a gluten free and pescatarian diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns a tremendous spoonacular score of 98%. Similar recipes are Simple Greek Style Baked Fish, Greek Style Baked Fish, and Delicious Greek Pastitsio {Casserole-Style}.",
				healthScore: 42,
				steps: [
					"Preheat the oven to 450 degrees F. Choose an oven-proof baking dish that your fish will fit in without overlapping and spray it with cooking spray.",
					"Lay the fish fillets in the baking pan in a single layer, season with salt and pepper, then top the fish with red onion and bell pepper.",
					"Sprinkle with dried basil and oregano, the tomato, and the feta cheese, then drizzle the white wine and olive oil over top. Grind some fresh pepper over the top.",
					"Bake uncovered for about 12 – 15 minutes or until the fish flakes easily with a fork. Squeeze the lemon wedges over the cooked fish, garnish with the fresh basil and/or oregano and serve with hot cooked rice.",
				],
				diets: ["Gluten free", "Pescatarian"],
			},
			{
				id: 661340,
				title: "Spinach Salad with Strawberry Vinaigrette",
				image: "https://spoonacular.com/recipeImages/661340-312x231.jpg",
				summary:
					"Need a gluten free and primal main course? Spinach Salad with Strawberry Vinaigrette could be a great recipe to try. This recipe makes 1 servings with 322 calories, 22g of protein, and 13g of fat each. For $3.39 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. A mixture of water, balsamic vinegar, ground pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your Mother's Day event. 15 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, take a look at these similar recipes: Strawberry Avocado Spinach Salad with Strawberry Vinaigrette, Strawberry Avocado Spinach Salad with Strawberry Vinaigrette, and Spinach Strawberry Salad with Strawberry Vinaigrette.",
				healthScore: 79,
				steps: ["Place everything on a plate!  :)"],
				diets: ["Gluten free", "Primal"],
			},
			{
				id: 782622,
				title: "Chocolate Peanut Butter Cinnamon Smoothie",
				image: "https://spoonacular.com/recipeImages/782622-312x231.png",
				summary:
					"Chocolate Peanut Butter Cinnamon Smoothie is a gluten free, dairy free, and fodmap friendly breakfast. This recipe serves 1 and costs $1.5 per serving. One portion of this dish contains roughly 27g of protein, 21g of fat, and a total of 420 calories. If you have ice cubes, banana, jif cinnamon peanut butter, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. Only a few people really liked this Southern dish. 5 people found this recipe to be tasty and satisfying. It is brought to you by fullbellysisters.blogspot.com. With a spoonacular score of 96%, this dish is super. Cinnamon Apple Peanut Butter Smoothie, Peanut Butter Chocolate Chip Protein Smoothie with Kura Smoothie Starter, and Chocolate-Peanut butter Smoothie are very similar to this recipe.",
				healthScore: 100,
				diets: ["Dairy free", "Fodmap friendly", "Gluten free"],
			},
			{
				id: 715424,
				title: "The Best Chili",
				image: "https://spoonacular.com/recipeImages/715424-312x231.jpg",
				summary:
					"Need a gluten free and dairy free main course? The Best Chili could be an excellent recipe to try. This recipe makes 8 servings with 326 calories, 33g of protein, and 7g of fat each. For $2.07 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe from Pink When has 32767 fans. The Super Bowl will be even more special with this recipe. From preparation to the plate, this recipe takes roughly 2 hours and 10 minutes. This recipe is typical of American cuisine. If you have tomato paste, oregano, cumin, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is excellent. If you like this recipe, take a look at these similar recipes: 5th Annual Chili Contest: Entry – Chili Con Carne y Frijoles, 5th Annual Chili Contest: Entry – Chili Mac + Weekly Menu, and 10th Annual Chili Contest: Entry – Weeknight White Chicken Chili.",
				healthScore: 33,
				steps: [
					"Brown the lean ground beef in a deep skillet. Cook over medium heat until cooked all the way through, and then drain.In a large pan over high heat add in all of your additional ingredients: cooked ground beef, tomato juice, kidney beans, pinto beans, water, tomato paste, chili powder, cumin, black pepper, oregano, sugar, cayenne pepper, bell pepper, and chopped onions.Bring to a boil.Once your large pot of chili has started to boil, lower the heat and simmer for 2 hours uncovered.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 659135,
				title: "Salmon with roasted vegetables",
				image: "https://spoonacular.com/recipeImages/659135-312x231.jpg",
				summary:
					"Salmon with roasted vegetables takes approximately 45 minutes from beginning to end. For $5.2 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe serves 2. One serving contains 496 calories, 39g of protein, and 18g of fat. Head to the store and pick up lemon juice, salt, carrot, and a few other things to make it today. Not a lot of people made this recipe, and 7 would say it hit the spot. It works well as a main course. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 94%. If you like this recipe, take a look at these similar recipes: Roasted Salmon & Vegetables, Roasted Salmon & Vegetables, and Salmon with roasted vegetables.",
				healthScore: 100,
				steps: [
					"Season the salmon fillets with some salt, pepper and a pinch of paprika and keep aside.",
					"Preheat the oven to 200 C.  Roughly dice the potatoes, parsnips and carrots and add to a roasting tray.",
					"Drizzle over the olive oil and season with salt and pepper.",
					"Mix well and roast for 15 minutes.",
					"Add in the onion and roast for a further 10-15 minutes",
					"Place the salmon fillets and tomatoes between the veg.",
					"Drizzle the lemon juice and sprinkle over the rosemary and thyme. Season lightly with salt and pepper and roast for 10-15 minutes or until the salmon and veg is cooked through.",
					"Serve with some green salad.",
				],
				diets: ["Dairy free", "Gluten free", "Pescatarian", "Whole 30"],
			},
			{
				id: 639851,
				title: "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
				image: "https://spoonacular.com/recipeImages/639851-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, and whole 30 recipes to your collection, Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes might be a recipe you should try. This recipe serves 2 and costs $6.26 per serving. This main course has 733 calories, 56g of protein, and 40g of fat per serving. This recipe is liked by 14 foodies and cooks. Head to the store and pick up lemon juice, parsley leaves, parsley, and a few other things to make it today. It is perfect for Thanksgiving. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, you might also like recipes such as Cod Stew With Chorizo, Leeks & Potatoes, Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes, and Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes.",
				healthScore: 83,
				steps: [
					"If frozen, thaw completely the cod fillets, and dry them with paper towels. season with salt and set aside.Peel and quarter the potatoes, and cook in lightly salted water until tender.Meanwhile, fry the pepper in olive oil for 3-4 minutes.",
					"Add cubed sausage, saut for another 2-3 minutes.",
					"Add the whole plum tomatoes,  halve them with a flat end of a wooden spoon.Stir in olives and parsley, cook the sauce gently for 2 minutes. Set aside.",
					"Drain the potatoes and season with parsley, olive oil and lemon juice. Use a hand masher to mix and mash. Leave in a warm place.",
					"Place the cod fillets into a hot oiled non-stick pan and cook over a high heat for 5 minutes on each side or until golden brown.",
					"Serve with mashed potatoes and sauce.",
				],
				diets: ["Dairy free", "Gluten free", "Whole 30"],
			},
			{
				id: 664547,
				title: "Vegetable Dip",
				image: "https://spoonacular.com/recipeImages/664547-312x231.jpg",
				summary:
					"Vegetable Dip might be just the hor d'oeuvre you are searching for. This recipe serves 3. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has 210 calories, 16g of protein, and 4g of fat per serving. For $1.84 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. It will be a hit at your The Super Bowl event. If you have vegetables, onion, lowfat yogurt, and a few other ingredients on hand, you can make it. Overall, this recipe earns a spectacular spoonacular score of 96%. Vegetable Dip, Italian Vegetable Dip, and Roasted Vegetable Dip are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"In a medium bowl combine all ingredients (except raw vegetables for dipping). Cover and refrigerate until ready to serve.",
					"Serve as a dip for raw vegetables. Makes approximately 3 cups.",
				],
				diets: ["Gluten free", "Lacto ovo vegetarian", "Primal"],
			},
			{
				id: 633921,
				title: "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
				image: "https://spoonacular.com/recipeImages/633921-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, and pescatarian recipes to your recipe box, Balsamic & Honey Glazed Salmon with Lemony Asparagus might be a recipe you should try. For $4.44 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 25g of protein, 14g of fat, and a total of 301 calories. This recipe serves 2. 28 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly 1 hour. It is brought to you by Foodista. It works well as a pretty expensive main course. Head to the store and pick up juice of lemon, herbs de provence, salmon fillet, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is great. If you like this recipe, take a look at these similar recipes: Balsamic & Honey Glazed Salmon with Lemony Asparagus, Balsamic & Honey Glazed Salmon with Lemony Asparagus, and Balsamic & Honey Glazed Salmon with Lemony Asparagus.",
				healthScore: 82,
				steps: [
					"In a small mixing bowl or blender, combine all of the ingredients for the balsamic marinade except for the lemon juice (balsamic vinegar, apple cider vinegar, 1 tbsp grapeseed oil, honey, dried dill, herbs de provence, salt and pepper).",
					"Whisk or blend until oil and vinegar are well incorporated and no longer separate.",
					"Place salmon fillet in a baking dish (I use a small casserole dish).",
					"Pour the marinade over the salmon and allow it to marinate for at least 15 minutes (or up to 24 hours covered in the refrigerator).  Turn your oven on high broil. Just before putting the salmon in the oven, drizzle the lemon juice over the fish.",
					"Bake for 10 to 12 minutes on the top rack or until salmon is glazed, browned and sizzling.While the salmon is baking, prepare the asparagus.  Wash the asparagus and cut off the bottom inch and a half of each stalk and discard.",
					"Spread the asparagus on in a large skillet.",
					"Drizzle the grapeseed oil over the asparagus and spread the oil on the asparagus with your hands so that all stalks are completely coated.",
					"Sprinkle asparagus with desired amount of salt and pepper.",
					"Saute over medium heat for 5 minutes.",
					"Add the two tablespoons of vegetable stock and cover the skillet.",
					"Saute 4 minutes.",
					"Remove lid and add the minced garlic.",
					"Place cover back over the asparagus. Continue cooking an additional 3 to 5 minutes until asparagus is cooked but not too soft.  Grate lemon zest over the top of the asparagus.",
				],
				diets: ["Dairy free", "Gluten free", "Pescatarian"],
			},
			{
				id: 658579,
				title: "Roasted Endive Salad With Prosciutto, Figs and Pistachios",
				image: "https://spoonacular.com/recipeImages/658579-312x231.jpg",
				summary:
					"Roasted Endive Salad With Prosciutto, Figs and Pistachios might be just the main course you are searching for. One serving contains 388 calories, 14g of protein, and 10g of fat. For $3.66 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe serves 4. It is brought to you by Foodista. 6 people were glad they tried this recipe. If you have pistachio nuts, olive oil, figs, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an outstanding spoonacular score of 96%. Similar recipes are Frisée Salad with Prosciutto, Roasted Figs, and Walnuts, Chicory and Endive Salad with Spiced Pistachios, and Prosciutto Roasted Figs.",
				healthScore: 100,
				steps: [
					"Preheat your oven (*ding, this is a great toaster oven candidate) to 350F.  Line a rimmed baking sheet with aluminum foil.",
					"Wash the endive and remove any unsightly outer leaves.  Slice each endive head in half from the stem to the tip.  Arrange the endive cut side up on the foil-lined baking sheet.  Coat the endive generously with olive oil.",
					"Bake at 350F for 30 minutes, or until the outer edges are golden brown.",
					"Meanwhile, fry the prosciutto in a skillet until crispy.",
					"Drain onto paper towels, then crumble the prosciutto and set it aside.",
					"When the endive is done roasting, arrange three pieces on a plate alongside a handful of sliced dried figs and pistachio nuts.",
					"Drizzle a spoonful of honey over the plate, then sprinkle the endive with about 1/4th of the crumbled prosciutto.",
				],
				diets: ["Dairy free", "Gluten free", "Paleolithic", "Primal"],
			},
			{
				id: 715385,
				title: "Slow Cooker Baked Potato Soup",
				image: "https://spoonacular.com/recipeImages/715385-312x231.jpg",
				summary:
					"Slow Cooker Baked Potato Soup might be a good recipe to expand your main course collection. This recipe serves 3. One portion of this dish contains approximately 35g of protein, 33g of fat, and a total of 884 calories. For $2.83 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. 992 people were glad they tried this recipe. It is brought to you by Pink When. It is perfect for Autumn. If you have green onion tops, cream, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 9 hours. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is excellent. Try Slow cooker baked potato soup, Slow Cooker Baked Potato Soup, and Slow Cooker Baked Potato Soup for similar recipes.",
				healthScore: 45,
				steps: [],
				diets: [],
			},
			{
				id: 641057,
				title: "Curried Butternut Squash and Apple Soup",
				image: "https://spoonacular.com/recipeImages/641057-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, lacto ovo vegetarian, and vegan recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For $1.41 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains 134 calories, 7g of protein, and 3g of fat. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for Autumn. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns an awesome spoonacular score of 89%. Similar recipes include Curried Apple + Butternut Squash Soup, Curried Butternut Squash and Apple Soup, and Curried Butternut Squash & Apple Soup - Crock Pot.",
				healthScore: 81,
				steps: [
					"Get ready two small saucepans.",
					"In one have together 1/2 of the squash and 1/2 of the apple  bring to a simmer, and simmer until just tender when pierced with a fork.",
					"In the other, add in the rest of the vegetables along with 1 cup of water  bring this to a rolling boil, reduce to a simmer, and simmer until very very tender. When very tender, remove the vegetables from the heat, and blend these vegetables together (without draining) with the Braggs, spices, sriracha and the additional 1/2 cup water.",
					"Mix the blended part of the soup with the simmered squash and apples.",
					"Mix in the cubed tofu, gently re-heat and serve.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 655575,
				title: "Penne Pasta with Broccoli and Cheese",
				image: "https://spoonacular.com/recipeImages/655575-312x231.jpg",
				summary:
					"Penne Pasta with Broccoli and Cheese might be just the main course you are searching for. This recipe serves 4 and costs 66 cents per serving. One portion of this dish contains roughly 13g of protein, 2g of fat, and a total of 269 calories. From preparation to the plate, this recipe takes around 45 minutes. Not a lot of people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. If you have ground pepper, water, chicken broth, and a few other ingredients on hand, you can make it. With a spoonacular score of 94%, this dish is awesome. Try Penne Pasta with Broccoli and Cheese, Penne Pasta with Broccoli and Cheese, and Cheesy Broccoli Penne Pasta for similar recipes.",
				healthScore: 100,
				steps: [
					"In a large pot add water and bring to a boil.",
					"Add pasta and cook until done, about 6 minutes.",
					"Meanwhile, heat the broth, basil, black pepper, garlic and broccoli in a large skillet over medium heat bring to a boil. Reduce the heat to low. Cover and cook until the broccoli is tender-crisp.",
					"Add the pasta to the broccoli mixture and toss to coat.",
					"Add cheese to the pasta mixture",
					"Serve and enjoy!",
					"Makes 4 servings, about 2 cups or so",
					"Calories per serving:  235,  Fat:  2.",
					"Cholesterol:  5,  Sodium:  138,  Carbs:  40.3,  Fiber:  8.5,  Sugar:  3.3,  Protein:  12",
				],
				diets: [],
			},
			{
				id: 632269,
				title: "Amaranth and Roast Veggie Salad",
				image: "https://spoonacular.com/recipeImages/632269-312x231.jpg",
				summary:
					"Amaranth and Roast Veggie Salad could be just the gluten free, dairy free, lacto ovo vegetarian, and vegan recipe you've been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d'oeuvre has 361 calories, 9g of protein, and 18g of fat per serving. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an outstanding spoonacular score of 95%. If you like this recipe, take a look at these similar recipes: Mum’s Roast Veggie Salad, amaranth yogurt parfait – popped amaranth parfait with fruits, and amaranth yogurt parfait – popped amaranth parfait with fruits.",
				healthScore: 100,
				steps: [
					"Cook the amaranth with about a cup of water until it reaches a sticky consistency",
					"Cut the onion roughly into chunks",
					"Add the onion and diced pumpkin to a tinfoil lined baking tray",
					"Drizzled over the olive oil and sprinkle with the herbal salt and pepper",
					"Put into a hot oven and roast until the edges of the pumpkin go crispy",
					"Just before the veggies are done, throw in the baby tomatoes",
					"Coat the veggies in the cooked amaranth",
					"Tear a few rocket leaves",
					"Toss together and there you have it, an unusual roast veggie salad!",
					"Serve warm",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 637162,
				title: "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
				image: "https://spoonacular.com/recipeImages/637162-312x231.jpg",
				summary:
					"If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about 6g of protein, 10g of fat, and a total of 222 calories. For $1.4 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly 25 minutes. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 96%. If you like this recipe, you might also like recipes such as Carrot and Cabbage Salad With Coriander+cumin Dry Rub, Carrot and Cabbage Salad With Coriander+cumin Dry Rub, and Carrot and Cabbage Salad With Coriander+cumin Dry Rub.",
				healthScore: 100,
				steps: [
					"Chop up the carrots and the cabbage into slivers of roughly the same size.",
					"Add the ground coriander, cumin seed, lime juice, and olive oil and massage it into the veggies.",
					"Add the fresh coriander and sunflower seeds on top.Leave aside for a couple of hours for the spices to seep into the veggies for added flavor.",
				],
				diets: [
					"Dairy free",

					"Fodmap friendly",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 982371,
				title: "Instant Pot Quinoa Grain Bowl",
				image: "https://spoonacular.com/recipeImages/982371-312x231.jpg",
				summary:
					"Instant Pot Quinoa Grain Bowl might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 416 calories, 16g of protein, and 10g of fat per serving. This recipe serves 4 and costs $3.02 per serving. From preparation to the plate, this recipe takes roughly 13 minutes. A mixture of baby brussell sprouts, broccoli, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person has made this recipe and would make it again. It is brought to you by Pink When. With a spoonacular score of 96%, this dish is super. Users who liked this recipe also liked Instant Pot Quinoa Grain Bowl, Instant Pot Sausage Cabbage Bowl with Quinoa (or Stovetop), and Crock Pot Chicken Fajita Bowl (Grain-Free, Paleo).",
				healthScore: 100,
				steps: [
					"Rinse and drain the quinoa to remove the bitter and sometimes mildly soapy taste that can linger if not rinsed.",
					"Combine the quinoa, stock and seasonings in the Instant Pot together and then twist to lock the lid shut. Set the pot to Manual for 1 minute.",
					"At the end of the cook time, let the pot to natural pressure release for 10 minutes before carefully releasing the remaining pressure.",
					"Fluff the cooked quinoa with a fork. Now you have Instant Pot Quinoa!",
					"Add fruits and vegetables over a scoop of cooked quinoa and make an amazing quinoa grain bowl.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 1095753,
				title: "Roasted Cauliflower Detox Bowl with Tahini Sauce",
				image: "https://spoonacular.com/recipeImages/1095753-312x231.jpg",
				summary:
					"Roasted Cauliflower Detox Bowl with Tahini Sauce might be just the main course you are searching for. One serving contains 549 calories, 18g of protein, and 30g of fat. This recipe serves 2 and costs $3.06 per serving. 1 person were glad they tried this recipe. A mixture of kale leaves, garlic, ground cumin, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 50 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is awesome. Quinoa Bowl with Roasted Cauliflower and Tahini Dressing, Quinoa Bowl with Roasted Cauliflower and Tahini Dressing, and Roasted Cauliflower with Tahini Sauce are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"Soak the cashews overnight in water.Preheat the oven to 200C/~395 F. Chop the cauliflower into florets and toss with the olive oil and ground cumin. Roast for 20-25 minutes until golden.To make the sauce, add all ingredients except the water and salt to a food processor. While blending, drizzle in the water a little at a time until the sauce starts to become smooth. Continue processing, scraping down the sides or adding additional water as needed, until the sauce is as smooth as your food processor can make it.",
					"Add salt to taste.Boil the quinoa in a saucepan for 10 minutes then drain and set aside. Meanwhile, chop the kale and red cabbage into thin strips and saute in a frying pan with the minced garlic clove over a medium heat until wilted.",
					"Add in the quinoa and toss so everything is mixed together.",
					"Place some of the kale mixture in the bottom of a bowl and top with sliced avocado, some of the roasted cauliflower, a drizzle of the tahini sauce and if desired, sprinkle some cress on the top.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 660405,
				title: "Smoky Black Bean Soup With Sweet Potato & Kale",
				image: "https://spoonacular.com/recipeImages/660405-312x231.jpg",
				summary:
					"You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains 555 calories, 23g of protein, and 7g of fat. This recipe serves 6. For $2.62 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around 10 hours and 30 minutes. It can be enjoyed any time, but it is especially good for Autumn. It is a good option if you're following a gluten free, dairy free, and lacto ovo vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is amazing. Similar recipes include Smoky Sweet Potato and Black Bean Tacos, Smoky Sweet Potato and Black Bean Tacos, and Sweet and Smoky Sriracha Black Bean Soup.",
				healthScore: 100,
				steps: [
					"Spread the dry beans out on a baking sheet and pick out any pebbles.",
					"Place the beans in a big soup pot, cover with water by 3 inches and allow them to soak overnight or for 6-8 hours, then discard that water. Return the soaked beans to the pot and cover with 3 inches of water again, bring to a boil. Reduce heat to medium low, put the cover on and allow to cook until the beans start to get tender but still firm, about 1 1/2 hours.",
					"Drain the beans.",
					"Heat the oil in a soup pot over med-high heat.",
					"Add the onion along with a pinch of salt and saute until softened and golden. Stir in 1 tbsp of ground cumin, add the beans along with the broth or water and bring to a boil. Reduce heat to medium-low, cover and cook for 30 min. Meanwhile peel and chop the sweet potatoes. Wash the kale, remove the stems and chop the leaves.",
					"Remove half of the beans and liquid and set aside to cool a bit.",
					"Add the sweet potatoes and kale to the pot with some salt and pepper. Cover and cook for 10 minutes.",
					"Transfer the cooled beans to a blender and puree until smooth, then return them to the pot. Stir in the remaining 1 tbsp of ground cumin. Now add 1 tbsp of the chipotles in adobo. Taste and continue to add more until it has a spice level that you like. Adjust the salt &amp; pepper as needed.",
					"Serve with a dollop of sour cream.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian"],
			},
			{
				id: 715523,
				title: "Chorizo and Beef Quinoa Stuffed Pepper",
				image: "https://spoonacular.com/recipeImages/715523-312x231.jpg",
				summary:
					"Chorizo and Beef Quinoa Stuffed Pepper is a gluten free main course. One portion of this dish contains approximately 51g of protein, 37g of fat, and a total of 685 calories. This recipe serves 4 and costs $3.69 per serving. Plenty of people made this recipe, and 1254 would say it hit the spot. It is brought to you by Pink When. If you have bell peppers, chorizo, chili powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 30 minutes. With a spoonacular score of 93%, this dish is super. Similar recipes include Pepper-Stuffed Peppers with Chorizo, Chorizo & Red Pepper Stuffed Potatoes With Roasted Garlic Aioli, and QUINOAn AND GROUND TURKEY STUFFED PEPPER.",
				healthScore: 34,
				steps: [
					"The first thing you will want to do is heat the oven to 350, boil the water for the quinoa, and in a separate skillet brown the beef and chorizo together.",
					"Drain the meat mixture well, and then place into a medium mixing bowl.Once your quinoa is fully cooked, add it to the mixing bowl.",
					"Add the green onion tops, cumin, cayenne, chili powder, and monterrey jack and cheddar cheese.",
					"Mix well.",
					"Cut the tops from your bell peppers and scoop out any remaining seeds.Then take your meat mixture and start stuffing the bell peppers until they are full.",
					"Sprinkle with a little cheese and then bake in the oven for about 10 minutes until the bell pepper has softened.",
					"Serve immediately.",
				],
				diets: ["Gluten free"],
			},
			{
				id: 632252,
				title: "Alouette® Stuffed Mushroom Caps",
				image: "https://spoonacular.com/recipeImages/632252-312x231.jpg",
				summary:
					"You can never have too many hor d'oeuvre recipes, so give Alouette® Stuffed Mushroom Caps a try. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has 30 calories, 2g of protein, and 0g of fat per serving. This recipe serves 8. For $1.5 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about 45 minutes. A couple people made this recipe, and 11 would say it hit the spot. Head to the store and pick up seasoned bread crumbs, mushroom caps, alouette spinach & artichoke spread, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is great. Try Stuffed Mushroom Caps, Stuffed Mushroom Caps, and Stuffed White Mushroom Caps for similar recipes.",
				healthScore: 52,
				steps: [
					"Preheat oven to 375 F.",
					"Place mushroom caps hollow side up on baking sheet. Fill each cap with 1 tsp. Alouette Garlic & Herbs",
					"Spreadable Cheese and sprinkle with seasoned bread crumbs.",
					"Bake 12-15 minutes.",
					"Garnish and serve.",
				],
				diets: ["Dairy free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 639891,
				title: "Coffee-braised Short Ribs",
				image: "https://spoonacular.com/recipeImages/639891-312x231.jpg",
				summary:
					"Need a gluten free and dairy free main course? Coffee-braised Short Ribs could be a great recipe to try. One portion of this dish contains approximately 74g of protein, 42g of fat, and a total of 877 calories. For $7.05 per serving, this recipe covers 64% of your daily requirements of vitamins and minerals. This recipe serves 5. 6 people have made this recipe and would make it again. A mixture of strong freshly coffee, short, brown sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 90%, which is spectacular. If you like this recipe, take a look at these similar recipes: Coffee-Braised Short Ribs, Coffee-braised Short Ribs, and Coffee-Braised Short Ribs.",
				healthScore: 100,
				steps: [
					"Food",
					"Preheat oven to 300F.",
					"Heat oil in a large heavy stockpot over medium-high heat.",
					"Sprinkle short ribs with salt and pepper. Working in batches, add ribs to pot and cook until browned, about 4 minutes per side.",
					"Transfer to platter.",
					"Add onion, red bell pepper, and jalapeo to drippings in stockpot. Reduce heat to medium, cover, and cook until onion is tender, stirring occasionally, about 6 minutes.Stir in garlic and saut uncovered 1 minute.",
					"Add brown sugar, ancho chile powder, oregano, and cumin; stir 15 seconds. Stir in coffee, tomatoes with juice, and tomato paste. Bring to boil, scraping up browned bits. Return ribs and any juices to pot; bring to boil.Cover and bake until meat is very tender, about 1 hour 45 minutes. Spoon fat from surface of sauce. Season sauce to taste with salt and pepper.",
					"Transfer ribs to a platter and spoon sauce over top.",
					"Sprinkle with chopped cilantro.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 646651,
				title: "Herb chicken with sweet potato mash and sautéed broccoli",
				image: "https://spoonacular.com/recipeImages/646651-312x231.jpg",
				summary:
					"Herb chicken with sweet potato mash and sautéed broccoli might be a good recipe to expand your main course recipe box. One portion of this dish contains roughly 47g of protein, 25g of fat, and a total of 710 calories. For $3.13 per serving, this recipe covers 50% of your daily requirements of vitamins and minerals. This recipe serves 4. 9 people have made this recipe and would make it again. Head to the store and pick up broccoli, butter, pepper and salt, and a few other things to make it today. It is a good option if you're following a gluten free diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is awesome. Try Herb chicken with sweet potato mash and sautéed broccoli, Herb chicken with sweet potato mash and sautéed broccoli, and Herb chicken with sweet potato mash and sautéed broccoli for similar recipes.",
				healthScore: 81,
				steps: [
					"Preheat the oven to 350F (180C) or 320F (160C) for convection oven and cook the chicken according to the pack instructions. About 15 minutes before the end of the chicken cooking time, place the diced potato into boiling water for 5 minutes, then add the sweet potato and cook until the potatoes are tender. Roughly mash, adding butter, salt, and pepper to taste, then mash thoroughly.",
					"Heat the oil in a pan and quickly saut the broccoli until tender. Cover to keep warm.",
					"Remove the chicken from the oven, leave to cool for a minute then cut the bag open and gently tip the contents into a dish. Slice the chicken breasts into chunky pieces on a board, keeping the chicken breast shape together.",
					"Serve the mash potato topped with the chicken and remaining sauce with a side of broccoli.",
				],
				diets: ["Gluten free"],
			},
			{
				id: 716330,
				title: "Chicken and Mango Skewer",
				image: "https://spoonacular.com/recipeImages/716330-312x231.jpg",
				summary:
					"Chicken and Mango Skewer takes roughly 45 minutes from beginning to end. This recipe serves 1 and costs $4.51 per serving. One portion of this dish contains about 31g of protein, 8g of fat, and a total of 479 calories. It is brought to you by Afrolems. A few people made this recipe, and 19 would say it hit the spot. A mixture of pepper, suya seasoning mix, mangos, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a pretty expensive main course. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. Overall, this recipe earns a spectacular spoonacular score of 95%. Users who liked this recipe also liked Grilled Chicken Caesar on a Skewer, Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce, and S’more Skewer Bites.",
				healthScore: 68,
				steps: [
					"Chop chicken breast into cubes and place on sticks. Set fire to your grill or oven.",
					"Place the chicken breast on the grill to heat up a little",
					"Mix all your seasoning in a bowl with your vegetable oil.With a brush, smear the mix on the chicken breast on both sides.Flip occasionally as it browns till its cooked. Stack your mangoes after the chicken is done but if your mangoes are firm, you can grill them as well.",
					"Serve on its own as an appetizer or with rice.",
				],
				diets: ["Dairy free", "Gluten free", "Whole 30"],
			},
			{
				id: 640318,
				title: "Crab Salad Stuffed Pita Pockets",
				image: "https://spoonacular.com/recipeImages/640318-312x231.jpg",
				summary:
					"Crab Salad Stuffed Pita Pockets takes roughly 25 minutes from beginning to end. One serving contains 418 calories, 39g of protein, and 6g of fat. For $5.9 per serving, this recipe covers 52% of your daily requirements of vitamins and minerals. This recipe serves 2. 8 people found this recipe to be yummy and satisfying. If you have wholewheat pita breads, crabmeat, coriander leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a dairy free and pescatarian diet. All things considered, we decided this recipe deserves a spoonacular score of 80%. This score is good. Try Crab Salad in Pita Pockets, Stuff It {: Cobb Salad Stuffed Pita Pockets}, and Zucchini Salad Pita Pockets for similar recipes.",
				healthScore: 88,
				steps: [
					"Mix crabmeat, apple and bell pepper together in a bowl.Season to taste, add coriander and fold mayonnaise through.Toast pita breads until puffed up, then cut open on one side.Stuff with some watercress, then the crab mixture.",
					"Serve immediately.",
				],
				diets: ["Dairy free", "Pescatarian"],
			},
			{
				id: 642085,
				title: "Easy Roasted Vegetables",
				image: "https://spoonacular.com/recipeImages/642085-312x231.jpg",
				summary:
					"Easy Roasted Vegetables is a gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe with 4 servings. One portion of this dish contains about 9g of protein, 4g of fat, and a total of 358 calories. For $1.28 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 3 people have tried and liked this recipe. This recipe from Foodista requires butternut squash, paprika, salt & pepper, and olive oil. It works well as a side dish. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is spectacular. Similar recipes include Easy Roasted Vegetables, Easy Roasted Vegetables, and Easy Roasted Summer Vegetables.",
				healthScore: 100,
				steps: [
					"Preheat oven to 200 degrees Celsius (fan: 180 degrees Celsius)",
					"Peel and cut the vegetables into bite size pieces (the potatoes dont necessarily need to be peeled).",
					"Mix the olive oil, paprika, dried basil, salt and pepper in a large bowl before adding the vegetables.",
					"Mix everything together well.",
					"Place the vegetables on a large baking tray/baking dish. Make sure they are spread out evenly. Aim for single layer.",
					"Cook the vegetables in the oven for about 30 minutes. They should be tender but still have a slight bite to them.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 716437,
				title: "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
				image: "https://spoonacular.com/recipeImages/716437-312x231.jpg",
				summary:
					"Chilled Cucumber Avocado Soup with Yogurt and Kefir is a gluten free, lacto ovo vegetarian, and primal hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately 9g of protein, 7g of fat, and a total of 189 calories. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an outstanding spoonacular score of 97%. Chilled Cucumber, Avocado, and Yogurt Soup, Chilled Cucumber-Yogurt Soup, and Chilled Cucumber Mint Yogurt Soup are very similar to this recipe.",
				healthScore: 40,
				diets: ["Gluten free", "Lacto ovo vegetarian", "Primal"],
			},
			{
				id: 664090,
				title: "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
				image: "https://spoonacular.com/recipeImages/664090-312x231.jpg",
				summary:
					"You can never have too many main course recipes, so give Turkish Chicken Salad with Home-made Cacik Yogurt Sauce a try. This recipe serves 4 and costs $4.48 per serving. Watching your figure? This gluten free recipe has 643 calories, 67g of protein, and 30g of fat per serving. 9 people found this recipe to be tasty and satisfying. Head to the store and pick up lebanese cucumber, roast chicken, garlic, and a few other things to make it today. From preparation to the plate, this recipe takes around 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is outstanding. Similar recipes include Spicy Lamb Kabobs With Turkish Cacik, Jerk Rubbed Chicken Thighs with Home-Made Mango-Habanero Hot Sauce, and Yogurt and Cucumber Dip Cacik.",
				healthScore: 82,
				steps: [
					"First prepare the Cacik: For the Cacik: Chop the cucumber into tiny pieces, as small as you can, and place in a bowl. Cover the cucumber with salt and set aside for 30 minutes. The cucumbers will start to exude their juices which will flavour the yogurt nicely.",
					"Put a griddle pan on medium  high heat, cover the peppers with olive oil and start to char.",
					"Cut the tomato and cucumber into medium pieces. Slice the red onion as thin as you can. Chop the parsley fine.",
					"Place all ingredients in a bowl and cover with a the juice of 1 lemon. Season with salt and pepper.",
					"Let it sit in the fridge for 30 minutes  1 hour, stirring a couple times, so it starts to exude juice.",
					"Tear the lettuce into mouth-siazed peices.",
					"Cut the red cabbage into thin slices. Grate the carrot.",
					"Mix together in a bowl.",
					"Tear the chicken into large pieces and add to the salad.",
					"Remove the tomato salsa from the fridge.",
					"Drain the juice and keep for later. Now add the tomato, cucumber, parsley onion mix to the chicken salad, as well as the sliced gherkin.",
					"Lay out the salad on a large plate or chopping board.",
					"Serve with the charred peppers, cacik, salsa vinaigrette and some chilli sauce.",
				],
				diets: ["Gluten free"],
			},
			{
				id: 636602,
				title: "Butternut Squash Soup (In Half An Hour!)",
				image: "https://spoonacular.com/recipeImages/636602-312x231.jpg",
				summary:
					"Butternut Squash Soup (In Half An Hour!) requires about 30 minutes from start to finish. For $1.25 per serving, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 252 calories, 9g of protein, and 6g of fat per serving. It will be a hit at your Autumn event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular score of 95%, this dish is great. Try Half-Hour Chili, Half-Hour Chili, and Half-Hour Chili for similar recipes.",
				healthScore: 86,
				steps: [
					"In large pot, saute onion in butter, ghee or olive oil until soft",
					"Add cubed squash and saute for a couple of minutes",
					"Add vegetable stock and 1 3 inch piece of kombu and bring to a boil",
					"Reduce heat and simmer until squash is soft (about 15 minutes)Using a slotted spoon, remove squash and puree in blender",
					"Return squash to pot and stir in black-eyed peas and cooked quinoa.",
					"Add greens for about five minutes until soft",
					"Add nutmeg, sea salt and pepper to taste",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 716276,
				title: "Doughnuts",
				image: "https://spoonacular.com/recipeImages/716276-312x231.jpg",
				summary:
					"If you have around 45 minutes to spend in the kitchen, Doughnuts might be an amazing lacto ovo vegetarian recipe to try. For 68 cents per serving, you get a breakfast that serves 2. One serving contains 445 calories, 13g of protein, and 2g of fat. If you have warm water, honey, powdered milk, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. Several people made this recipe, and 205 would say it hit the spot. With a spoonacular score of 96%, this dish is tremendous. Users who liked this recipe also liked How to make doughnuts (with video) and Coffee-Biscoff-Bacon Doughnuts, Everything Doughnuts, and Cranberry Doughnuts.",
				healthScore: 35,
				steps: [
					"In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy.",
					"Mix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes.",
					"Heat up your oil and fry the doughnuts till they are brown on both sides.Vanilla Glaze",
					"Mix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla.",
					"Whisk till its properly mixed and drizzle the doughnuts with it.",
					"Add sprinkles for garnishing",
					"Chocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it.",
				],
				diets: ["Lacto ovo vegetarian"],
			},
			{
				id: 649944,
				title: "Lentil Mango Salad",
				image: "https://spoonacular.com/recipeImages/649944-312x231.jpg",
				summary:
					"Lentil Mango Salad is a main course that serves 4. One serving contains 253 calories, 12g of protein, and 6g of fat. For $1.59 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 94%, which is amazing. Users who liked this recipe also liked LENTIL BURGER with Mango Salsa, Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes, and Simple Coconut Quinoan and Lentil Curry with Lime Mango.",
				healthScore: 100,
				steps: [
					"Clean and chop the onion, red pepper, garlic, Cilantro",
					"Peel and chop mango",
					"Place all salad ingredients in a bowl, add the oil, vinegar, season with salt and pepper",
					"Mix well and leave in the refrigerator for 1 / 2 hour",
					"This salad is left to eat alone or to accompany meat and poultry dishes, enjoy ...",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 646043,
				title: "Gujarati Dry Mung Bean Curry",
				image: "https://spoonacular.com/recipeImages/646043-312x231.jpg",
				summary:
					"Gujarati Dry Mung Bean Curry takes about 45 minutes from beginning to end. This main course has 376 calories, 20g of protein, and 5g of fat per serving. This recipe serves 4 and costs $1.64 per serving. A mixture of baking powder, cumin seeds, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 3 fans. This recipe is typical of Indian cuisine. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is outstanding. Gujarati Dry Mung Bean Curry, Gujarati Dry Mung Bean Curry, and Uncle Bill's Mung Bean Curry are very similar to this recipe.",
				healthScore: 100,
				steps: [
					"Wash the mung beans and boil them in plenty of hot water with a pinch of baking powder until al-dente. If you have a pressure cooker thats about 6-7 whistles.",
					"Drain and set aside.In a large pan heat the oil and add the mustard seeds (wait for them to pop) then add the cumin seeds, asafoetida, curry leaves, garlic and chillies. Saut until aromatic. Obviously dont let it burn.",
					"Add the tomatoes, turmeric and mung beans and cook for two minutes. Be careful not to mash it up as you stir.",
					"Add the salt, sugar, lemon juice and cinnamon powder and cook for a further two minutes.Throw in the chopped coriander, combine and serve.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 634437,
				title: "Basil Tagliatelle with Roasted Red Bell Pepper Salad",
				image: "https://spoonacular.com/recipeImages/634437-312x231.jpg",
				summary:
					"Basil Tagliatelle with Roasted Red Bell Pepper Salad might be a good recipe to expand your hor d'oeuvre repertoire. This recipe serves 4 and costs $4.07 per serving. One serving contains 200 calories, 5g of protein, and 12g of fat. A mixture of extra virgin olive oil, horseradish, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. Overall, this recipe earns an outstanding spoonacular score of 93%. Similar recipes are Roasted Red Bell Pepper and Basil Sauce, Roasted Red Bell Pepper And Fennel Salad, and Roasted Sweet Potato Salad With Red Bell Pepper.",
				healthScore: 100,
				steps: [
					"Go to my blog for the full instructions: http://gourmandelle.com/basil-tagliatelle-with-roasted-red-bell-pepper-salad/",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Paleolithic",

					"Primal",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 655235,
				title: "Peanut Butter and Jelly Smoothie",
				image: "https://spoonacular.com/recipeImages/655235-312x231.jpg",
				summary:
					"Peanut Butter and Jelly Smoothie might be a good recipe to expand your breakfast repertoire. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has 779 calories, 20g of protein, and 36g of fat per serving. For $1.45 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe serves 2. 58 people were impressed by this recipe. This recipe from Foodista requires almond milk, bananas, peanut butter, and strawberries. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is super. Try Peanut Butter and Jelly Smoothie, Peanut Butter and Jelly Smoothie, and Peanut Butter and Jelly Smoothie for similar recipes.",
				healthScore: 33,
				steps: [
					"Place ingredients in a high speed blender like Blendtec for super smooth texture, blend on high.If using a regular blender put milk and strawberries in then blend.Next, add banana pieces and peanut butter, process until smooth.",
					"Garnish with crushed peanuts and serve.",
				],
				diets: ["Dairy free", "Fodmap friendly", "Gluten free"],
			},
			{
				id: 652393,
				title: "Moosewood Lentil Soup",
				image: "https://spoonacular.com/recipeImages/652393-312x231.jpg",
				summary:
					"Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs 74 cents per serving. One portion of this dish contains roughly 26g of protein, 4g of fat, and a total of 396 calories. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for Autumn. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is spectacular. Similar recipes are Moosewood Lentil Soup, Moosewood Mushroom Barley Soup!, and Hungarian Mushroom Soup, from the Moosewood Cookbook.",
				healthScore: 100,
				steps: [
					"Place lentils and water in a soup pot or Dutch oven.Bring to a boil, lower heat to a simmer, and let cook until lentils are mushy (about 45 minutes).",
					"Add more water as needed, until the soup is your favorite consistency.",
					"Heat oil or melt butter in a medium-sized skillet.",
					"Add onion, celery, and carrots, and saut over medium heat for about 10 minutes.",
					"Add garlic, salt, pepper, and herbs of your choice, and saut about 5 minutes longer.",
					"Transfer to lentils.Stir in wine, if desired, lemon juice and molasses or brown sugar.Taste to correct seasonings, then simmer for",
					"At least 15 minutes longer.",
					"Serve hot, with a little vinegar drizzled onto each serving, and a sprinkling of minced",
					"Scallions or parsley on top, if desired.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 640828,
				title: "Crispy Panko and Herb Crusted Salmon",
				image: "https://spoonacular.com/recipeImages/640828-312x231.jpg",
				summary:
					"Crispy Panko and Herb Crusted Salmon takes around 45 minutes from beginning to end. For $4.16 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains 390 calories, 33g of protein, and 22g of fat. This recipe from Foodista has 4 fans. If you have lemon zest, extra virgin olive oil, bell pepper, and a few other ingredients on hand, you can make it. It works well as a main course. It is a good option if you're following a dairy free and pescatarian diet. With a spoonacular score of 93%, this dish is super. Similar recipes are Dijon and Herb Panko-Crusted Halibut, Mustard-Herb Panko Crusted Chicken Breasts, and Panko Herb Crusted Rack of Lamb with Vegetables.",
				healthScore: 100,
				steps: [
					"In a skillet heat 2-3 tablespoons of extra virgin olive oil.",
					"Add the chopped onions and leeks.",
					"Saute until translucent about 4 minutes.",
					"Add the chopped red peppers and tomatoes and continue cooking until soft.",
					"Set aside and allow to cool before adding to the panko breadcrumb mixture.",
					"Using a food processor, finely chop the parsley, garlic clove, and the lemon zest.",
					"Add the panko breadcrumbs,salt and pepper, pulse to blend.",
					"Transfer to a bowl and toss in the the onion, leek, tomato and red pepper mixture, which has been cooled. Blend in 3 tablespoons of extra virgin oil, enough to coat the bread mixture.",
					"Place the salmon flat side down on a cookie sheet, which has been lined with parchment paper.",
					"Spread the breadcrumb mixture on top of the fish to cover.",
					"Bake in a preheated 375F for 25- 35 minutes, depending on the thickness of the salmon fillet.",
				],
				diets: ["Dairy free", "Pescatarian"],
			},
			{
				id: 769774,
				title: "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
				image: "https://spoonacular.com/recipeImages/769774-312x231.jpg",
				summary:
					"If you have roughly 45 minutes to spend in the kitchen, Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO) might be an awesome gluten free, dairy free, paleolithic, and primal recipe to try. One portion of this dish contains about 48g of protein, 5g of fat, and a total of 417 calories. For $9.3 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. This recipe serves 4. It works well as a side dish. This recipe is liked by 4 foodies and cooks. If you have beef broth, sweet potatoes, salt/pepper and favorite healthy seasonings, and a few other ingredients on hand, you can make it. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is excellent. Similar recipes include Paleo s: Chicken Stuffed Sweet Potatoes, Whole30 & Paleo Stuffed Sweet Potatoes, and Harvest Paleo Vegan Stuffed Sweet Potatoes.",
				healthScore: 76,
				diets: [
					"Dairy free",

					"Gluten free",

					"Paleolithic",

					"Primal",

					"Whole 30",
				],
			},
			{
				id: 715533,
				title: "Filet Mignon Soft Tacos",
				image: "https://spoonacular.com/recipeImages/715533-312x231.jpg",
				summary:
					"The recipe Filet Mignon Soft Tacos is ready in roughly 45 minutes and is definitely a tremendous gluten free and pescatarian option for lovers of Mexican food. This recipe makes 2 servings with 514 calories, 49g of protein, and 29g of fat each. For $4.21 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. It works well as a pretty expensive main course. This recipe is liked by 400 foodies and cooks. Head to the store and pick up corn tortillas, cracked pepper, guacamole, and a few other things to make it today. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is awesome. Similar recipes include The Secret to Easy Skillet Filet Mignon Steak Tacos, The Secret to Easy Skillet Filet Mignon Steak Tacos, and The Secret to Easy Skillet Filet Mignon Steak Tacos.",
				healthScore: 37,
				diets: ["Gluten free", "Pescatarian"],
			},
			{
				id: 639411,
				title: "Cilantro Lime Halibut",
				image: "https://spoonacular.com/recipeImages/639411-312x231.jpg",
				summary:
					"Cilantro Lime Halibut might be a good recipe to expand your main course recipe box. This recipe serves 2. One portion of this dish contains roughly 44g of protein, 22g of fat, and a total of 422 calories. For $8.81 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken stock, juice of lime, green onions, and salt and pepper. 19 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around 45 minutes. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. Overall, this recipe earns an outstanding spoonacular score of 95%. Similar recipes are Cilantro-Ginger Halibut, Cilantro-Ginger Halibut, and Halibut With Citrus And Cilantro.",
				healthScore: 68,
				steps: [
					"Heat the oil in a large frying pan over medium heat. Coat the filets with garlic pepper on the flesh side. When pan is heated, add filet flesh side down to pan to sear that side. Allow to cook for about 30 seconds. Then flip filets over with tongs.",
					"Add white wine to pan and cover to steam. After about 2 minutes, much of the wine will have evaporated.",
					"Add the chicken stock gradually. Allow the filets to steam for another couple of minutes. Then add the lime juice. When bubbling and both filets are opaque all the way through, add the green onions to the pan and swirl in the sauce for a moment.",
					"Remove filets to beds of lettuce.",
					"Add a tsp of the Blood Orange Olive, swirl the green onions in the sauce one more time and then pour equal parts over the fish.",
					"Garnish with fresh cilantro and lime wedges.",
					"Sprinkle with salt and pepper to taste.",
					"Serve immediately.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Paleolithic",

					"Pescatarian",

					"Primal",
				],
			},
			{
				id: 636228,
				title: "Broccoli Tartar",
				image: "https://spoonacular.com/recipeImages/636228-312x231.jpg",
				summary:
					"Broccoli Tartar is a side dish that serves 12. One serving contains 140 calories, 6g of protein, and 6g of fat. For $1.06 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This recipe is liked by 4 foodies and cooks. This recipe from Foodista requires hand blender, colorful tartar on a bed of vegetables. also an touch, chili powder, and parsley. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes around 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 84%, which is great. Similar recipes include Broccoli Tartar, Rollo De Salmon Ahumado Con Salsa Tartar Y Lentejas (Smoked Salmon Roll with Tartar Sauce and Lentils), and Tartar Sauce.",
				healthScore: 89,
				steps: [
					"Soak arame (seaweed can be found in a health-food store) in a bowl of pure water.",
					"Put the grill of the oven and put a pot of water on the fire with a pinch of sea salt.Wash the pepper, broccoli, parsley and tomatoes. Carve a cross down the tomatoes, halve the peppers and remove the seeds and cut the broccoli into chunks.When the water boils you immerse the tomatoes and leave them for a swim, get them and let them scare in cold water. They are now ready to go out of their jackets.Meanwhile, the broccoli  can be swimming for 6 minutes in the boiling water. Note: The water will cool off and when back to a boil, then add 5 minutes. Get them dry and cool under cold water, then they stay nice and green.The pepper may be under the grill until it sees black.",
					"Let them cool and peel them.Chop the parsley.",
					"Put the cooled broccoli in a long narrow bowl and blend finely with a hand blender.",
					"Add the oil and vinegar with the salt.",
					"Add half the parsley and mix into a smooth puree. If too grainy (dry) put some extra oil.",
					"Cut the unseeded, peeled tomatoes and peppers into very small pieces.The shallot or onion may be chopped in mini pieces.",
					"Add the chopped vegetables to the puree and stir gently with a spoon. The rest of the chopped parsley may be added now. A little salt, soy sauce and chili powder. Start with a little bit and add some more later if desired. The herbs de Provence can now embellish the whole with its bright flavor.The seaweed may now well out of the water and squeeze out any excess moisture.",
					"Cut the seaweed finely and mix carefully with the puree.With an ice cream spoon you  create beautiful balls and sprinkle with toasted sesame seeds.bon apptit",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 661259,
				title: "Spinach and Gorgonzola Stuffed Flank Steak",
				image: "https://spoonacular.com/recipeImages/661259-312x231.jpg",
				summary:
					"Spinach and Gorgonzola Stuffed Flank Steak might be just the main course you are searching for. For $4.27 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 47g of protein, 28g of fat, and a total of 523 calories. This recipe serves 4. 9 people found this recipe to be tasty and satisfying. It is perfect for valentin day. If you have gorgonzola, olive oil, shallot, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is super. If you like this recipe, you might also like recipes such as Bruce Aidells' Spinach and Gorgonzola-Stuffed Flank Steak, Spinach-stuffed Flank Steak, and Spinach and Carrot Stuffed Flank Steak.",
				healthScore: 79,
				steps: [
					"Preheat oven to 37",
					"Butterfly the steak by using a long sharp knife holding it parallel to the work surface, cut through the long side of the steak, stopping about  inch from the opposite side. If the steak is already thin, just pound it with a mallet to  inch thick.",
					"In a large skillet over medium heat add 1 tablespoon olive oil and saut` the shallots until soft, 2 minutes.",
					"Add the spinach and cook until just wilted, about 2 to 3 minutes.",
					"Transfer to a colander.",
					"When cool enough to handle, squeeze out all the moisture from the spinach and transfer to a medium bowl. Stir in the bread crumbs and cheese. Season with salt and pepper.",
					"Place the steak on a sheet of plastic wrap. Smear the spinach mixture evenly over the steak, leaving about 1 inch border along the side edge. Beginning with the side near you and using the plastic wrap as an aid, rollup the steak, gently pressing on the filling.",
					"Tie the rolled steak with twine at 2-3 inch interval.",
					"Season the outside with salt and pepper.",
					"Heat the remaining 2 tablespoons olive oil in a large ovenproof skillet over medium high heat. Sear the roast on all sided, about 2 minutes per side.",
					"Place in the oven and roast for 20 to 25 minutes.",
					"Transfer to a cutting board, tend with aluminum foil and allow resting for 10 minutes.",
					"To serve, remove the twine from the roast and cut into  inch to 1 inch thick slices.",
				],
				diets: [],
			},
			{
				id: 664680,
				title: "Vegetarian Mushroom Shepherd's Pie",
				image: "https://spoonacular.com/recipeImages/664680-312x231.jpg",
				summary:
					"The recipe Vegetarian Mushroom Shepherd's Pie is ready in around 45 minutes and is definitely an awesome gluten free and dairy free option for lovers of European food. For $1.16 per serving, you get a hor d'oeuvre that serves 12. One serving contains 113 calories, 5g of protein, and 5g of fat. 11 person were glad they tried this recipe. This recipe from Foodista requires ground pepper, thyme, unrefined sunflower oil, and paprika. All things considered, we decided this recipe deserves a spoonacular score of 83%. This score is spectacular. Similar recipes are Vegetarian Mushroom Shepherd's Pie, Vegetarian Mushroom Shepherd's Pie, and Vegetarian Mushroom Shepherd's Pie - With Vegan Version.",
				healthScore: 66,
				steps: [
					"Peel potatoes and put them in a large pot filled with water. Boil them until they're tender. Mash them and let them cool for a while.",
					"Chop the mushrooms, carrot and red bell pepper.",
					"Add them into your food processor and pulse until all ingredients are well mixed together.",
					"Heat oil in a large skillet.",
					"Add the mixture above, diced onions, chopped dill and parsley, soy granules, eggs (or egg substitute) and spices. Saut for 10 minutes.",
					"* I added the soy granules without boiling them because the mushrooms contain a lot of water and these soy granules will absorb all excess water.",
					"Put some parchment paper on the bottom of a casserole. Divide the mashed potatoes in two.",
					"Place the first half in the casserole and spread it with a spatula.",
					"Add the filling.",
					"Place over the other half of mashed potatoes.",
					"Heat your oven at 39",
					"Put the casserole in the oven. Cook for 40 minutes.",
					"Don't serve immediately.",
					"Let it cool for at least half an hour.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 715391,
				title: "Slow Cooker Chicken Taco Soup",
				image: "https://spoonacular.com/recipeImages/715391-312x231.jpg",
				summary:
					"Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about 24g of protein, 4g of fat, and a total of 312 calories. This gluten free and dairy free recipe serves 6 and costs $1.41 per serving. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for Autumn. From preparation to the plate, this recipe takes around 8 hours and 5 minutes. It is brought to you by Pink When. Overall, this recipe earns an awesome spoonacular score of 95%. Users who liked this recipe also liked Slow Cooker Chicken Taco Soup, Slow Cooker Chicken Taco Soup, and Slow Cooker Chicken Taco Soup.",
				healthScore: 28,
				steps: [
					"Once you have all of your ingredients added, allow it to cook all day for 8 hours on low. If you are wanting to make this a little faster, turn it on high and cook for 4 hours.When your Chicken Taco Soup is ready to serve, add in some crushed tortilla shells, shredded cheddar cheese, and a little sour cream.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 636230,
				title: "Broccoli with cheese soup",
				image: "https://spoonacular.com/recipeImages/636230-312x231.jpg",
				summary:
					"Broccoli with cheese soup could be just the lacto ovo vegetarian recipe you've been looking for. This recipe serves 4 and costs 66 cents per serving. One serving contains 120 calories, 7g of protein, and 5g of fat. It can be enjoyed any time, but it is especially good for Autumn. 18 people found this recipe to be delicious and satisfying. Head to the store and pick up broccoli florets, flour, milk, and a few other things to make it today. It is brought to you by Foodista. A few people really liked this side dish. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is great. If you like this recipe, you might also like recipes such as Broccoli Cheese Soup, Broccoli Cheese Soup, and Broccoli Cheese Soup.",
				healthScore: 54,
				steps: [
					"Add onions and carrots to the melted butter and saute for 5-6 minutes over medium heat, or until vegetables are tender.",
					"Add 1 cup chicken broth and bring to the boil.",
					"Add broccoli and cook, covered, 5 to 6 minutes or until the broccoli is tender. Using a spoon, break broccoli florets in small pieces.",
					"Reduce heat to low and add remaining cup of chicken broth.",
					"Mix flour and milk in a small bowl and whisk until smooth.",
					"Add mixture to the pot.",
					"Add garlic powder, salt, and pepper. Continue cooking for about 5-6 minutes over low heat until soup thickens.",
					"Add cheese, handfuls at a time, and stir constantly over low heat for 10 minutes until smooth and creamy. If soup becomes too thick, add additional chicken stock. Do not let soup boil.",
				],
				diets: ["Lacto ovo vegetarian"],
			},
			{
				id: 632812,
				title: "Asian Chicken and Broccoli With Chili Garlic Sauce",
				image: "https://spoonacular.com/recipeImages/632812-312x231.jpg",
				summary:
					"The recipe Asian Chicken and Broccoli With Chili Garlic Sauce could satisfy your Asian craving in approximately 45 minutes. One serving contains 546 calories, 33g of protein, and 9g of fat. For $2.42 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 3 people have tried and liked this recipe. The Super Bowl will be even more special with this recipe. It works well as a rather inexpensive main course. It is a good option if you're following a gluten free and dairy free diet. If you have cornstarch, fish sauce, chili garlic sauce, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 93%. Similar recipes are Asian Chicken and Broccoli with Chili Garlic Sauce, {Video} Crunchy Asian Fried Chicken with Garlic Chili Sauce, and Asian Broccoli Salad with Tangy Chili-Garlic Dressing.",
				healthScore: 100,
				steps: [
					"Combine rice vinegar, Mirin, water, chili garlic sauce, fish sauce, soy sauce and cornstarch in a bowl.",
					"Preheat a large skillet over medium-high heat and spray with cooking spray.",
					"Add sesame oil and stir fry broccoli for 3  4 minutes until crisp-tender.",
					"Add 1/4 cup chicken broth if needed to keep from burning.",
					"Add cooked chicken and sauce. Cook another 3  4 minutes until sauce thickens and chicken is heated through.",
					"Serve with basmati rice.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 633942,
				title: "Balsamic Roasted Vegetables",
				image: "https://spoonacular.com/recipeImages/633942-312x231.jpg",
				summary:
					"Balsamic Roasted Vegetables is a gluten free, dairy free, lacto ovo vegetarian, and whole 30 side dish. One serving contains 290 calories, 5g of protein, and 14g of fat. This recipe serves 6. For $1.91 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. This recipe from Foodista requires balsamic vinegar, kabocha squash, bulb fennel, and fingerling potatoes. This recipe is liked by 33 foodies and cooks. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is spectacular. Similar recipes include Balsamic Roasted Vegetables, Balsamic Roasted Vegetables, and Balsamic Roasted Vegetables.",
				healthScore: 51,
				steps: [
					"Clean and top the beets and, along with the fingerling potatoes, drizzle with enough olive oil just to coat. Roast whole at 400 degrees until softened, but not completely cooked (about 30 minutes).",
					"Remove from the oven and carefully peel the beets, then cut in half. You can leave the fingerlings whole, and slice lengthwise in half before serving, or halve them and continue roasting (both ways are delicious!)",
					"Quarter the fennel and red onion lengthwise, and cut the kabocha into 1/2 inch wedges.",
					"Toss all the vegetables in a bowl and drizzle enough olive oil to sufficiently coat. Then, add a big splash of balsamic vinegar (approx. 1/4 cup), a couple hearty pinches of Kosher salt, a few good turns of fresh ground black pepper, and a small sprig of fresh rosemary.",
					"Let roast another 30-40 minutes, turning every so often to get an even roast.",
				],
				diets: [
					"Dairy free",

					"Gluten free",

					"Lacto ovo vegetarian",

					"Vegan",

					"Whole 30",
				],
			},
			{
				id: 632347,
				title: "Ancient Grains Bread",
				image: "https://spoonacular.com/recipeImages/632347-312x231.jpg",
				summary:
					"The recipe Ancient Grains Bread can be made in roughly 45 minutes. This lacto ovo vegetarian recipe serves 14 and costs 83 cents per serving. This bread has 287 calories, 13g of protein, and 3g of fat per serving. This recipe from Foodista requires yeast, honey, vital wheat gluten, and skim milk powder. 6 people have made this recipe and would make it again. Overall, this recipe earns a spectacular spoonacular score of 83%. Ancient Grains Bread, Bread Baking: Ancient Grains, and Simple Tomato Salad With Fresh Bread Crumbs | Udi’s Ancient Grains are very similar to this recipe.",
				healthScore: 74,
				steps: [
					"In a large bowl or stand mixer, whisk together yeast, flours, rye flakes, flaxseed, amaranth, quinoa, soy flour, wheat gluten, skim milk powder and salt.",
					"Stir in warm water and honey, mixing thoroughly to form a cohesive, fairly firm (but workable) dough.",
					"Turn out onto a floured board or knead with the dough hook for 12 minutes, until very elastic and smooth.",
					"Place into a bowl, cover and allow to rest 30 minutes.",
					"Roll rested dough into a log shape and tuck into a greased loaf pan.",
					"Cover with a clean towel and allow to rise 50-60 minutes.",
					"Preheat oven to 350F.",
					"Slash the top of the loaf 2-3 times with a sharp knife or lame.",
					"Bake 40 minutes. Turn out of pan immediately and cool on a rack before slicing",
				],
				diets: ["Lacto ovo vegetarian"],
			},
			{
				id: 975070,
				title: "Instant Pot Chicken Taco Soup",
				image: "https://spoonacular.com/recipeImages/975070-312x231.jpg",
				summary:
					"Instant Pot Chicken Taco Soup could be just the gluten free and dairy free recipe you've been looking for. This recipe serves 4. One serving contains 346 calories, 25g of protein, and 8g of fat. For $2.72 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in around 25 minutes. If you have chilis, water, corn, and a few other ingredients on hand, you can make it. 6 people have tried and liked this recipe. It is perfect for Autumn. This recipe is typical of Mexican cuisine. It is brought to you by Pink When. With a spoonacular score of 95%, this dish is tremendous. Users who liked this recipe also liked Instant Pot Chicken Taco Soup, Instant Pot Chicken Taco Soup, and Instant Pot Chicken Taco Soup.",
				healthScore: 83,
				steps: [
					"Press the",
					"Saute button on the Instant Pot and heat oil.",
					"Add onion and bell pepper and saute until translucent.",
					"Add tomatoes including juice and add water. Make sure to scrape all of the bits from the sides and bottom of the Instant Pot as you are stirring.",
					"Add chicken, chili powder, corn, black beans, green onions, green chilis, and  cup of cilantro. Lock lid. Press the manual or pressure cook button and set time for 15 minutes. When time is up, do a quick release until the valve drops and then unlock the lid. Shred the chicken using two forks and then let the soup simmer for 5 minutes.",
					"Serve the soup into bowls and then top with your favorite toppings such as sour cream, cheese, avocado, etc.",
				],
				diets: ["Dairy free", "Gluten free"],
			},
			{
				id: 649886,
				title: "Lemony Greek Lentil Soup",
				image: "https://spoonacular.com/recipeImages/649886-312x231.jpg",
				summary:
					"Lemony Greek Lentil Soup is a Mediterranean main course. One serving contains 368 calories, 23g of protein, and 4g of fat. For 88 cents per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for Autumn. 2 people were impressed by this recipe. A mixture of brown lentils, , pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is spectacular. If you like this recipe, take a look at these similar recipes: Lemony Greek Lentil Soup, Lemony Lentil Soup, and Lemony Lentil Soup.",
				healthScore: 100,
				steps: [
					"Put the lentils, water, carrot and 1 teaspoon dried thyme into an 8-quart stockpot, cover and set over medium heat.",
					"After 15 minutes, lower the heat somewhat and gently bring the water to a simmer, which should take another half an hour or so.",
					"Once the lentils have reached the boiling point, turn off the burner and let them sit for 1 hour.",
					"After the hour, bring the soup back to a simmer and add the lemon juice, dry basil, fresh thyme, oregano, pepper and salt and simmer for 1 hour.",
					"Now, slowly saut the onion and garlic in the olive oil until the onion is tender.",
					"Coarsely chop the tomatoes (I do this with kitchen scissors right in the can), and add them and the onion mixture to the soup. Adjust the salt to taste.",
					"Bring everything back to the boiling point and simmer for another hour.  After this point, you can turn your burner to its lowest setting, and this soup will happily sit steaming with its lid cocked for several hours until you are ready to enjoy it.",
					"Add more water if necessary.",
					"Serve with crusty bread and a soft cheese like St. Andre or Cambazola",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian", "Vegan"],
			},
			{
				id: 659927,
				title: "Shrimp and Avocado Salad",
				image: "https://spoonacular.com/recipeImages/659927-312x231.jpg",
				summary:
					"Need a gluten free, dairy free, and pescatarian main course? Shrimp and Avocado Salad could be an awesome recipe to try. This recipe serves 4 and costs $11.57 per serving. One portion of this dish contains about 34g of protein, 37g of fat, and a total of 639 calories. From preparation to the plate, this recipe takes about 45 minutes. This recipe is liked by 8 foodies and cooks. This recipe from Foodista requires the shrimp, salt and pepper, garlic cloves, and the dressing. All things considered, we decided this recipe deserves a spoonacular score of 86%. This score is outstanding. If you like this recipe, take a look at these similar recipes: Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip, Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip, and Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip.",
				healthScore: 100,
				steps: [
					"Firstly, to cook the shrimp, heat the olive oil in a pan and once hot add the shrimp crushed garlic and chili flakes. It is important to get the oil nice and hot (not smoking, just before that point) your shrimp should sizzle when added to the pan. Check the back of the shrimp and when you see the colour change about half way up, turn them over. Do the same on the other side. This should only take a minute to two minutes maximum on both sides  otherwise you will get a rubbery result if you leave it too long. Squeeze over the lime juice  this too should bubble and reduce.",
					"Add a little salt and pepper, stir through, remove from the heat and set aside.",
					"Mix the dressing ingredients together, check for flavour, adjust if need be and set aside.",
					"Place all the salad ingredients in a bowl except the avocado and the salt and pepper. Prepare the avocado as you are about to serve otherwise it will turn brown. Once it is covered in the lime dressing, this will slow down the oxidization process and it wont go brown so easily.",
					"When you are ready to serve mix  of the avocado through the salad and add the dressing. Toss everything together. Taste to see if you need any salt and pepper.",
					"Place your shrimp on top of the salad with the rest of the avocado and sprinkle/pour any residue from the pan over your salad in which you cooked the shrimp. This is great flavour, so you dont want to lose it.",
				],
				diets: ["Dairy free", "Gluten free", "Pescatarian"],
			},
			{
				id: 716217,
				title:
					"Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
				image: "https://spoonacular.com/recipeImages/716217-312x231.jpg",
				summary:
					"Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo) requires roughly 45 minutes from start to finish. One serving contains 390 calories, 8g of protein, and 22g of fat. This gluten free, dairy free, and lacto ovo vegetarian recipe serves 6 and costs $3.19 per serving. Head to the store and pick up chilies, rice vinegar, enoki mushrooms, and a few other things to make it today. 295 people found this recipe to be yummy and satisfying. It works well as a side dish. Plenty of people really liked this Vietnamese dish. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns an awesome spoonacular score of 94%. Similar recipes include Bánh xèo (Vietnamese Happy Pancakes), Banh Xeo (Bánh Xèo) – Savory Vietnamese Crêpe, and Banh Xeo (Vietnamese Crepes).",
				healthScore: 35,
				steps: [
					"Begin by preparing the pancake batter.",
					"Whisk together the rice flour, egg, sea salt, turmeric, cayenne and green chili. Gradually whisk in the coconut milk. The mixture should be a smooth, semi-thick batter that is of pouring consistency.",
					"Add a little water if necessary. Cover and set aside while you prepare the rest of the food.Now prepare the sauce.",
					"Whisk together all of the ingredients and set aside.For the filling, combine the carrot, radish, green onions, green chilies and snow peas.",
					"Put the herbs in another bowl and have your sprouts ready along with the mushrooms.",
					"Heat a teaspoon of oil over medium heat in a non-stick skillet. When hot, ladle 1/2 cup of batter into the pan and spread with the bottom of the ladle until you have a roughly 6 to 8 inch pancake.  Fry for 6 to 8 minutes or until you have small holes forming and the bottom is crispy brown, then flip and fry for another few minutes on the other side.",
					"Transfer to a plate and keep warm in a 150 oven while you finish the rest of the pancakes  you should finish with 4 to 6 pancakes.To serve, scatter a portion of the vegetables, herbs and mushrooms over one half of the pancake.",
					"Sprinkle some sauce over top and fold the pancake.",
					"Drizzle with more sauce and there you go.",
				],
				diets: ["Dairy free", "Gluten free", "Lacto ovo vegetarian"],
			},
			{
				id: 636608,
				title: "Butternut Squash, Arugula and Goat Cheese Quinoa",
				image: "https://spoonacular.com/recipeImages/636608-312x231.jpg",
				summary:
					"Butternut Squash, Arugulan and Goat Cheese Quinoan is a main course that serves 4. For $2.51 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. One portion of this dish contains approximately 16g of protein, 24g of fat, and a total of 492 calories. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes about 45 minutes. Head to the store and pick up olive oil, salt and pepper, quinoa, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a gluten free and lacto ovo vegetarian diet. Overall, this recipe earns an outstanding spoonacular score of 95%. Similar recipes include Butternut Squash, Arugulan and Goat Cheese Quinoa, 5-Ingredient Butternut Squash, Arugulan and Goat Cheese Pasta, and Butternut Squash, Arugula, and Roasted Garlic Goat Cheese Tartine.",
				healthScore: 97,
				steps: [
					"Preheat oven to 450F.",
					"Spray a cookie sheet with nonstick spray.",
					"Toss butternut squash with about 1 tbsp olive oil (possibly less, just enough to coat) and season with salt and pepper.",
					"Spread in one layer on cookie sheet.",
					"Roast butternut squash for 20-25 minutes, until fork tender.",
					"While squash is roasting, combine quinoa and water or stock in a saucepan. If using water, season with 1/2 tsp salt. Bring to a boil, lower heat, cover and simmer for 10-15 minutes, until liquid is absorbed.",
					"In a large bowl, combine cooked quinoa, butternut squash, arugula, 1 tbsp olive oil, balsamic vinegar and crumbled goat cheese. Season with a pinch more salt and pepper. Toss well to mix everything and wilt arugula.",
					"Serve immediately, garnished with toasted nuts, if desired.",
				],
				diets: ["Gluten free", "Lacto ovo vegetarian"],
			},
		],
	};
};
module.exports = callSpoonacularAPI;
