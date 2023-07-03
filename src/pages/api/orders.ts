import { NextApiRequest, NextApiResponse } from "next";

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');

function generateRandomDate(start: Date, end: Date): Date {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
}

interface IIngredient {
    id: number,
    largePhotoUrl: string,
    normalPhotoUrl: string,
    mobilePhotoUrl: string,
    previewPhotoUrl: string,
    price: number,
    name: string,
    category: string,
    quantity: number,
}

type StatusType = 'ready' | 'in preparation' | 'handed over to courier' | 'canceled' | 'closed';

interface Order {
    order_number: number;
    date_created: Date;
    name: string;
    price: number;
    status: StatusType;
    ingredients: IIngredient[];
}

const orders: Order[] = [
    {
        order_number: 1432,
        date_created: generateRandomDate(startDate, endDate),
        name: 'Заказ 1',
        price: 960,
        status: 'ready',
        ingredients: [
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
            {
                id: 2,
                largePhotoUrl: "/illustration/file/fileLarge.png",
                normalPhotoUrl: "/illustration/file/fileNormal.png",
                mobilePhotoUrl: "/illustration/file/fileMobile.png",
                previewPhotoUrl: "/illustration/file/filePreview.png",
                price: 300,
                name: "Филе Люминесцентного тетраодонтимформа",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 3,
                largePhotoUrl: "/illustration/meat/meatLarge.png",
                normalPhotoUrl: "/illustration/meat/meatNormal.png",
                mobilePhotoUrl: "/illustration/meat/meatMobile.png",
                previewPhotoUrl: "/illustration/meat/meatPreview.png",
                price: 300,
                name: "Мясо бессмертных моллюсков Protostomia",
                category: "Начинки",
                quantity: 2,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
        ],
    },
    {
        order_number: 2322,
        date_created: generateRandomDate(startDate, endDate),
        name: 'Заказ 2',
        price: 360,
        status: 'in preparation',
        ingredients: [
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
        ],
    },
    {
        order_number: 4324,
        date_created: generateRandomDate(startDate, endDate),
        name: 'Заказ 3',
        price: 660,
        status: 'handed over to courier',
        ingredients: [
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 0,
                largePhotoUrl: "/illustration/crator/cratorLarge.png",
                normalPhotoUrl: "/illustration/crator/cratorMobile.png",
                mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
                previewPhotoUrl: "/illustration/crator/cratorPreview.png",
                price: 30,
                name: "Краторная булка N-200i",
                category: "Булки",
                quantity: 2,
            },
        ],
    },
    {
        order_number: 8762,
        date_created: generateRandomDate(startDate, endDate),
        name: 'Заказ 4',
        price: 670,
        status: 'canceled',
        ingredients: [
            {
                id: 1,
                largePhotoUrl: "/illustration/bun/bunLarge.png",
                normalPhotoUrl: "/illustration/bun/bunNormal.png",
                mobilePhotoUrl: "/illustration/bun/bunMobile.png",
                previewPhotoUrl: "/illustration/bun/bunPreview.png",
                price: 20,
                name: "Флюоресцентная булка R2-D3",
                category: "Булки",
                quantity: 1,
            },
            {
                id: 6,
                largePhotoUrl: "/illustration/sauce/sauceLarge.png",
                normalPhotoUrl: "/illustration/sauce/sauceNormal.png",
                mobilePhotoUrl: "/illustration/sauce/sauceMobile.png",
                previewPhotoUrl: "/illustration/sauce/saucePreview.png",
                price: 30,
                name: "Соус Spicy-X",
                category: "Соусы",
                quantity: 1,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 5,
                largePhotoUrl: "/illustration/bioCutlet/bioCutletLarge.png",
                normalPhotoUrl: "/illustration/bioCutlet/bioCutletNormal.png",
                mobilePhotoUrl: "/illustration/bioCutlet/bioCutletMobile.png",
                previewPhotoUrl: "/illustration/bioCutlet/bioCutletPreview.png",
                price: 300,
                name: "Биокотлета из марсианской Магнолии",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 1,
                largePhotoUrl: "/illustration/bun/bunLarge.png",
                normalPhotoUrl: "/illustration/bun/bunNormal.png",
                mobilePhotoUrl: "/illustration/bun/bunMobile.png",
                previewPhotoUrl: "/illustration/bun/bunPreview.png",
                price: 20,
                name: "Флюоресцентная булка R2-D3",
                category: "Булки",
                quantity: 1,
            },
        ],
    },
    {
        order_number: 1236,
        date_created: generateRandomDate(startDate, endDate),
        name: 'Заказ 5',
        price: 1300,
        status: 'closed',
        ingredients: [
            {
                id: 1,
                largePhotoUrl: "/illustration/bun/bunLarge.png",
                normalPhotoUrl: "/illustration/bun/bunNormal.png",
                mobilePhotoUrl: "/illustration/bun/bunMobile.png",
                previewPhotoUrl: "/illustration/bun/bunPreview.png",
                price: 20,
                name: "Флюоресцентная булка R2-D3",
                category: "Булки",
                quantity: 1,
            },
            {
                id: 6,
                largePhotoUrl: "/illustration/sauce/sauceLarge.png",
                normalPhotoUrl: "/illustration/sauce/sauceNormal.png",
                mobilePhotoUrl: "/illustration/sauce/sauceMobile.png",
                previewPhotoUrl: "/illustration/sauce/saucePreview.png",
                price: 30,
                name: "Соус Spicy-X",
                category: "Соусы",
                quantity: 1,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 5,
                largePhotoUrl: "/illustration/bioCutlet/bioCutletLarge.png",
                normalPhotoUrl: "/illustration/bioCutlet/bioCutletNormal.png",
                mobilePhotoUrl: "/illustration/bioCutlet/bioCutletMobile.png",
                previewPhotoUrl: "/illustration/bioCutlet/bioCutletPreview.png",
                price: 300,
                name: "Биокотлета из марсианской Магнолии",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 6,
                largePhotoUrl: "/illustration/sauce/sauceLarge.png",
                normalPhotoUrl: "/illustration/sauce/sauceNormal.png",
                mobilePhotoUrl: "/illustration/sauce/sauceMobile.png",
                previewPhotoUrl: "/illustration/sauce/saucePreview.png",
                price: 30,
                name: "Соус Spicy-X",
                category: "Соусы",
                quantity: 1,
            },
            {
                id: 4,
                largePhotoUrl: "/illustration/meteorite/meteoriteLarge.png",
                normalPhotoUrl: "/illustration/meteorite/meteoriteNormal.png",
                mobilePhotoUrl: "/illustration/meteorite/meteoriteMobile.png",
                previewPhotoUrl: "/illustration/meteorite/meteoritePreview.png",
                price: 300,
                name: "Говяжий метеорит (отбивная)",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 5,
                largePhotoUrl: "/illustration/bioCutlet/bioCutletLarge.png",
                normalPhotoUrl: "/illustration/bioCutlet/bioCutletNormal.png",
                mobilePhotoUrl: "/illustration/bioCutlet/bioCutletMobile.png",
                previewPhotoUrl: "/illustration/bioCutlet/bioCutletPreview.png",
                price: 300,
                name: "Биокотлета из марсианской Магнолии",
                category: "Начинки",
                quantity: 1,
            },
            {
                id: 1,
                largePhotoUrl: "/illustration/bun/bunLarge.png",
                normalPhotoUrl: "/illustration/bun/bunNormal.png",
                mobilePhotoUrl: "/illustration/bun/bunMobile.png",
                previewPhotoUrl: "/illustration/bun/bunPreview.png",
                price: 20,
                name: "Флюоресцентная булка R2-D3",
                category: "Булки",
                quantity: 1,
            },
        ],
    },
];
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ total: number; offset: number; orders: Order[] } | { message: string }>
) {
    const { method } = req;

    if (method === 'GET') {
        handleGetRequest(req, res);
    } else if (method === 'POST') {
        handlePostRequest(req, res);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

function handleGetRequest(
    req: NextApiRequest,
    res: NextApiResponse<{ total: number; offset: number; orders: Order[] } | { message: string }>
) {
    const { limit = 1, offset = 0 } = req.query;
    const parsedLimit = Number(limit);
    const parsedOffset = Number(offset);

    const { authorization, role } = req.headers;
    if (!authorization?.includes('Bearer') || !role || typeof role !== 'string') {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }

    let selectedOrders: Order[] = [];
    if (role === 'user') {
        selectedOrders = orders.map((order) => ({
            ...order,
            status: 'closed',
        }));
    } else if (role === 'admin') {
        selectedOrders = orders;
    } else {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }

    const paginatedOrders = selectedOrders.slice(parsedOffset, parsedOffset + parsedLimit);

    res.status(200).json({
        total: selectedOrders.length,
        offset: parsedOffset,
        orders: paginatedOrders,
    });
}

function handlePostRequest(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string }>
) {
    const { authorization, role } = req.headers;
    if (!authorization?.includes('Bearer') || !role || typeof role !== 'string') {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }

    const { name, ingredients }: Order = req.body;

    if (!name || !ingredients) {
        res.status(400).json({ message: 'Неправильное тело запроса' });
        return;
    }

    const newOrder: Order = {
        name,
        ingredients,
        order_number: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        date_created: generateRandomDate(startDate, endDate),
        price: ingredients.reduce((acc, cur) => acc += cur.price, 0),
        status: 'in preparation',
    };

    orders.push(newOrder);

    res.status(200).json({ message: 'Заказ успешно создан' });
}
