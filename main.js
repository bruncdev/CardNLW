const LinksSocialMedia = {
  github: 'nwplul',
  instagram: '_burnc',
  twitter: 'nwplul'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // const social = li.getAttribute('class')
    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()
