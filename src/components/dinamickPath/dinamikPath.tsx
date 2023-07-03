import React from "react";
import styled from "styled-components";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import IngridientOrder from "../../components/ingridient/ingridientOrder";
import Image from "next/image";

import { IIngredient } from "@/components/redux/slices/addCartSlice";

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');

function generateRandomDate(start: Date, end: Date) {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
}

export const orders = [
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

const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;

  color: #f2f2f3;
`;

const TimeOrder = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8585ad;
`;

const PriceSum = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  padding-left: 20px;
`;

const Identificator = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

const BlockStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 60px;
`;

const StatusTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
`;

const Status = styled.div`
  color: #00cccc;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const CompoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
  max-width: 100%;
`;

const CompoundTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const BoxCompound = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  gap: 16px;
  height: 300px;
`;

const BoxTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const getStaticPaths = async () => {
//   const response = await fetch('http://localhost:3000/api/orders?limit=12&offset=0', {
//     method: 'GET',
//     headers: {
//         authorization: 'Bearer.access_token',
//         role: 'admin',
//     },
//   })
//   const data = await response.json()

//   const paths = data?.orders?.map((order) => {
//     return {
//       params: {id: String(order?.order_number)}
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context?.params?.id
  
//   const response = await fetch(`http://localhost:3000/api/orders?limit=12&offset=0/${id}`, {
//     method: 'GET',
//     headers: {
//         authorization: 'Bearer.access_token',
//         role: 'admin',
//     },
//   })
//   const data = await response.json()
//   console.log(data)

//   return {
//     props: {order: data}
//   }
// } 


const DinamickPath: React.FC = (orderObject: any) => {

  return (
        <BlockOrder>
          <Identificator>#{orderObject?.order_number}</Identificator>
          <BlockStatus>
            <StatusTitle>{orderObject?.name}</StatusTitle>
            <Status>{orderObject?.status}</Status>
          </BlockStatus>
          <CompoundBlock>
            <CompoundTitle>Состав:</CompoundTitle>
            <OverlayScrollbarsComponent>
              <BoxCompound>
                {orderObject?.ingredients?.map((obj: IIngredient) => {
                  return (
                    <>
                      <IngridientOrder
                        photo={obj.previewPhotoUrl}
                        price={obj.price}
                        nameItem={obj.name}
                        quantity={obj.quantity}
                      />
                    </>
                  );
                })}
              </BoxCompound>
            </OverlayScrollbarsComponent>
          </CompoundBlock>
          <BoxTime>
            <TimeOrder>
              {new Date(orderObject?.date_created).toLocaleString()}
            </TimeOrder>
            <PriceSum>
              <Price>{orderObject?.price}</Price>
              <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
            </PriceSum>
          </BoxTime>
        </BlockOrder>
  );
};

export default DinamickPath;

