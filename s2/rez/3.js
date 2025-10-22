
const formatString = (s, format) => {
    let modified = s
    for (const key in format) {
      if (modified.indexOf('{' + key + '}') !== -1) {
            modified = modified.replace('{' + key + '}', format[key])
        }
    }
    return modified
}

console.log(formatString("this is a {characteristic} string and we've {action} it ", {
  characteristic: 'nice',
  action: 'modified'
}))