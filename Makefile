clean:
	rm -rf dist

build: clean
	npm install
	npm run build

publish: build
	cd dist && \
		git init && \
		git add -A && \
		git commit -m "build" && \
		git push -f https://github.com/syaning/prophet.git master:gh-pages

.SILENT: clean build publish
