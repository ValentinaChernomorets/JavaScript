let xmlString = `
    <order>
        <item>Pizza</item>
    </order>
`

let jsonString = `
    {
        "order": {
            "item": "Pizza"
        }
    }
`

//----------------------------------
// string structured data ---> parse ---> structure

let xmlParser = new DOMParser()
let xmlDoc =  xmlParser.parseFromString(xmlString, 'text/xml')
console.log(xmlDoc.children[0].children[0].textContent)
console.log( new XMLSerializer().serializeToString(xmlDoc) )

let jsonData = JSON.parse(jsonString)
console.log(jsonData.order.item)
console.log(JSON.stringify(jsonData))

// HW1:
/*
say we have the next info:
    -firstname, lastname of a person
    -date of birth of this person
    -address:
        -country
        -city
        -street address
    -contacts:
        -phones:
            -a few phone number
        -socials:
            -key:value pairs (vaiber:id)
    * create the corresponding xml and json string
    * parse both
    * find and print only the: firstname, lastname, street address

    ** add to the parsed structure: job, company
    ** serialize both structure to string and print them
*/