.PHONY: all lint

all: lint node_modules dist  

node_modules: package.json yarn.lock
	yarn

lint: src node_modules
	`npm bin`/eslint --ext .js --ext .jsx --cache src/ 

dist: src node_modules lint
	webpack -d

clean:
	rm -rf dist/
