LOCAL DATA:

mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --drop --file ./data/products/coaching/five-transformational-coaching-sessions.json &&
mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --file ./data/products/coaching/transformational-coaching-session.json &&
mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --file ./data/products/coaching/unlimited-transformational-coaching.json &&
mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --file ./data/products/coaching/two-transformational-coaching-sessions.json &&
mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --file ./data/products/coaching/transformational-coaching-introductory-session.json

mongoimport --host 127.0.0.1 --port 27017 --db zissis --collection products --drop --file ./data/products/coaching/one-transformational-coaching-session.json


MONGO ATLAS DATA:

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-01-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-02-d9i0y.gcp.mongodb.net:27017 --ssl --username application --password Sup3rP0w3r --authenticationDatabase admin --db application --collection products --type json --file data/products/coaching/five-transformational-coaching-sessions.json

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-01-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-02-d9i0y.gcp.mongodb.net:27017 --ssl --username application --password Sup3rP0w3r --authenticationDatabase admin --db application --collection products --type json --file data/products/coaching/transformational-coaching-session.json

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-01-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-02-d9i0y.gcp.mongodb.net:27017 --ssl --username application --password Sup3rP0w3r --authenticationDatabase admin --db application --collection products --type json --file data/products/coaching/unlimited-transformational-coaching.json

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-01-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-02-d9i0y.gcp.mongodb.net:27017 --ssl --username application --password Sup3rP0w3r --authenticationDatabase admin --db application --collection products --type json --file data/products/coaching/two-transformational-coaching-sessions.json

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-01-d9i0y.gcp.mongodb.net:27017,cluster0-shard-00-02-d9i0y.gcp.mongodb.net:27017 --ssl --username application --password Sup3rP0w3r --authenticationDatabase admin --db application --collection products --type json --file data/products/coaching/transformational-coaching-introductory-session.json
