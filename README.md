# postcss-loader-plugin-fail
A sample of `postcss-loader` plugin failure.

# Solved
The `postcss-loader` documentation states clearly: `Use it after css-loader and style-loader, but before other preprocessor loaders like e.g sass|less|stylus-loader, if you use any.`, which was the issue here.
