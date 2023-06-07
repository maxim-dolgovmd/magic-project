import { NextApiRequest, NextApiResponse } from "next";

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

const ingredients: IIngredient[] = [
    {
        id: 0,
        largePhotoUrl: "/illustration/crator/cratorLarge.png",
        normalPhotoUrl: "/illustration/crator/cratorMobile.png",
        mobilePhotoUrl: "/illustration/crator/cratorNormal.png",
        previewPhotoUrl: "/illustration/crator/cratorPreview.png",
        price: 30,
        name: "Краторная булка N-200i",
        category: "Булки",
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
        id: 7,
        largePhotoUrl: "/illustration/spiceSauce/spiceSauceLarge.png",
        normalPhotoUrl: "/illustration/spiceSauce/spiceSauceNormal.png",
        mobilePhotoUrl: "/illustration/spiceSauce/spiceSauceMobile.png",
        previewPhotoUrl: "/illustration/spiceSauce/spiceSaucePreview.png",
        price: 30,
        name: "Соус фирменный Space Sauce",
        category: "Соусы",
        quantity: 3,
    },
    {
        id: 8,
        largePhotoUrl: "/illustration/space/spaceLarge.png",
        normalPhotoUrl: "/illustration/space/spaceNormal.png",
        mobilePhotoUrl: "/illustration/space/spaceMobile.png",
        previewPhotoUrl: "/illustration/space/spacePreview.png",
        price: 30,
        name: "Соус традиционный галактический",
        category: "Соусы",
        quantity: 1,
    },
    {
        id: 9,
        largePhotoUrl: "/illustration/traditionalSauce/traditionalSauceLarge.png",
        normalPhotoUrl: "/illustration/traditionalSauce/traditionalSauceNormal.png",
        mobilePhotoUrl: "/illustration/traditionalSauce/traditionalSauceMobile.png",
        previewPhotoUrl: "/illustration/traditionalSauce/traditionalSaucePreview.png",
        price: 30,
        name: "Соус с шипами Антарианского плоскоходца",
        category: "Соусы",
        quantity: 1,
    },
    {
        id: 10,
        largePhotoUrl: "/illustration/fruit/fruitLarge.png",
        normalPhotoUrl: "/illustration/fruit/fruitNormal.png",
        mobilePhotoUrl: "/illustration/fruit/fruitMobile.png",
        previewPhotoUrl: "/illustration/fruit/fruitPreview.png",
        price: 80,
        name: "Плоды фалленианского дерева",
        category: "Начинки",
        quantity: 1,
    },
    {
        id: 11,
        largePhotoUrl: "/illustration/crystals/crystalsLarge.png",
        normalPhotoUrl: "/illustration/crystals/crystalsNormal.png",
        mobilePhotoUrl: "/illustration/crystals/crystalsMobile.png",
        previewPhotoUrl: "/illustration/crystals/crystalsPreview.png",
        price: 80,
        name: "Кристаллы марсианских альфа-сахаридов",
        category: "Начинки",
        quantity: 1,
    },
    {
        id: 12,
        largePhotoUrl: "/illustration/mineral/mineralLarge.png",
        normalPhotoUrl: "/illustration/mineral/mineralNormal.png",
        mobilePhotoUrl: "/illustration/mineral/mineralMobile.png",
        previewPhotoUrl: "/illustration/mineral/mineralPreview.png",
        price: 80,
        name: "Хрустящие минеральные кольца",
        category: "Начинки",
        quantity: 2,
    },
    {
        id: 13,
        largePhotoUrl: "/illustration/salad/saladLarge.png",
        normalPhotoUrl: "/illustration/salad/saladNormal.png",
        mobilePhotoUrl: "/illustration/salad/saladMobile.png",
        previewPhotoUrl: "/illustration/salad/saladPreview.png",
        price: 80,
        name: "Мини-салат Экзо-Плантаго",
        category: "Начинки",
        quantity: 1,
    },
    {
        id: 14,
        largePhotoUrl: "/illustration/cheese/cheeseLarge.png",
        normalPhotoUrl: "/illustration/cheese/cheeseNormal.png",
        mobilePhotoUrl: "/illustration/cheese/cheeseMobile.png",
        previewPhotoUrl: "/illustration/cheese/cheesePreview.png",
        price: 80,
        name: "Сыр с астероидной плесенью",
        category: "Начинки",
        quantity: 1,
    },
];

type TIngredientCategory =
    { id: 1, category: 'Все' } |
    { id: 2, category: 'Булки' } |
    { id: 3, category: 'Соусы' } |
    { id: 4, category: 'Начинки' }

const ingredientsCategories: TIngredientCategory[] = [
    {
        id: 1,
        category: "Все",
    },
    {
        id: 2,
        category: "Булки",
    },
    {
        id: 3,
        category: "Соусы",
    },
    {
        id: 4,
        category: "Начинки",
    },
];


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IIngredient[] | TIngredientCategory[] | { message: string }>
) {
    if (req.method === 'GET') {
        const { type } = req.query;

        if (typeof type === 'string') {
            if (type === 'categories') {
                res.status(200).json(ingredientsCategories);
            } else if (type === 'ingredients') {
                res.status(200).json(ingredients);
            } else {
                res.status(400).json({ message: 'Недопустимое значение параметра type' });
            }
        } else {
            res.status(400).json({ message: 'Параметр type должен быть строкой' });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}
