

export const getCountFromCart = (array: any) => {
   const map = new Map()

   for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (map.has(element.id)) {
            let count = map.get(element.id)
            map.set(element.id,  ++count)
        } else {
            map.set(element.id, 1)
        }
   }
   return map
}

