dag:
	docker run --rm -v `pwd`:/home matts966/alphasql alphadag --output_path ./dag.dot .
	docker run --rm -v `pwd`:/home fgrehm/graphviz dot -Tpng /home/dag.dot -o /home/dag.png
exec:
	python execute.py bqfunc US ./dag.dot
fmt:
	docker run --rm -v `pwd`:/home matts966/zetasql-formatter
	docker run --rm -v `pwd`:/home kiwicom/black:20.8b1 black /home -l 79
	docker run --rm -v `pwd`:/home alphachai/isort -m 3 --tc /home
lint:
	docker run --rm -v `pwd`:/home alpine/flake8 /home
