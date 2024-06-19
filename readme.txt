
building css: sass main.scss:main.css
deploy: gsutil rsync -R lm gs://www.logicallymagic.com
