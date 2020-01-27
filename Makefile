SOURCES=\
	$(shell find src -iname '*.md') \
	book.toml

book: $(SOURCES)
	mdbook build

.PHONY: clean
clean:
	rm -rf book build
