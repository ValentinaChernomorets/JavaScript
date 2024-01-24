    let div = document.querySelector('#info')
    
    // XML
    let xmlpersonalData = `
        <personaldata>
            <firstname>John</firstname>
            <lastname>Cavalsky</lastname>
            <birthday>04.11.1992</birthday>
            <address>
                <country>Moldova</country>
                <city>Chisinau</city>
                <street>Stegan Cel Mare 126</street>
            </address>
            <contacts>
                <phones>
                    <mobile>795 99999</mobile>
                    <home>022 45 45 00</home>
                </phones>
                <socials>
                    <viber>viber:128383838</viber>
                    <skype>skype:johnyCavalsky</skype>
                    <telegram>telegram:johnyCavalsky</telegram>
                </socials>
            </contacts>
        </personaldata>
    `
//Parse XML
    let xmlParser = new DOMParser()
    let xmlDoc = xmlParser.parseFromString(xmlpersonalData, 'text/xml')
// Add new data
    let jobElement = xmlDoc.createElement('job')
    jobElement.appendChild(xmlDoc.createTextNode('manager'))
    let companyElement = xmlDoc.createElement('company')
    companyElement.appendChild(xmlDoc.createTextNode('Orange'))
    xmlDoc.children[0].appendChild(jobElement)
    xmlDoc.children[0].appendChild(companyElement)

//Find and print data: firstname, lastname, street address
    let firstnameXml = xmlDoc.children[0].children[0].textContent
    let lastnameXml = xmlDoc.children[0].children[1].textContent
    let streetXml = xmlDoc.children[0].children[3].children[2].textContent
    let divXml = document.createElement("div")
    let newContentXml = document.createTextNode(
        "XML - " + "Firstname: " + `${firstnameXml}` + ";" +
        " Lastname: " + `${lastnameXml}` + ";" +
        " Street address: " + `${streetXml}` + ".");
    divXml.appendChild(newContentXml)
    div.appendChild(divXml)

// Print in console
    console.log(firstnameXml, lastnameXml, streetXml)
    console.log( new XMLSerializer().serializeToString(xmlDoc) )

// JSON
    let jsonpersonalData = `
        {
            "personaldata": {
                "firstname": "John",
                "lastname": "Cavalsky",
                "birthday": "04.11.1992",
                "address": {
                    "country": "Moldova",
                    "city": "Chisinau",
                    "street": "Stegan Cel Mare 126"
                },
                "contacts": {
                    "phones": {
                        "mobile": "795 99999",
                        "home": "022 45 45 00"
                    },
                    "socials": {
                        "viber": "viber:128383838",
                        "skype": "skype:johnyCavalsky",
                        "telegram": "telegram:johnyCavalsky"
                    }
                }
            }
            
        }
    `
// Parse JSON
    let json = JSON.parse(jsonpersonalData)
// Get data from parsed string data
    let datapersonal = json.personaldata
// Add to the object new data
    datapersonal.job = "Manager"
    datapersonal.company = "Orage"
// Find and print data: firstname, lastname, street address
    let firstnameJson = datapersonal.firstname
    let lastnameJson = datapersonal.lastname
    let streetJson = datapersonal.address.street
    let divJson = document.createElement("div")
    let newContent = document.createTextNode(
        "JSON - " + "Firstname: " + `${firstnameJson}` + ";" +
        " Lastname: " + `${lastnameJson}` + ";" +
        " Street address: " + `${streetJson}` + ".");
    divJson.appendChild(newContent)
    div.appendChild(divJson)

// Print in console
    console.log(firstnameJson, lastnameJson, streetJson)
    console.log(JSON.stringify(datapersonal))
