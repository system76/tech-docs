SOURCES=\
	$(shell find src -iname '*.md') \
	book.toml
VERSION=$(git rev-parse HEAD)

book: $(SOURCES)
	mdbook build

.PHONY: clean
clean:
	rm -rf book build

.PHONY: deploy
deploy: book
	rm -rf build
	git worktree add --force build gh-pages
	rm -rf build/*
	cp -rp book/* build/
	cd build && \
		git add -A && \
		git commit -m "Deploying $(VERSION)" && \
		git push origin gh-pages
