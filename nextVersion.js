function nextVersion(version){
  //TODO : find the next version
  const parts = version.split(".")

  for (let i = parts.length - 1; i >= 0; i--) {
    if (i > 0 && parts[i] === "9") {
      parts[i] = 0
    } else {
      parts[i]++
      break
    }
  }
  
  return parts.join(".")
}


console.log(nextVersion("1.2.3"));
console.log(nextVersion("0.9.9"));
console.log(nextVersion("1"));
console.log(nextVersion("1.2.3.4.5.6.7.8"));
console.log(nextVersion("9.9"));
console.log(nextVersion("100"));
console.log(nextVersion("10.0.0.0.0.0.0"));

