export const dateValid = (data: string) : boolean => {
    
    //Check simples, 31 de Fevereiro é uma data aceita.

    if (data.length !== 10) { 
        
        return false 
    }

    let numbers: string = '1234567890'
    const checkData: string[] = data.split("/")

    if (checkData[0].length !== 2 && checkData[1].length !== 2 && checkData[2].length !== 4) { 
        
        return false
    }

    if (isNaN(Number(checkData[0])) || Number(checkData[0]) > 31) { 
        
        return false 
    }

    if (isNaN(Number(checkData[1])) || Number(checkData[1]) > 12 || Number(checkData[1]) < 1) {
        
        return false 
    }

    if (isNaN(Number(checkData[2])) || Number(checkData[2]) < 1) { 
        
        return false 
    }

    return true
}

export const dateFormat = (date: string) : string => {

    return date.split("/").reverse().join("-")
}
