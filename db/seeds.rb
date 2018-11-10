# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
leagues = ['Celtics', '76ers', 'Suns', 'Heat', 'Knicks', 'Hurricanes', 'Red Sox', 'Yankees', 'Phillies',
'Giants', 'Bills', 'Rolling Stones', 'Beatles', 'The Who', 'The Clams', 'The Oysters', 'The Mussels', 'The Lobsters', 'The Scallops', 

]


fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicious #{fruit}.")}