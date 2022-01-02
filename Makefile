install: install-deps

install-deps:
	npm ci

lint:
	npx eslint .

install-deps:
	npm ci

publish:
	npm publish

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
