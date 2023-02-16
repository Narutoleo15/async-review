// async review 

async function getACuteDogPhoto(){
    try{
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        if(!res.ok){
            throw new Error(`HTTP error: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        console.log(res.ok)
}
catch (error){
    console.error(`Could not get danggg Products: ${error}`)
}
        
}

getACuteDogPhoto()