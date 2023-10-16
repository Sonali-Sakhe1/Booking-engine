export function POS_BASE_URL(): string {
    return 'https://pyt-extapi-staging.triplaze.com';
    return 'https://https://pyt-extapi-staging.triplaze.com';
}

export function URLConstants() {
    return {
        API: {
            GET_SEARCH_HOTEL: POS_BASE_URL() + '/api/ext/searchHotels?city=Langkawi&checkIn=2023-08-28&checkOut=2023-08-29&paxInfo=2%7C0&priceType=WEB%27',
            GET_HOTEL_ROOMS: POS_BASE_URL() + '/api/ext/rooms?priceType=WEB&productId=3379&city=Karwar&checkIn=2023-08-28&checkOut=2023-08-29&paxInfo=2%7C0'

        },
    }

}

// export function URLConstants() {
//     return {
//         API: {
//             GET_SEARCH_HOTEL: POS_BASE_URL() + '/api/ext/rooms?priceType=WEB&productId=3379&city=Karwar&checkIn=2023-08-28&checkOut=2023-08-29&paxInfo=2%7C0'
//         },
//     }
// }