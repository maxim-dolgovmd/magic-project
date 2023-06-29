export const getObjStatus = (array: any) => {
    const map = new Map()

    // ключ - статус 
    // значение - массив - obj
 
    

    for (let i = 0; i < array?.length; i++) {
         const element = array[i]
         const keyStatus = element?.status
         if (map.has(keyStatus)) {
            const arr = map.get(keyStatus)
            arr.push(element)
            map.set(keyStatus, arr)
         } else {
            map.set(keyStatus,  [element])
         }
    }
    return map
 }

 