// consumer's code
let fig1 = new Figure("Road", "https://fastly.picsum.photos/id/379/500/500.jpg?hmac=mKhjYi4pxnanwILizfJv8ZUoM4wr9oJX5Wg8chtgI5Q")
fig1.render("#containerFigFirst")

let fig2 = new Figure("", "https://fastly.picsum.photos/id/323/500/500.jpg?hmac=b24VENFLL59JsHRUlOIBhRigKfk84EllIDCVfa_alUQ")
fig2.render("#containerFigSecond")

let fig3 = new Figure("<script>Road</script>", "https://fastly.picsum.photos/id/551/500/500.jpg?hmac=zDsFxWRJDx1waeQpllAPgfANe7PwhhYtlOXkJESjXRw")
fig3.render("#containerFigThird")
