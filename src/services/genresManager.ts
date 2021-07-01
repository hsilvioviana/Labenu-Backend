export const genresValid = (arr: string[]) : boolean => {

    if (typeof arr !== "object" || arr.length < 1) { return false }

    for (let item of arr) {

      if (typeof item !== "string") { return false }
    }

    return true
}

export const genresFormat = (arr: string[]) : string => {

    return arr.join("|%|")
}