url = "contacts" // string
re = /^[a-z#-\/:0-9]+$/ // RegExp
// VALIDATION
url.trim().length > 0
// trim - copy "" length
// 1. not empty
// 2. lower latin a..z - / : . digits